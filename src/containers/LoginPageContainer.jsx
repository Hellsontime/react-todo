import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import LoginPageComponent from '../components/LoginPageComponent'
import { TODO_PAGE_ROUTE } from '../routes/PagesRoutes'
import UserContext from '../context/UserContext'
import authHelper from '../services/helpers/auth/authHelper'
import LOGIN_PAGE_API_LOGIN from '../services/constants/LoginPage'

export default function LoginPageContainer() {
  const { setUser } = useContext(UserContext)
  const [redirectToTodo, setRedirectToTodo] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onFinish = async ({ email, password }) => {
    await authHelper(
      { email, password },
      setError,
      setRedirectToTodo,
      setUser,
      setLoading,
      LOGIN_PAGE_API_LOGIN
    )
  }

  if (redirectToTodo) {
    return <Navigate to={TODO_PAGE_ROUTE} push />
  }

  return <LoginPageComponent {...{ setError, error, onFinish, loading }} />
}
