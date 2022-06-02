import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import TodoForm from './TodoForm'
import emptyTodo from '../../services/constants/EmptyTodo'

export default function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState(emptyTodo)

  const submitUpdate = (updatedTodo, setInput) => {
    updateTodo(updatedTodo, setEdit, setInput)
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div className={todo.status === 1 ? 'todo-row complete' : 'todo-row'} key={index}>
      <div className="todo-row__title" key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.title}
      </div>
      <div className="icons">
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete-icon" />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, title: todo.title, status: todo.status })}
          className="edit-icon"
        />
      </div>
    </div>
  ))
}

Todo.propTypes = {
  todos: PropTypes.array.isRequired,
  completeTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired
}
