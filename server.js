const Koa = require('koa')

const cors = require('@koa/cors')
const bodyParser = require('koa-body')
const mount = require('koa-mount')

/* API Routers */
const apiRouters = require('./src/routers')

// You will have 3 Koa Apps (client, server, client + server)
/**
 * Koa app (client + server)
 */
const app = new Koa()

/**
 * Koa server
 */
const server = new Koa()

/**
 * Services
 */
server.use(bodyParser())
server.use(cors())

server.use(apiRouters.routes())
server.use(apiRouters.allowedMethods())

app.use(mount('/api', server)) // You will access the server app from here

const config = {
  appName: 'Google Maps App',
  port: 4000,
  environment: 'development',
}

app.listen(config.port)
console.log('\n==============================')
console.log(`
      App  : ${config.appName}
      Port : ${config.port}
      Env  : ${config.environment}
    `)
console.log('==============================\n')
