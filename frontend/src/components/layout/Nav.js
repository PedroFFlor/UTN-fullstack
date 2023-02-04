import { NavLink } from "react-router-dom";

const NavLi = (props) => {
  return (
    <li className="nav-item nav-li">
      <NavLink
        className={({ isActive }) => "nav-link " + (isActive ? props.active : "")}
        to={`/${props.children}`}>
        {props.children}
      </NavLink>
    </li>
  );
}

const Nav = ({datosUsuario}) => {
  
  const { admin, vendedor} = datosUsuario
 
  return (
    <nav className="container-sm navbar navbar-dark navbar-expand-sm mb-3 hidden_print">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto me-auto mb-lg-0 fs-4">
            <NavLi active="active2">Home</NavLi>
            {
              vendedor ? ( <>
                <NavLi active="active2">Ofertas</NavLi>
                <NavLi active="active2">Carpeta</NavLi>
                <NavLi active="active2">Condiciones</NavLi>
                <NavLi active="active2">Mapa</NavLi>
              </>) : ''
            }
            {
              admin ? <NavLi active="active2">Panel</NavLi> : ''
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
