module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
        commonjs: true
    },
    extends: [
        'airbnb/base',
        'eslint:recommended',
        '@vue/typescript',
        '@vue/typescript/recommended',
    ],
    // parser: 'vue-eslint-parser',
    parserOptions: {
        // parser: 'babel-eslint',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            legacyDecorators: true,
        }
    },
    plugins: [
        'vue',
        'pug'
    ],
    rules: {
        'no-underscore-dangle': 'off',
        'consistent-return': 'off',
        'func-names': 'off',
        'max-len': ['off', {
            code: 'off',
            tabWidth: 4
        }],
        indent: ['error', 4],
        'no-console': 'off',
        'arrow-parens': ['error', 'as-needed'],
        'vue/custom-event-name-casing': 'off',
        'no-return-assign': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'no-param-reassign': 'off',
        'class-methods-use-this': 'off'
    }
}
