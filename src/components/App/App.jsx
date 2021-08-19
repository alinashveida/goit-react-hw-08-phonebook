import { Title, SubTitle, Container } from './App.styled'
import ContactForm from '../Form/ContactForm'
import ContactsListSection from '../ContactsList/ContactsList'
import Filter from '../Filter/Filter'
import { Route, Switch } from 'react-router-dom'
import { useEffect, Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'
import authSelector from 'redux/auth/auth-selector'

import { ToastContainer } from 'react-toastify'
// import HomePage from 'pages/HomePAge/Homepage'
// import RegisterView from 'pages/RegisterPage/RegisterPage'
// import ContactsPage from 'pages/ContactsPage/ContactsPage'
// import LoginPage from 'pages/LoginPage/LoginPage'
import AppBar from 'components/AppBar/AppBar'
import PrivateRoute from 'components/PrivateRoute'
import PubliceRoute from 'components/PublicRoute'

const HomePage = lazy(() => import('pages/HomePAge/Homepage'))
const RegisterView = lazy(() => import('pages/RegisterPage/RegisterPage'))
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'))
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'))

export default function App() {
  const isFetchingCurrentUser = useSelector(authSelector.getIsFetchingCurrent)
  return (
    <>
      {/* <Container> */}
      <AppBar />

      <Switch>
        <Suspense fallback={<p>Загружаем...</p>}>
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

      <ToastContainer />
      {/* </Container> */}
    </>

    // <Container>
    //   {!isFetchingCurrentUser ? (
    //     <h1>Показываем React Skeleton</h1>
    //   ) : (
    //     <>
    //       <AppBar />

    //       <Switch>
    //         <Suspense fallback={<p>Загружаем...</p>}>
    //           <PubliceRoute path="/" exact>
    //             {<HomePage />}
    //           </PubliceRoute>

    //           <PubliceRoute path="/register" restricted>
    //             {<RegisterView />}
    //           </PubliceRoute>

    //           <PubliceRoute path="/login" restricted redirectTo="/contacts">
    //             {<LoginPage />}
    //           </PubliceRoute>

    //           <PrivateRoute path="/contacts">{<ContactsPage />}</PrivateRoute>
    //         </Suspense>
    //       </Switch>

    //       <ToastContainer />
    //     </>
    //   )}
    // </Container>
  )
}
