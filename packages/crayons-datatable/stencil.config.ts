import { Config } from '@stencil/core';
import { reactOutputTarget } from 'react-output-target';
import { sass } from '@stencil/sass';

import { generateJsonDocs } from './customElementDocGenerator';

const packageName = 'crayons-datatable';
export const config: Config = {
  autoprefixCss: true,
  namespace: packageName,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [{ src: '../../crayons-i18n/i18n/*.js', dest: 'i18n', warn: true }],
    },
    {
      type: 'docs-readme',
      footer: 'Built with ❤ at Freshworks',
    },
    {
      /*
        Generate the readme.md files within the www directory
        at the root of the repo for Vuepress to generate the
        the website.
      */
      type: 'docs-readme',
      dir: '../../www/datatable',
      footer: 'Built with ❤ at Freshworks',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'custom',
      generator: generateJsonDocs,
      name: 'custom-element-docs',
    },
    {
      type: 'www',
      copy: [{ src: '../../crayons-i18n/i18n/*.js', dest: 'i18n', warn: true }],
    },
    {
      type: 'www',
      dir: `../../www/.vuepress/public/${packageName}/`,
      copy: [{ src: '../../crayons-i18n/i18n/*.js', dest: 'i18n', warn: true }],
    },
    {
      type: 'docs-json',
      file: 'dist/docs.json',
    },
    reactOutputTarget({
      componentCorePackage: `@freshworks/${packageName}`, // name in the package.json should be used
      proxiesFile: './crayons-react/components.ts',

      // lazy load -> code splitting
      // includeDefineCustomElements: true,
      // includePolyfills: true,

      // tree shakable
      customElementsDir: 'dist/components',
      includeImportCustomElements: true,
    }),
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/styles/index.scss'],
    }),
  ],
  globalScript: 'src/global.ts',
  testing: {
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    collectCoverageFrom: [
      '**/*.{ts,tsx}',
      '!**/node_modules/**',
      '!**/dist/**',
      '!**/www/**',
      '!**/loader/**',
      '!**/stencil.config.ts',
      '!**/*.d.ts',
      '!**/src/index.ts',
      '!**/customElementDocGenerator.ts',
    ],
    coverageReporters: ['json', 'lcov', 'text', 'clover', 'text-summary'],
  },
  buildEs5: true,
  extras: {
    appendChildSlotFix: true,
    cssVarsShim: true,
    dynamicImportShim: true,
    initializeNextTick: true,
    safari10: true,
    scriptDataOpts: true,
    shadowDomShim: true,
    cloneNodeFix: true,
    slotChildNodesFix: true,
  },
  enableCache: true,
};
