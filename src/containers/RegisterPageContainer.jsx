import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import RegisterPageComponent from '../components/RegisterPageComponent'
import authHelper from '../services/helpers/auth/authHelper'
import UserContext from '../context/UserContext'
import { TODO_PAGE_ROUTE } from '../routes/PagesRoutes'
import REGISTRATION_API_ROUTE from '../services/constants/RegisterPage'

export default function RegisterPageContainer() {
  const { setUser } = useContext(UserContext)

  const [redirectToDashboard, setRedirectToDashboard] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onFinish = async (newUser) => {
    await authHelper(
      newUser,
      setError,
      setRedirectToDashboard,
      setUser,
      setLoading,
      REGISTRATION_API_ROUTE
    )
  }
  if (redirectToDashboard) {
    return <Navigate to={TODO_PAGE_ROUTE} push />
  }

  return <RegisterPageComponent {...{ onFinish, error, loading }} />
}
