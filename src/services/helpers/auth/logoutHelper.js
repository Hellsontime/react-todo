import { customAxios } from '../axiosHelper'
import { LOGOUT_API_ROUTE } from '../../constants/App'

const logoutHelper = (setLoading, setError) => {
  setLoading(true)
  customAxios
    .post(LOGOUT_API_ROUTE)
    .then(() => {
      localStorage.clear()
      setLoading(false)
    })
    .catch((_rej) => {
      setLoading(false)
      setError(_rej)
    })
}

export default logoutHelper
