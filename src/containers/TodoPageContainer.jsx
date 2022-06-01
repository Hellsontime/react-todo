/* eslint-disable no-unused-vars */
import React from 'react'
import { Navigate } from 'react-router-dom'
import TodoList from '../components/Todo/TodoList'
import { LOGIN_PAGE_ROUTE } from '../routes/PagesRoutes'
import '../styles/PageStyles/TodoPage.sass'

export default function TodoPageContainer() {
  const userToken = localStorage.getItem('user-token')

  return userToken ? <TodoList /> : <Navigate to={LOGIN_PAGE_ROUTE} />
}
