import globals from 'globals';
import pluginJs from '@eslint/js';


export default [
  {languageOptions: { globals: globals.node },
    rules : {
      'no-unused-vars' : 'warn',
      'quotes': ['warn','single'],
      'semi': ['warn', 'always'],
      'eqeqeq': ['error', 'always'],
      'no-console': 'warn',
      'indent': ['error', 2],
      'no-var' : 'error',
    }

  },
  pluginJs.configs.recommended,
];