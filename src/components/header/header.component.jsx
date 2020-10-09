import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/pawprint.svg";

import "./header.styles.scss";

const Header = () => {

  let autenticado = localStorage.getItem("autenticado");

  let cerrarSesion = () => {
    localStorage.setItem("autenticado","");
    localStorage.setItem("id_user","");
    localStorage.setItem("tokenTest","");
    window.location.replace("http://localhost:3000/ingresar");
  }
  return (
    <div className="header">

      <Link className="logo-container" >
        <Logo className="logo" />
        <p>Mi Futura Mascota</p>
      </Link>

      <div className="options">
        {autenticado == "True" ? (
          <div>
            <Link className="option" to="/perfil">Mi Perfil</Link>
            <Link className="option" to="/ingresar" onClick={cerrarSesion}>Cerrar Sesión</Link>
          </div>
        )
          : (
            <div>
              <Link className="option" to="/ingresar">Ingresar</Link>
              <Link className="option" to="/registrarse">Crea tu cuenta</Link>
            </div>
          )
        }
      </div>
    </div>
  )
};



export default Header;
