import { Switch } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'
import authSelector from 'redux/auth/auth-selector'

import { ToastContainer } from 'react-toastify'
import AppBar from 'components/AppBar/AppBar'
import PrivateRoute from 'components/PrivateRoute'
import PubliceRoute from 'components/PublicRoute'
import Spinner from 'components/Spinner/Spinner'

const HomePage = lazy(() => import('pages/HomePAge/Homepage'))
const RegisterView = lazy(() => import('pages/RegisterPage/RegisterPage'))
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'))
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'))

export default function App() {
  const isFetchingCurrentUser = useSelector(authSelector.getIsFetchingCurrent)
  return (
    <>
      <AppBar />

      <Switch>
        <Suspense fallback={<Spinner />}>
          <PubliceRoute path="/" exact>
            {<HomePage />}
          </PubliceRoute>

          <PubliceRoute path="/register" restricted>
            {<RegisterView />}
          </PubliceRoute>

          <PubliceRoute path="/login" restricted redirectTo="/contacts">
            {<LoginPage />}
          </PubliceRoute>

          <PrivateRoute path="/contacts">{<ContactsPage />}</PrivateRoute>
        </Suspense>
      </Switch>

      <ToastContainer style={{ width: '250px' }} />
    </>
  )
}
