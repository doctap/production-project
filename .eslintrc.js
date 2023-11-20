module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "eslint:recommended",
        "standard-with-typescript",
        "plugin:i18next/recommended"
    ],
    overrides: [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    plugins: [
        "react",
        "i18next"
    ],
    rules: {
        "react/react-in-jsx-scope": [0],
        "@typescript-eslint/explicit-function-return-type": [0],
        "no-unused-vars": "warn",
        "no-underscore-dangle": "off",
        "i18next/no-literal-string": ["error", {"markupOnly": true }]
    },
    globals: {
        _IS_DEV_: true
    },
    overrides: {
        files: ['**/src/**/*.test.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off'
        },
    },
}
