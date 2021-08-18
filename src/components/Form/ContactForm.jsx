import { Form, Label, Input, ButtomSubmit } from './ContactForm.styled'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillPhone } from 'react-icons/ai'
import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { getContacts } from '../../redux/selector'
import { addContact } from 'redux/operation'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const contacts = useSelector(getContacts)

  const dispatch = useDispatch()

  const onSubmit = ({ name, number }) => dispatch(addContact({ name, number }))

  const onChangeInput = (event) => {
    const { value, name } = event.target

    switch (name) {
      case 'name':
        setName(value)

        break

      case 'number':
        setNumber(value)

        break

      default:
        return null
    }
  }

  const onSubmitButton = (event) => {
    event.preventDefault()
    console.log(name)

    if (contacts.some((contact) => contact.name === name)) {
      toast.error(`${name} is already in contact`)
      reset()
      return
    }

    onSubmit({ name, number })

    reset()
  }

  const reset = () => {
    setName('')
    setNumber('')
  }

  return (
    <Form onSubmit={onSubmitButton}>
      <Label>
        <BsFillPersonFill /> Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={onChangeInput}
          value={name}
        />
      </Label>
      <Label>
        <AiFillPhone /> Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={onChangeInput}
          value={number}
        />
      </Label>
      <ButtomSubmit type="submit" value="Add contact">
        Add contact
      </ButtomSubmit>
    </Form>
  )
}
