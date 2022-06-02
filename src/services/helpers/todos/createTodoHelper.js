import { customAxios } from '../axiosHelper'
import { TODOS_API_ROUTE } from '../../constants/App'

const createTodoHelper = (title, setTodos) => {
  customAxios
    .post(TODOS_API_ROUTE, { title })
    .then((_res) => {
      setTodos((prevState) => [...prevState, _res.data])
    })
    .catch((_rej) => {
      console.log(_rej)
    })
}

export default createTodoHelper
