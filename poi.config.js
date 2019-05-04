module.exports = {
  entry: 'example/index.js',
  output: {
    dir: 'example/dist'
  },
  chainWebpack(config) {},
  babel: {
    jsx: 'vue'
  }
}
