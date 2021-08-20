import { Name, Container, Button } from './UserMenu.styled'

import { useDispatch, useSelector } from 'react-redux'
import authSelector from 'redux/auth/auth-selector'
import { logOut } from 'redux/auth/auth-operation'
import { FcCloseUpMode } from 'react-icons/fc'

export default function UserMenu() {
  const dispatch = useDispatch()
  const name = useSelector(authSelector.getUserName)
  // const avatar = defaultAvatar;

  return (
    <Container>
      <Name>
        Welcome {name} <FcCloseUpMode />
      </Name>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </Container>
  )
}
