module.exports = {
  configureWebpack: {
    resolve: {
      mainFields: ['jsnext:main', 'browser', 'module', 'main']
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
                ? '/web-socket-agent-status/'
                : '/'
}