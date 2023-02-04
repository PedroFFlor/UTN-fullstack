import { Link } from "react-router-dom"
import Nav from './Nav';


const Header = ({datosUsuario, handleSubmit, handleChange, logout}) => {

  return (
    <>
      <header className="bg-primary hidden_print">
        <div className="container-sm py-3 d-flex justify-content-between">
          <Link className="navbar-brand col-2" to="/">
            <img className="logo_home" src="/img/home/logo.png" alt="Logo" />
          </Link>
          { datosUsuario.nombre ? (
            <div className="d-flex col-6">
              <h2 className="color_blanco">Bienvenido {datosUsuario.nombre} <Link to='/logout' onClick={logout} className="btn btn-danger">Salir</Link></h2>
            </div>
          ) : (
            <form action="/login" method="post" className="d-flex col-6" role="search" onSubmit={handleSubmit} >
              <div className="input-group mb-3 fs-6">
                <input type="text" className="form-control" placeholder="Usuario" aria-label="Usuario" name="user" onChange={handleChange}/>
                <input type="password" className="form-control" placeholder="Contraseña" aria-label="Contraseña" name="pass" onChange={handleChange}/>
                <button className="btn btn-danger" type="submit">Entrar</button>
              </div>
            </form>
          )}
          { datosUsuario.error ? <p>Verifique mail y/o contraseña</p> : <span></span> }
        </div>
        <Nav datosUsuario={datosUsuario}/>
      </header>
    </>
  );
}

export default Header;
