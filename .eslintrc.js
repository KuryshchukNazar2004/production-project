module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.tsx', '.js', '.jsx'] },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-used-vars': 'warn',
        indent: [2, 4],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "prettier/prettier": [
            "error",
            {
              "singleQuote": true,
              "parser": "typescript",
              "endOfLine": "auto",
            }
        ],
        "@typescript-eslint/strict-boolean-expressions": "off",
        "no-used-vars": "off",
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/no-confusing-void-expression": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "react/no-deprecated": "off",
        "@typescript-eslint/naming-convention": "off",
    },
};
