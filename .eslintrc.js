module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:react-hooks/recommended',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
    ],
    ignorePatterns: ['*.test.*'],
    rules: {
        'linebreak-style': ['error', 'unix'],
        semi: ['error', 'never'],
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'react/function-component-definition': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/require-default-props': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'react/jsx-props-no-spreading': 'warn',
        'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
        'no-console': 'off',
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'object-curly-newline': ['error', { ImportDeclaration: { multiline: true } }],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid', 'to'],
            },
        ],
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'no-undef': 'off',
    },
    globals: {
        _IS_DEV_: true,
        _API_: true,
    },
    overrides: [
        {
            files: [
                '**/src/**/*.{test,stories}.{ts,tsx}',
                '**/*.ts',
            ],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
                'react/jsx-props-no-spreading': 'off',
            },
            env: {
                jest: true,
            },
        },
    ],
}
