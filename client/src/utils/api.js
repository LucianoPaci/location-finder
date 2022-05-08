import axios from 'axios'

const endpoint = process.env.REACT_APP_BACKEND_ENDPOINT + '/api'
const apikey = process.env.REACT_APP_GOOGLE_API_KEY

class Api {
  static async getLocation(locationData) {
    const res = await axios.post(
      `${endpoint}/location?apiKey=${apikey}`,
      locationData
    )
    return res.data
  }
}

export default Api
