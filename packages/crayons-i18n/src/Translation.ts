import { Build as BUILD, ComponentInterface } from '@stencil/core';

import { createStore } from '@stencil/store';

interface i18nConfig {
  [key: string]: {
    [key: string]: Record<string, unknown> | string;
  };
}

/**
 * Attempts to find the closest tag with a lang attribute.
 * @param element The element to find a lang attribute for.
 */
function getLangAttr(element = document.body) {
  const closestElement = element.closest('[lang]') as HTMLElement;
  if (!closestElement) return undefined;

  let lang = closestElement.lang;
  if (!lang) return undefined;

  if (lang.indexOf('-') !== -1) {
    lang = lang.split('-')[0];
  }
  if (lang.indexOf('_') !== -1) {
    lang = lang.split('_')[0];
  }
  return lang;
}
function getNavigatorLang() {
  if (
    typeof window === 'undefined' ||
    typeof window.navigator === 'undefined'
  ) {
    return undefined;
  }
  let browserLang =
    window.navigator.languages && window.navigator.languages.length > 0
      ? window.navigator.languages[0]
      : null;
  browserLang = browserLang || window.navigator.language;
  if (typeof browserLang === 'undefined') {
    return 'en';
  }
  if (browserLang.indexOf('-') !== -1) {
    browserLang = browserLang.split('-')[0];
  }
  if (browserLang.indexOf('_') !== -1) {
    browserLang = browserLang.split('_')[0];
  }
  return browserLang;
}
function getBrowserLang(): string {
  const locale = getLangAttr() || getNavigatorLang();
  return locale;
}

function getVal(path: string, obj: any) {
  return path?.split('.').reduce((r, val) => {
    return r ? r[val] : undefined;
  }, obj);
}

export class TranslationController {
  state: any;
  onChange: any;
  requests = new Map<string, Promise<any>>();

  constructor() {
    const { state, onChange } = createStore({
      lang: '',
      globalI18n: null,
      customTranslations: {},
    });
    this.state = state;
    this.onChange = onChange;

    this.onChange('lang', async (lang: string) => {
      console.log('Language Change Detected ', lang);
      await this.fetchTranslations(lang);
    });

    if ('MutationObserver' in window) {
      const mo = new MutationObserver(async (data) => {
        if (data[0].attributeName === 'lang') {
          const lang = document.documentElement.getAttribute('lang');
          if (lang !== data[0].oldValue) {
            this.state.lang = lang;
          }
        }
      });

      mo.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['lang'],
        attributeOldValue: true,
      });
    }
  }

  async fetchTranslations(lang?: string): Promise<any> {
    const locale = lang || getBrowserLang();

    return this.fetchDefaultTranslations(locale).then((defaultI18nStrings) => {
      const customI18nStrings =
        (this.state.customTranslations as any)?.[locale] || {};
      const finalI18nStrings = {
        ...defaultI18nStrings,
        ...customI18nStrings,
      };
      this.state.globalI18n = finalI18nStrings;
      return finalI18nStrings;
    });
  }

  /**
   * set lang manually
   * @param lang
   */
  setLang(lang: string): void {
    this.state.lang = lang;
  }

  /**
   *
   * @returns the selected lang
   */
  getLang(): string {
    return this.state.lang;
  }

  fetchDefaultTranslations(lang: string): Promise<any> {
    let req = this.requests.get(lang);
    if (!req) {
      req = import(`../i18n/${lang}.js`)
        .then((result) => result.default)
        .then((data) => {
          return data;
        })
        .catch((err) => {
          console.error(
            `Error loading config for lang: ${lang} from pre-defined set`,
            err
          );
          return {};
        });
      this.requests.set(lang, req);
    }

    return req;
  }

  /**
   * set custom translations. ex: {
    en: {
      common: {
        add: 'Add',
        cancel: 'Cancel',
        update: 'Update',
      },
    },
    de: {
      common: {
        add: 'Addieren',
        cancel: 'Stornieren',
        update: 'Aktualisierung',
      },
    },
  };
   * it will override existing translations if the key is already present.
   * @param json
   */
  setTranslations(json: i18nConfig): void {
    this.state.customTranslations = json;
  }

  /** Decorator to handle i18n support */
  i18n({ defaultValue = '', keyName = '' } = {}): any {
    return (proto: ComponentInterface, propName: string) => {
      (BUILD as any).cmpWillLoad = true;

      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const that = this;

      const { componentWillLoad } = proto;

      proto.componentWillLoad = async function () {
        if (!that.state.globalI18n) {
          await that.fetchTranslations(getBrowserLang());
        }

        let isDefaultValueUsed = false;
        if (!this[propName]) {
          this[propName] =
            getVal(keyName.toLowerCase(), that.state.globalI18n) ||
            defaultValue;
          isDefaultValueUsed = true;
        }

        that.onChange('globalI18n', async () => {
          if (isDefaultValueUsed) {
            this[propName] =
              getVal(keyName.toLowerCase(), that.state.globalI18n) ||
              defaultValue;
          }
        });

        return componentWillLoad && componentWillLoad.call(this);
      };
    };
  }
}