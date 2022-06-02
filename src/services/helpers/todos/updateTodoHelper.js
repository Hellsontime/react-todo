import { customAxios } from '../axiosHelper'
import { TODOS_API_ROUTE } from '../../constants/App'
import emptyTodo from '../../constants/EmptyTodo'

const updateTodoHeper = (updatedTodo, setTodos, setEdit, setInput) => {
  customAxios
    .put(TODOS_API_ROUTE + '/' + updatedTodo.id, { title: updatedTodo.title })
    .then(() => {
      setTodos((prevState) =>
        prevState.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
      )
      setEdit(emptyTodo)
      setInput('')
    })
    .catch((_rej) => {
      console.log(_rej)
    })
}

export default updateTodoHeper
