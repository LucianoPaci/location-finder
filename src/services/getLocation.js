'use strict'
const { Client } = require('@googlemaps/google-maps-services-js')

module.exports = async function getLocation(
  apiKey,
  { address, city, country, locality }
) {
  const client = new Client({})

  if (!address) {
    const error = new Error('Address is required')
    error.status = 400
    throw error
  }

  try {
    const response = await client.geocode({
      params: {
        address,
        components: {
          country,
          locality,
        },
        key: apiKey,
      },
      timeout: 1000,
    })

    if (response.data.results.length > 0) {
      console.log(response.data.results[0])
      return { body: response.data.results[0], status: 200 }
    } else {
      return { body: response.data.results, status: 200 }
    }
  } catch (e) {
    const error = new Error(e.response.data.error_message)
    console.log(e.response.data.error_message)
    error.status = e.response.data.status
    throw error
  }
}
