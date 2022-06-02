export const API_URL = process.env.REACT_APP_API_HOST
  ? process.env.REACT_APP_API_HOST + process.env.REACT_APP_API_BASE_PATH
  : 'http://todo/api/v1'

export const TODOS_API_ROUTE = '/todos'
export const STATUS_API_ROUTE = '/status'
export const LOGOUT_API_ROUTE = '/logout'
