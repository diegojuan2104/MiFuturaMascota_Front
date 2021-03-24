import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/pawprint.svg";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./header.styles.scss";

const Header = () => {

  const user = useSelector((state) => state.user);

  const history = useHistory();


  let cerrarSesion = () => {
    localStorage.setItem("autenticado", "");
    localStorage.setItem("id_user", "");
    localStorage.setItem("tokenTest", "");
    history.push("/ingresar");
  }
  return (
    <div className="container">

      <div className="header row ">

        <div className="col-3  col-sm-12  col-md-2">
          <Link className="logo-container " >
            <Logo className="logo" />
            <p>Mi Futura Mascota</p>
          </Link>

        </div>


        <div className="options col-sm-12 col-md-10">
          {user.autenticado ? (
            <div className="row">
              <Link className="option col-sm-12 col-md-3" to="/dar_en_adopcion">Dar en adopción!</Link>
              <Link className="option col-sm-12 col-md-3" to="/adopcion">Adoptar!</Link>
              <Link className="option col-sm-12 col-md-3" to="/perfil">Mi Perfil</Link>
              <Link className="option col-sm-12 col-md-3" to="/ingresar" onClick={cerrarSesion}>Cerrar Sesión</Link>
            </div>
          )
            :(
              <div className="row">
                <Link className="option col-sm-12 col-md-3" to="/dar_en_adopcion">Dar en adopción!</Link>
                <Link className="option col-sm-12 col-md-3" to="/adopcion">Adoptar!</Link>
                <Link className="option col-sm-12 col-md-3" to="/ingresar">Ingresar</Link>
                <Link className="option col-sm-12 col-md-3" to="/registrarse">Crea tu cuenta</Link>
              </div>
            )
          }
        </div>
      </div>
    </div>

  )
};

export default Header;
