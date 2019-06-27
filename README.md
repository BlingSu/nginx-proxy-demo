# Nginx解决跨域问题

## 安装

```
npm i -g http-server
```

## 使用

```
npm run client
npm run server
```

## 例子

#### 前端代码
```
var xhr = new XMLHttpRequest()
  xhr.open('get', '/api/getData')
  xhr.withCredentials = true
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText)
      console.log(xhr.getAllResponseHeaders())
    }
  }
  xhr.send()
```

#### 服务端代码

```
const http = require(`http`)

const PORT = 8888
const server = http.createServer((req, res) => {
  console.log(req.headers)
  res.end('{name: "angelsubi", age: "22"}')
})

server.listen(PORT, () => {
  console.log(`server is running in`, PORT)
})
```

#### Nginx反向代理

```
server {
    listen 80;

    server_name a.com;

    location / {
        proxy_pass http://127.0.0.1:9090;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:8888;
    }
}
```

## MIT