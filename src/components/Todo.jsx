import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';

export default function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = (value) => {
    console.log(value);
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete-icon" />
        <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className="edit-icon" />
      </div>
    </div>
  ));
}

Todo.propTypes = {
  todos: PropTypes.object.isRequired,
  completeTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired
};
