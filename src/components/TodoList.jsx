/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

export default function TodoList() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    setTodos([todo, ...todos])
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }

    setTodos((prevState) => prevState.map((item) => (item.id === todoId ? newValue : item)))
  }

  const removeTodo = (id) => {
    let removedArr = [...todos].filter((todo) => todo.id !== id)
    setTodos(removedArr)
  }

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div>
      <h1>What`s a plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  )
}
