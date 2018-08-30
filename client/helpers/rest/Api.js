import axios from 'axios'

export default (path) => {
  if ((typeof path === 'undefined' || path === null)) {
    path = `http://localhost:8081`
  }
  return axios.create({
    baseURL: path,
    timeout: 30000
  })
}
