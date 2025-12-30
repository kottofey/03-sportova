import { globalIgnores } from 'eslint/config';
import { defineConfigWithVueTs, vueTsConfigs, configureVueProject } from '@vue/eslint-config-typescript';
import importPlugin from 'eslint-plugin-import';
import pluginVue from 'eslint-plugin-vue';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import tseslint from 'typescript-eslint';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

configureVueProject({ scriptLangs: ['ts'] });

export default defineConfigWithVueTs(
  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,
  skipFormatting,
  importPlugin.flatConfigs.typescript,
  // importPlugin.flatConfigs.recommended,

  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue,tsx,jsx}'],

    settings: {
      'import-x/resolver-next': createTypeScriptImportResolver({
        alwaysTryTypes: true,
        project: './tsconfig.json',
      }),
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: ['index', 'external', 'builtin', ['parent', 'sibling']],
          'newlines-between': 'always-and-inside-groups',
        },
      ],
      'import/newline-after-import': [
        'error',
        {
          count: 1,
          exactCount: true,
          considerComments: true,
        },
      ],
    },
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),
  // tseslint.configs.recommended,

  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
);
