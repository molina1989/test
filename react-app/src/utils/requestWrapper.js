import 'whatwg-fetch'

const API_URL = process.env.REACT_APP_BACKEND_URL


let request =  (endPoint, method = 'GET', requestObject = null, logged = true) => {
  let options = {}
  options.headers = new Headers()
  options.method = method
  if (logged) {
    options.headers.append('Authorization',localStorage.accessTokenDev)
  }
  if (requestObject) {
    options.body = JSON.stringify(requestObject)
  }

  options.headers.append('Content-Type', 'application/json')
  return fetch(API_URL + endPoint, options).then((response) => {
    if ((response.status >= 403 &&  response.status <= 405)  || response.status === 500 ) {
      window.location = `/error-${response.status}`
    } else {
      return response.json()
    }
  })
}

export default request
