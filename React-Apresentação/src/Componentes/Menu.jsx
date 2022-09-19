import { Link } from 'react-router-dom'
import './Menu.modules.css'

function Menu() {
  return(

      <div>
          <header>   
              <nav className="nav_bar">
              <Link to="/" className="navbar-brand">
                  <img id="logo" src="./img/Spotify2.png" alt="spotify"/>
              </Link>
                  
              <ul className="nav-list">
                  {/* <li><Link to = "/login">Login</Link></li>
                  <li><Link to = "/#">Cadastrar</Link></li> */}
                  <li><Link to = "/Faq">FAQ</Link></li>
              </ul>
              </nav>
          </header>
      </div>


  );
}

export default Menu;
