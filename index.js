const http = require(`http`)

const PORT = 8888
const server = http.createServer((req, res) => {
  console.log(req.headers)
  res.end('{name: "angelsubi", age: "22"}')
})

server.listen(PORT, () => {
  console.log(`server is running in`, PORT)
})