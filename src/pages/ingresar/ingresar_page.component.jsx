import React, { Fragment, useState, useEffect } from "react";
import './ingresar_page.styles.scss'
import { useHistory } from "react-router-dom";
import { URL } from "../../config/vars"

import axios from "axios";

const IngresarPage = () => {

    const history = useHistory();

    const [usuario, actualizarUsuario] = useState({
        email: "",
        password: "",
    });

    const { email, password } = usuario;

    const submitIngreso = (e) => {
        e.preventDefault();
        
        try {
            if (email.trim() == "" || password.trim() == "") {
                alert("Los campos deben estar llenos")
                return;
            }

            usuario.email = email.trim()

            axios.post(URL + "/login", usuario).then(res => {
                console.log(res);
                let user_id = res.data.user_id

                localStorage.setItem('tokenTest', res.data.access_token);
                localStorage.setItem('id_user', user_id);
                localStorage.setItem('autenticado', "True");
                history.push("/adopcion");
            }).catch(error => {
                console.log(error.response);
                alert("Correo y/o contraseña invalida")
            });

        } catch (error) {
            alert("Ha ocurrido un error")
        }
    }

    const actualizarState = (e) => {
        actualizarUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="box">
            <form className="login-form" onSubmit={submitIngreso}>
                <img src={require("../../images/bulldog_signin.png")} />
                <h4>Ingresa ya con tu email y contraseña!</h4>
                <div className="form-fields">
                    <div className="input-box">
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            placeholder="Ingresa tu email"
                            class="form-control"
                            name="email"
                            value={email}
                            onChange={actualizarState}
                        />
                    </div>

                    <div className="input-box">
                        <label htmlFor="">Contraseña</label>
                        <input type="password"
                            placeholder="Ingresa tu Contraseña"
                            class="form-control"
                            name="password"
                            value={password}
                            onChange={actualizarState}
                        />
                    </div>
                    <div className="button-box">
                        <button type="submit">Ingresar</button>
                        <a href="">¿Olvidaste tu contraseña?</a>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default IngresarPage;