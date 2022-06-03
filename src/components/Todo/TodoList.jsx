import React, { useEffect, useState } from 'react'
import { TODOS_API_ROUTE } from '../../services/constants/App'
import { customAxios } from '../../services/helpers/axiosHelper'
import createTodoHelper from '../../services/helpers/todos/createTodoHelper'
import deleteTodoHelper from '../../services/helpers/todos/deleteTodoHelper'
import updateTodoStatusHelper from '../../services/helpers/todos/status/updateTodoStatusHelper'
import updateTodoHeper from '../../services/helpers/todos/updateTodoHelper'
import Todo from './Todo'
import TodoForm from './TodoForm'

export default function TodoList() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    if (!todo.title || /^\s*$/.test(todo.title)) {
      return
    }

    createTodoHelper(todo.title, setTodos)
  }

  const updateTodo = (updatedTodo, setEdit, setInput) => {
    if (!updatedTodo.title || /^\s*$/.test(updatedTodo.title)) {
      return
    }

    updateTodoHeper(updatedTodo, setTodos, setEdit, setInput)
  }

  const removeTodo = (id) => {
    deleteTodoHelper(id, setTodos)
  }

  const completeTodo = (id) => {
    todos.map((todo) => {
      if (todo.id == id) {
        todo.status === 1
          ? updateTodoStatusHelper(id, 0, setTodos)
          : updateTodoStatusHelper(id, 1, setTodos)
      }
    })
  }

  useEffect(() => {
    async function fetchTodos() {
      try {
        let res = await customAxios.get(TODOS_API_ROUTE)
        setTodos(res.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchTodos()
  }, [])

  const finishUserSession = () => {
    localStorage.clear()
  }

  return (
    <>
      <div className="todo-app">
        <a onClick={finishUserSession} target="_self" rel="noopener noreferrer" href="/">
          <div className="logout-button">&times;</div>
        </a>
        <h1>What`s a plan for today?</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          setTodos={setTodos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
    </>
  )
}
