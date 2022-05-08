'use strict'

const Router = require('koa-router')
const router = new Router()

router.get('/status', async (ctx) => {
  ctx.body = {
    status: 'OK',
  }
})

module.exports = router
