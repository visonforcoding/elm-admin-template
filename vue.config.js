// vue.config.js
module.exports = {
    // 选项...
    lintOnSave: false,
    devServer: {
        open: true,
        overlay: {
          warnings: false,
          errors: true
        },
        proxy: {
          // change xxx-api/login => mock/login
          // detail: https://cli.vuejs.org/config/#devserver-proxy
          // [process.env.VUE_APP_BASE_API]: {
          //   target: `http://127.0.0.1:${port}/mock`,
          //   changeOrigin: true,
          //   pathRewrite: {
          //     ['^' + process.env.VUE_APP_BASE_API]: ''
          //   }
          // }
          '/api': {
            target: 'http://wlnav-dev.huolala.work:11010',
            ws: true,
            changeOrigin: true,
            pathRewrite: {
              '^/api': '/', // rewrite path
            },
          },
        },
        // after: require('./mock/mock-server.js')
      },
}