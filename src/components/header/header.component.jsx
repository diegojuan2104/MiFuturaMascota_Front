import React, { useEffect } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/pawprint.svg";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./header.styles.scss";

import { useDispatch, useSelector } from "react-redux";
import { logoutUserAction } from "../../actions/userActions";

<<<<<<< HEAD
  const user = useSelector((state) => state.user);

=======
const Header = () => {
>>>>>>> 84f9f734c6acef6c4e0157db0bca5ad355158285
  const history = useHistory();
  const user = useSelector((state) => state.user);

<<<<<<< HEAD

  let cerrarSesion = () => {
    localStorage.setItem("autenticado", "");
    localStorage.setItem("id_user", "");
    localStorage.setItem("tokenTest", "");
=======
  //utilizar use distpach y te crea una función
  const dispatch = useDispatch();

  //mandar llamar el action
  const logout = () => dispatch(logoutUserAction());

  let cerrarSesion = () => {
    logout();
>>>>>>> 84f9f734c6acef6c4e0157db0bca5ad355158285
    history.push("/ingresar");
  };
  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 84f9f734c6acef6c4e0157db0bca5ad355158285
};

export default Header;
