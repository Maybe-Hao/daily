const moment = require('moment');
const secret = require('./secret');
moment.locale("zh-cn")

module.exports = {
  '@vuepress/last-updated': {
    transformer: (timestamp) => moment(timestamp).format("LLLL")
  },
  '@vuepress/pwa':  {
    serviceWorker: true,
    updatePopup: {
      message: "内容有更新啦~",
      buttonText: "我看看"
    }
  },
  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',

    // 其他的 Vssue 配置
    owner: 'Maybe-Hao',
    repo: 'daily',
    clientId: secret.clientId,
    clientSecret: secret.clientSecret,
    autoCreateIssue: true
  },
  '@vuepress/back-to-top': true,
  "vuepress-plugin-auto-sidebar": {
    nav: true,
    title: {
      map: {
        "/clanguage/": "C语言",
        "/math/advancedmathematics/": "高等数学",
        "/math/linearalgebra/": "线性代数",
        "/computerBasics/operatingSystem/": "操作系统",
        "/computerBasics/dataStructure/": "数据结构",
        "/computerBasics/computerNetwork/": "计算机网络",
        "/computerBasics/compositionPrinciple/": "计算机组成原理",
        "/other/": "其他"
      }
    }
  },
  '@vuepress/medium-zoom': {
    selector: 'img',
  }
}