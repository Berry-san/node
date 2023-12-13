const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to the hompage')
  } else if (req.url === '/about') {
    res.end('Welcome to the About page')
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>Page not available</p>
      <a href="/">Go back home</a>
    `)
  }
  //   res.write('Welcome to the hompage')
  //   res.end()
})

server.listen(3000)
