import {NavLink} from "react-router-dom";

const MenuBar = () => {


  return (
    <nav>
      <ul>
        <li>
          <NavLink to={'/'}>Inicio</NavLink>
        </li>
        <li>
          <NavLink to={'/Busqueda'} >Busqueda</NavLink>
        </li>
        <li>
          <NavLink to={'/Pokemon'} >Aleatorio</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MenuBar