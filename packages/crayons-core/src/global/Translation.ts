import { Build as BUILD, ComponentInterface } from '@stencil/core';

import { createStore } from '@stencil/store';

import { setupConfig } from './config';
import { AppConfigService } from './config-service';

interface i18nConfig {
  [key: string]: {
    [key: string]: string;
  };
}
declare global {
  interface Window {
    __crayons__requests: any;
  }
}

// const strings: any = {
//   en: {
//     'hello': 'Hello',
//     'world': 'World',
//     'add': 'Add12',
//     'cancel': 'Cancel',
//     'update': 'Update',
//     'ok': 'OK',
//     'search': 'Search',
//     'no items found': 'No items found',
//     'no data available': 'No data available',
//   },
//   de: {
//     'hello': 'Hola',
//     'world': 'Mundo',
//     'add': 'Addieren',
//     'cancel': 'Stornieren',
//     'update': 'Aktualisierung',
//     'ok': 'OK',
//     'search': 'Suche',
//     'no items found': 'Keine Elemente gefunden',
//     'no data available': 'Keine Daten vorhanden',
//   },
// };

const { state, onChange } = createStore({
  lang: '',
  globalI18n: {
    t: (k): string => {
      return k;
    },
  },
});

window.__crayons__requests =
  window.__crayons__requests || new Map<string, Promise<any>>();

const requests = window.__crayons__requests;
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
function getBrowserLang() {
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

export function getLocale(): string {
  const locale = getLangAttr() || getBrowserLang();
  return locale;
}

async function fetchTranslations(lang): Promise<any> {
  try {
    const locale = lang || getLocale();

    const defaultI18nStrings = await fetchDefaultTranslations(locale);

    const customI18nStrings =
      AppConfigService.getInstance().get('customI18nStrings')?.[locale] || {};
    console.log({ locale, defaultI18nStrings, customI18nStrings });
    const finalI18nStrings = {
      ...defaultI18nStrings,
      ...customI18nStrings,
    };

    return {
      t(key) {
        if (key) return finalI18nStrings[key.toLowerCase()] || key;
        return '';
      },
    };
  } catch (err) {
    console.error(`Error fetching translations. Return the passed string`, err);
    return {
      t(key) {
        if (key) return key;
        return '';
      },
    };
  }
}

export function fetchDefaultTranslations(locale: string): Promise<any> {
  let req = requests.get(locale);
  if (!req) {
    console.log('get default translations for pull from config', locale);
    req = import(`../i18n/${locale}.js`)
      .then((result) => result.default)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.error(
          `Error loading locale: ${locale} from pre-defined set`,
          err
        );
        return {};
      });
    requests.set(locale, req);
  }

  return req;
}

export function setTranslations(json: i18nConfig): void {
  setupConfig({
    customI18nStrings: json,
  });
  console.log('setting custom translations ', json);
}

/** Decorator to handle i18n support */
export function i18n({ defaultValue = '' } = {}): any {
  return (proto: ComponentInterface, propName: string) => {
    (BUILD as any).cmpWillLoad = true;

    const { componentWillLoad } = proto;

    proto.componentWillLoad = async function () {
      let isDefaultValueUsed = true;
      if (!this[propName]) {
        //const strings = await fetchTranslations(state.lang);
        this[propName] = state.globalI18n.t(defaultValue);
        isDefaultValueUsed = false;
      }

      onChange('globalI18n', async (strings) => {
        if (!isDefaultValueUsed) {
          this[propName] = strings.t(defaultValue);
        }
      });

      return componentWillLoad && componentWillLoad.call(this);
    };
  };
}

onChange('lang', async (lang) => {
  console.log('new lang ', lang);
  const strings = await fetchTranslations(state.lang);
  state.globalI18n = strings;
});

let mo;

if ('MutationObserver' in window) {
  removeMO();
  mo = new MutationObserver(async (data) => {
    if (data[0].attributeName === 'lang') {
      const lang = document.documentElement.getAttribute('lang');
      if (lang === data[0].oldValue) {
        console.log('same old value ', lang);
        return;
      }
      state.lang = lang;
    }
  });

  mo.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['lang'],
    attributeOldValue: true,
  });
}
function removeMO() {
  if (mo) {
    console.log('removed');
    mo.disconnect();
    mo = undefined;
  }
}

export const i18nState = state;
