const headConf = require("./config/headConf");
const nav = require("./nav");
const sidebar = require("./config/sidebarConf");
const pluginsConf = require("./config/pluginsConf");

const moment = require('moment')
moment.locale("zh-cn")

module.exports = {
  title: "一个卡卡角角",
  description: "小李浩的个人笔记,持续更新中",
  head: headConf,
  plugins: pluginsConf,
  sidebar: sidebar,
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: nav,
    displayAllHeaders: true,
    lastUpdated: '更新时间',
  }
}