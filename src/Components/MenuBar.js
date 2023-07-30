import {NavLink} from "react-router-dom";
import '../Stylesheets/MenuBar.css'

const MenuBar = () => {


  return (
    <nav className={'menu-container'}>
      <ul className={'menu-list'}>
        <li>
          <NavLink className={'nav-button'} to={'/'}>Inicio</NavLink>
        </li>
        <li>
          <NavLink className={'nav-button'} to={'/Busqueda'} >Busqueda</NavLink>
        </li>
        <li>
          <NavLink className={'nav-button'} to={'/Pokemon'} >Aleatorio</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MenuBar