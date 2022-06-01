/* eslint-disable no-unused-vars */
import { useState, useMemo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'antd/dist/antd.css'

import TodoPageContainer from './containers/TodoPageContainer'

import { TODO_PAGE_ROUTE, LOGIN_PAGE_ROUTE, REGISTRATION_PAGE_ROUTE } from './routes/PagesRoutes'

import UserContext from './context/UserContext'
import notAuthorizedUser from './services/constants/NotAuthorizedUser'
import LoginPageContainer from './containers/LoginPageContainer'
import RegisterPageContainer from './containers/RegisterPageContainer'

function App() {
  const [user, setUser] = useState(notAuthorizedUser)
  const contextValue = useMemo(() => ({ ...user, setUser }), [user])

  return (
    <UserContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route path={TODO_PAGE_ROUTE} element={<TodoPageContainer />} />
          <Route path={LOGIN_PAGE_ROUTE} element={<LoginPageContainer />} />
          <Route path={REGISTRATION_PAGE_ROUTE} element={<RegisterPageContainer />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
