import { Title, SubTitle, Container } from "./ContactsPage.styled";
import ContactForm from "../../components/Form/ContactForm";
import ContactsListSection from "../../components/ContactsList/ContactsList";
import Filter from "../../components/Filter/Filter";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchContactsList } from "redux/contacts/operation";

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsList());
  }, [dispatch]);
  return (
    <Container>
      <Title>Phonebook</Title>

      <ContactForm />

      <SubTitle>Contacts</SubTitle>

      <Filter />

      <ContactsListSection />
    </Container>
  );
}
