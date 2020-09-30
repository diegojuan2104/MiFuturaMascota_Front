import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/pawprint.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"/>
      <p>Mi Futura Mascota</p>
    </Link>

    <div className="options">
      <Link className="option" to="/ingresar">
        Ingresar
      </Link>
      <Link className="option" to="/registrarse">
        Crea tu cuenta
      </Link>
    </div>
  </div>
);



export default Header;
