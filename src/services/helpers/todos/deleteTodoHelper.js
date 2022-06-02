import { customAxios } from '../axiosHelper'
import { TODOS_API_ROUTE } from '../../constants/App'

const createTodoHelper = (todoId, setTodos) => {
  customAxios
    .delete(TODOS_API_ROUTE + '/' + todoId)
    .then(() => {
      setTodos((prevState) => [...prevState.filter((todo) => todo.id !== todoId)])
    })
    .catch((_rej) => {
      console.log(_rej)
    })
}

export default createTodoHelper
