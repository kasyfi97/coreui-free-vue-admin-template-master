import axios from 'axios'

const Loginapi = process.env.Loginapi || 'http://gbi.sytes.net:3000'

export default axios.create({
  baseURL: Loginapi,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.token
  }
})