import React, { useEffect } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/pawprint.svg";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./header.styles.scss";

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
    <div className="">

      <div className="header row ">

        <div className="col-3  col-sm-12  col-md-2   ">
          <Link className="logo-container " >
            <Logo className="logo" />
            <p>Mi Futura Mascota</p>
          </Link>

        </div>


        {user.autenticado ? (
          <div className="options row col-sm-12 col-md-10 d-flex flex-row-reverse ">
            <Link className="option col-sm-12 col-md-2 justify-content-center" to="/ingresar" onClick={cerrarSesion}>Cerrar Sesión</Link>
            <Link className="option col-sm-12 col-md-2 justify-content-center" to="/perfil">Mi Perfil</Link>
            <Link className="option col-sm-12 col-md-2 justify-content-center" to="/dar_en_adopcion">Dar en adopción!</Link>
            <Link className="option col-sm-12 col-md-2 justify-content-center"  to="/adopcion">Adoptar!</Link>
            <Link className="option col-sm-12 col-md-2 justify-content-center"  to="/mis_mascotas">Mis Mascotas</Link>
          </div>
        )
          : (
            <div className="options row col-sm-12 col-md-10 d-flex flex-row-reverse">
              <Link className="option col-sm-12 col-md-2 justify-content-center" to="/ingresar">Ingresar</Link>
              <Link className="option col-sm-12 col-md-2 justify-content-center" to="/registrarse">Crea tu cuenta</Link>
              <Link className="option col-sm-12 col-md-2 justify-content-center" to="/dar_en_adopcion">Dar en adopción!</Link>
              <Link className="option col-sm-12 col-md-2 justify-content-center" to="/mis_mascotas">Adoptar!</Link>
            </div>
          )
        }
      </div>
    </div>

  )
};

export default Header;
