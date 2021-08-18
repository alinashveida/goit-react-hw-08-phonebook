import styles from './Navigation.styles.css'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
  <nav>
    <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
      Главная
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Контакты
    </NavLink>
  </nav>
)

export default Navigation
