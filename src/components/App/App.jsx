import { Title, SubTitle, Container } from './App.styled'
import ContactForm from '../Form/ContactForm'
import ContactsListSection from '../ContactsList/ContactsList'
import Filter from '../Filter/Filter'
import { Route, Switch } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'

export default function App() {
  return (
    <Container>
      <Title>Phonebook</Title>

      <ContactForm />

      <SubTitle>Contacts</SubTitle>

      <Filter />

      <ContactsListSection />

      <Switch>
        <Route path="/register" exact>
          {/* <HomeView></HomeView> */}
        </Route>

        <Route path="/login" exact></Route>

        <Route path="/contacts" exact></Route>
      </Switch>

      <ToastContainer />
    </Container>
  )
}
