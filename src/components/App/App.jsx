import { Title, SubTitle, Container } from './App.styled'
import ContactForm from '../Form/ContactForm'
import ContactsListSection from '../ContactsList/ContactsList'
import Filter from '../Filter/Filter'
import { Route, Switch } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import HomePage from 'pages/HomePAge/Homepage'
import RegisterView from 'pages/RegisterPage/RegisterPage'
import ContactsPage from 'pages/ContactsPage/ContactsPage'
import LoginPage from 'pages/LoginPage/LoginPage'
import AppBar from 'components/AppBar/AppBar'

export default function App() {
  return (
    <Container>
      <AppBar />
      {/* <Title>Phonebook</Title>

      <ContactForm />

      <SubTitle>Contacts</SubTitle>

      <Filter />

      <ContactsListSection /> */}

      <Switch>
        <Route path="/" exact>
          {<HomePage />}
        </Route>

        <Route path="/register">{<RegisterView />}</Route>

        <Route path="/login">{<LoginPage />}</Route>

        <Route path="/contacts">{<ContactsPage />}</Route>
      </Switch>

      <ToastContainer />
    </Container>
  )
}
