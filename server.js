const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const bodyParser = require('koa-body')
const mount = require('koa-mount')
const serve = require('koa-static')
const path = require('path')
const fs = require('fs')

/* API Routers */
const apiRouters = require('./src/routers')

// We will have 3 Koa Apps (client, server, client + server)
/**
 * Koa app (client + server)
 */
const app = new Koa()

/**
 * Koa client (React App)
 */
const client = new Koa()
const router = new Router()

function index(ctx) {
  ctx.body = fs.readFileSync(
    path.resolve(path.join('client/build', 'index.html')), // We specify where will be the client app
    'utf8'
  )
}

router.get('/', index)
// router.get('/*', index)
client.use(serve(path.resolve('client/build'))) // We specify where you want to serve your client app
client.use(router.routes())

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

app.use(mount('/api', server)) // We will access the server app from here
app.use(mount('/client', client)) // We will access the client app from here

const config = {
  appName: 'Google Maps App',
  port: 4000, // Backend Port
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
