import React, { Fragment, useState, useEffect } from "react";

import './registrarse_page.styles.scss'

import { URL } from "../../config/vars"


import axios from "axios";

const RegistrarsePage = () => {

    const [usuario, actualizarUsuario] = useState({
        email: "",
        nombres: "",
        apellidos: "",
        password: "",
        password_confirmation: ""
    });

    const { email, nombres, apellidos, password, password_confirmation } = usuario;

    const actualizarState = (e) => {
        actualizarUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    };


    const submitUsuario = async (e) => {
        e.preventDefault();
        if (email.trim() == ""
            || password.trim()  == ""
            || nombres.trim()  == ""
            || apellidos.trim()  == ""
            || password_confirmation.trim()  == ""
        ) {
            alert("Todos los campos marcados (*) son obligatorios")
            return;
        }

        if (password != password_confirmation) {
            alert("Las contraseñas ingresadas son diferentes")
            actualizarUsuario({
                ...usuario,
                password: "",
                password_confirmation: ""
            });
            return;
        }

        let new_usuario = {
            email,
            password,
            name: nombres,
            lastname: apellidos,
            preferences: "",
            user_image_url: ""
        }

        try {
            let res = await axios.post(URL + "/register", new_usuario)

            console.log(res);
            alert("Usuario creado exitosamente")

            actualizarUsuario({
                email: "",
                nombres: "",
                apellidos: "",
                password: "",
                password_confirmation: ""
            });

            window.location.replace("http://localhost:3000/ingresar");

        } catch (error) {
            console.log("El email ingresado ya está registrado");
        }
    }

    return (
        <div className="box">
            <form className="login-form" onSubmit={submitUsuario}>
                <img src={require("../../images/bulldog_signin.png")} />
                <h4>Registrate con tu correo!</h4>
                <p>Todos los campos marcados (*) son obligatorios</p>
                <div className="form-fields">
                    <div className="input-box">
                        <label htmlFor="">Nombre(s)<span>*</span></label>
                        <input
                            name="nombres"
                            type="text"
                            placeholder="Ingresa tu nombre"
                            className="form-control"
                            value={nombres}
                            onChange={actualizarState}
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="">Apellido(s)<span>*</span></label>
                        <input
                            name="apellidos"
                            type="text"
                            placeholder="Ingresa tu apellido"
                            className="form-control"
                            value={apellidos}
                            onChange={actualizarState}
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="">Email<span>*</span></label>
                        <input type="text"
                            name="email"
                            placeholder="Ingrese su email de registro"
                            className="form-control"
                            value={email}
                            onChange={actualizarState}
                        />
                    </div>

                    <div className="input-box">
                        <label htmlFor="">Nueva contraseña<span>*</span></label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Ingresa una Contraseña"
                            class="form-control"
                            value={password}
                            onChange={actualizarState}
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="">Confirmación de contraseña<span>*</span></label>
                        <input type="password"
                            name="password_confirmation"
                            placeholder="Confirma tu Contraseña"
                            class="form-control"
                            value={password_confirmation}
                            onChange={actualizarState}
                        />
                    </div>
                    <div className="button-box">
                        <button type="submit">REGISTRARSE</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default RegistrarsePage;