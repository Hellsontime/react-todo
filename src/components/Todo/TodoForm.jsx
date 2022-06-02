import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

export default function TodoForm({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit.title : '')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmit(
      {
        id: edit.id,
        title: input,
        status: edit.status
      },
      setInput
    )
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {edit ? (
        <>
          <input
            type="text"
            placeholder="Updated your item"
            value={input}
            name="text"
            className="todo-form__input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-form__button edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-form__input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-form__button">Add a Todo</button>
        </>
      )}
    </form>
  )
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  edit: PropTypes.object
}
