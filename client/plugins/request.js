import 'universal-fetch'

let baseUrl = ''

if (process.server) {
  baseUrl = `http://${process.env.HOST || 'localhost'}:${process.env.PORT ||
    6992}`
}

function get(uri) {
  return fetch(`${baseUrl}${uri}`)
}

export default {
  get,
}
