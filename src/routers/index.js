'use strict'

const Router = require('koa-router')
const router = new Router()

const apiController = require('../controllers')

router.get('/status', apiController.getStatus)

router.post('/location', apiController.getLocation)

module.exports = router
