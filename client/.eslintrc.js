/*eslint no-trailing-spaces: ["error", { "ignoreComments": true }]*/
/* eslint-disable */
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'vue/script-indent': ["error", 2, { "baseIndent": 1 }],
    "no-tabs": 0,
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
/* eslint-disableƒ */