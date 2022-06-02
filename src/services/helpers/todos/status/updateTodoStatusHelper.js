import { customAxios } from '../../axiosHelper'
import { TODOS_API_ROUTE, STATUS_API_ROUTE } from '../../../constants/App'

const updateTodoStatusHelper = (todoId, status, setTodos) => {
  customAxios
    .put(TODOS_API_ROUTE + '/' + todoId + STATUS_API_ROUTE, { status })
    .then(() => {
      setTodos((prevState) => [
        ...prevState.map((todo) => {
          if (todo.id === todoId) return { ...todo, status }
          return todo
        })
      ])
    })
    .catch((_rej) => {
      console.log(_rej)
    })
}

export default updateTodoStatusHelper
