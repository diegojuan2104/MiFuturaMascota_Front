import React from 'react';
import './ingresar_page.styles.scss'

import FormInput from "../../components/form-input/form-input.component"

const IngresarPage = () => {
    return (
        <div className="box">
            <div className="login-form">
                <img src={require("../../images/bulldog_signin.png")} />
                <h4>Ingresa ya con tu usuario y contraseña!</h4>
                <div className="form-fields">
                    <div className="input-box">
                    <label htmlFor="">Usuario</label>
                    <input type="text" placeholder="Ingresa tu usuario" class="form-control"/>
                    </div>

                    <div className="input-box">
                    <label htmlFor="">Contraseña</label>
                    <input type="password" placeholder="Ingresa tu Contraseña" class="form-control"/>
                    </div>
                    <div className="button-box">
                        <button type="submit">Ingresar</button>
                        <a href="">¿Olvidaste tu contraseña?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IngresarPage;