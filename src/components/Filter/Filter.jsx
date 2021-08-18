import { Input, Label } from './Filter.styled'
import { FaSearch } from 'react-icons/fa'

import { useSelector, useDispatch } from 'react-redux'
import action from 'redux/action'
import { getFilter } from 'redux/selector'
import { getFilterContacts } from 'redux/selector'

export default function Filter() {
  const contacts = useSelector(getFilterContacts)
  const value = useSelector(getFilter)
  const dispatch = useDispatch()

  const changeFilter = (event) =>
    dispatch(action.changeFilter(event.target.value))

  return (
    <Label>
      <FaSearch /> Find contacts by name
      <Input name="filter" onChange={changeFilter} value={value}></Input>
    </Label>
  )
}
