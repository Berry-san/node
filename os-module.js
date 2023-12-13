const os = require('os')

const user = os.userInfo()
console.log(user)

console.log(`Up for ${os.uptime() / 3600}s `)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem() / 1024,
  freeMem: os.freemem(),
}

console.log(currentOS)
