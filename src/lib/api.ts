import axios from 'axios'

const api = axios.create()
axios.defaults.headers.post['Content-Type'] = 'application/json'
export default api
