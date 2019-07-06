module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['@vue/prettier',
        "plugin:vue/essential",
        "plugin:prettier/recommended",
        "eslint:recommended"
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/component-name-in-template-casing': 'off',
        'vue/v-bind-style': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};