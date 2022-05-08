'use strict'

const services = require('../services')

module.exports = {
  async getStatus(ctx) {
    ctx.body = {
      status: 'OK',
    }
  },

  async getLocation(ctx) {
    const apiKey = ctx.request.query.apiKey
    const { address, city, country, locality } = ctx.request.body

    // This should be moved to a middleware
    if (!apiKey) {
      const error = new Error('Missing API KEY')
      error.status = 403
      throw error
    }

    const response = await services.getLocation(apiKey, {
      address,
      city,
      country,
      locality,
    })

    ctx.body = response.body
    ctx.status = response.status
  },
}
