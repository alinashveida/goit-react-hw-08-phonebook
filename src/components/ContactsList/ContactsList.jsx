import { ContactsList, ContactItem, DeleteButton } from './ContactsList.styled'
import { AiOutlineUser } from 'react-icons/ai'
import { FiX } from 'react-icons/fi'
import { useEffect } from 'react'
import { fetchContactsList } from '../../redux/operation'

import { useSelector, useDispatch } from 'react-redux'

import { getFilterContacts } from '../../redux/selector'

import { deleteContact } from '../../redux/operation'

export default function ContactsListSection() {
  const contacts = useSelector(getFilterContacts)

  const dispatch = useDispatch()

  const onDelete = (id) => dispatch(deleteContact(id), console.log(id))

  useEffect(() => {
    dispatch(fetchContactsList())
  }, [dispatch])

  return (
    <ContactsList>
      {contacts.map((contact) => (
        <ContactItem key={contact.id}>
          <AiOutlineUser /> {contact.name}: {contact.number}
          <DeleteButton type="button" onClick={() => onDelete(contact.id)}>
            <FiX></FiX>
          </DeleteButton>
        </ContactItem>
      ))}
    </ContactsList>
  )
}
