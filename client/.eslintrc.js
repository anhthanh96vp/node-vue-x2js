/*eslint no-trailing-spaces: ["error", { "ignoreComments": true }]*/
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
  	"indent": 0,
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
