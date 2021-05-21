# nodejs-proxy-server

Based on a combination of express http-proxy-middleware configured to generate a reverse proxy server, mainly used to solve cross-domain problems

一个基于 express 结合 http-proxy-middleware 配置生成一个反向代理服务器，主要用于解决跨域问题

# Installation(安装)

```bash
npm install nodejs-proxy-server
```

# Usage(使用)

+ Creat file proxy-server.js and write the following content

  创建文件 proxy-server.js 并写入以下内容

```javascript
const nodeProxyServer = require("nodejs-proxy-server")
// nodeProxyServer(apipath, targethost, proxyport)
nodeProxyServer('/', 'http://www.google.com', 3000)
```

or

```javascript
// require('nodejs-proxy-server')(apipath, targethost, proxyport);
require('nodejs-proxy-server')('/','http://www.google.com',3000);
```

+ Execute the following command in the terminal

  在终端执行下面的命令

```bash
node proxy-server.js
```

```javascript
axios.get('http://localhost:3000').then(res=>{
console.log(res)
})
```

# Other examples(其它示例)

```javascript
const nodeProxyServer = require("nodejs-proxy-server")
// nodeProxyServer(apipath, targethost, proxyport)
nodeProxyServer('/home', 'http://www.google.com', 8081)
```

```bash
node proxy-server.js
```

```javascript
axios.get('http://localhost:8081/home').then(res=>{
console.log(res)
})
```

# notice(注意)

When changing the parameters passed must restart the server

当改变传入的参数必须重启服务器
