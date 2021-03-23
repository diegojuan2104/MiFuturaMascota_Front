import React, { useEffect } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/pawprint.svg";
import { useHistory } from "react-router-dom";

import "./header.styles.scss";

import { useDispatch, useSelector } from "react-redux";
import { logoutUserAction } from "../../actions/userActions";

const Header = () => {
  const history = useHistory();
  const user = useSelector((state) => state.user);

  //utilizar use distpach y te crea una función
  const dispatch = useDispatch();

  //mandar llamar el action
  const logout = () => dispatch(logoutUserAction());

  let cerrarSesion = () => {
    logout();
    history.push("/ingresar");
  };
  return (
    <div className="header">
      <Link className="logo-container">
        <Logo className="logo" />
        <p>Mi Futura Mascota</p>
      </Link>

      <div className="options">
        {user.autenticado ? (
          <div>
            <Link className="option" to="/dar_en_adopcion">
              Dar en adopción!
            </Link>
            <Link className="option" to="/adopcion">
              Adoptar!
            </Link>
            <Link className="option" to="/perfil">
              Mi Perfil
            </Link>
            <Link className="option" to="/ingresar" onClick={cerrarSesion}>
              Cerrar Sesión
            </Link>
          </div>
        ) : (
          <div>
            <Link className="option" to="/dar_en_adopcion">
              Dar en adopción!
            </Link>
            <Link className="option" to="/adopcion">
              Adoptar!
            </Link>
            <Link className="option" to="/ingresar">
              Ingresar
            </Link>
            <Link className="option" to="/registrarse">
              Crea tu cuenta
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
