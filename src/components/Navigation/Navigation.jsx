//import styles from './Navigation.styles.css'
import { NavLink } from 'react-router-dom'
import authSelector from 'redux/auth/auth-selector'
import { useSelector } from 'react-redux'
import { FiHome, FiUsers } from 'react-icons/fi'
//import styles from './Navigation.styles.css'

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#000000',

    fontSize: '20px',
    fontFamily: 'Roboto Helvetica, Arial sans-serif',
  },

  activeLink: {
    color: '#f137a6',
  },
}

export default function Navigation() {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn)

  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        <FiHome /> Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          <FiUsers /> Contacts
        </NavLink>
      )}
    </nav>
  )
}
