import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

// 配置每行最大字符数
export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // 分号检测
      'semi': ['error', 'always'],
      // 单引号检测
      'quotes': ['error', 'single'],
      // 未使用变量不报错
      'no-unused-vars': 'off',
      // import React from 'react' 不检测未使用
      'react/no-unused-vars': 'off',
      // 配置每行最大字符数
      'max-len': ['error', { code: 90 }],
    },
  },
)
