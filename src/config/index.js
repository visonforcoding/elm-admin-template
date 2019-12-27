module.exports = {

    title: 'wlnav',
  
    /**
     * @type {boolean} true | false
     * @description Whether fix the header
     */
    fixedHeader: false,
  
    /**
     * @type {boolean} true | false
     * @description Whether show the logo in sidebar
     */
    sidebarLogo: false,
    baseUrl: {
      development: '', // 本地
      dev: 'http://csc-dev.huolala.cn', // fab pack:csc-dev
      stg: 'http://csc-stg.huolala.cn', // fab pack:csc-stg
      gra: 'http://csc-gra.huolala.cn', // fab pack:csc-gra
      prod: 'http://csc.huolala.cn/' // fab pack:csc-prod
    },
    getBaseUrl() {
      // const API_URL = process.env.VUE_APP_API_URL || 'development'
      // let key = API_URL.replace(/^csc-(.*)/, '$1')
      let requestUrl = ''
      let prefix = 'http://'
      let host = location.hostname
      let port = location.port
      if (/-dev|-local|localhost|^192|^127/.test(host)) {
        requestUrl = prefix + host + ':' + port
      } else if (/-stg/.test(host)) {
        requestUrl = prefix + host
      } else if (/-gra/.test(host)) {
        requestUrl = prefix + host
      } else {
        requestUrl = prefix + host
      }
      return requestUrl
    },
    /**
     * 是否是本地环境
     */
    isDev: process.env.NODE_ENV === 'development'
  }
  