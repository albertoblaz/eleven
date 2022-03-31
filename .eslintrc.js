module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier', // Turn off rules that will be handled by prettier
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
    },
    reportUnusedDisableDirectives: true,
    rules: {
        'arrow-body-style': ['error', 'as-needed'],
        eqeqeq: [
            'error',
            'always',
            {
                null: 'ignore',
            },
        ],
        'no-console': 'off',
        'no-duplicate-imports': 'error',
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'none',
                ignoreRestSiblings: true,
            },
        ],
        'prefer-const': 'error',
        'prefer-spread': 'error',
        'react/display-name': [
            'error',
            {
                ignoreTranspilerName: false,
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': [
            'error',
            {
                skipUndeclared: true,
            },
        ],
        'react/no-string-refs': ['error'],
        'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-uses-react': 'warn',
        'react/jsx-uses-vars': 'warn',
    },
    overrides: [
        {
            /* Typescript Files */
            files: ['*.{ts,tsx}'],
            extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
            rules: {
                '@typescript-eslint/no-empty-function': [
                    'error',
                    { allow: ['arrowFunctions'] },
                ],
            },
        },
        {
            /* Test files */
            files: ['*.{spec,test}.js', 'spec.js'],
            env: {
                node: true,
                jest: true,
            },
            rules: {
                'jsx-a11y/click-events-have-key-events': 'off',
                'jsx-a11y/no-static-element-interactions': 'off',
                'react/prop-types': 'off',
            },
        },
        {
            /* Storybook Documentation */
            files: ['**/*.stories.mdx'],
            rules: {
                'react/jsx-no-target-blank': 'off',
                'react/prop-types': 'off',
                'multiline-ternary': 'off',
                indent: 'off',
                'react/jsx-indent': 'off',
                '@typescript-eslint/ban-ts-comment': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-implicit-any': 'off',
            },
        },
        {
            /* Node Tooling */
            files: ['.eslintrc.js', 'snapshotResolver.js'],
            env: {
                node: true,
            },
        },
    ],
}
