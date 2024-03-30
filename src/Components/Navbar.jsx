//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { Link } from "react-router-dom"
import { routes } from "./utils/routes"

const Navbar = (theme, setTheme) => {


  const changeTheme = () => {
    setTheme(!theme);
  }
  return (
    <nav>
      <p>DH Odonto</p>
    <Link to={routes.home}><h4>Home</h4></Link>  
        <Link to={routes.contact}><h4>Contact</h4></Link>  
      
        <Link to={routes.favs}><h4>Favs</h4></Link>  
        <button onClick={changeTheme}>🌙</button>        
        
    
      
      
    </nav>
  )
}

export default Navbar

//<Link to={routes.detail}><h4>Detail</h4></Link>  