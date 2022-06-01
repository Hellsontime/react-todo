import { customAxios } from '../axiosHelper'

const authHelper = (user, setError, setRedirectToTodo, setUser, setLoading, route) => {
  setLoading(true)
  customAxios
    .post(route, {
      ...user
    })
    .then((_res) => {
      localStorage.setItem('user-token', _res.data.token)
      localStorage.setItem('user', JSON.stringify(_res.data.user))
      setLoading(false)
      setUser(_res.data)
      setRedirectToTodo(true)
    })
    .catch((_rej) => {
      setLoading(false)
      setError(_rej)
    })
}

export default authHelper
