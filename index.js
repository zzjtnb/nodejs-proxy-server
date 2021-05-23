/**
 * 获取本机IPv4 ip地址
 * @return {string}  返回本机IPv4 ip地址
 */
function getIPAdress() {
  var interfaces = require('os').networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
}
/**
 *
 * @param {*} apipath api地址
 * @param {*} targethost 需要代理的目标服务器
 * @param {*} proxyport 本地反向代理服务器端口
 */
function nodeProxyServer(apipath, targethost, proxyport) {
  const express = require('express');
  const chalk = require('chalk');
  const cors = require('cors');
  const app = express();
  app.use(cors());
  const port = proxyport || 8080;
  let apipaths = '^' + apipath
  let pathRewrites = {}
  pathRewrites[apipaths] = ''
  const options = {
    target: targethost,  //需要代理的目标服务器
    changeOrigin: true,  //否需要改变原始主机头为目标URL,是否进行代理
    ws: true,  //是否代理websockets,
    pathRewrite: pathRewrites, //路径重写
  }
  const { createProxyMiddleware } = require('http-proxy-middleware');
  app.use(apipath, createProxyMiddleware(options));
  app.listen(port, () => {
    console.log(`  Proxy Server running at:`)
    console.log(`  - Local:   ${chalk.cyan(`http://localhost:${port}`)}`)
    console.log(`  - Network: ${chalk.cyan(`http://${getIPAdress()}:${port}`)}`)
  })
}
module.exports = exports = nodeProxyServer