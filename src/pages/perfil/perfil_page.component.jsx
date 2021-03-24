import React, { useState, useEffect } from 'react';
import './perfil_page.styles.scss'

import { URL } from "../../config/vars"

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const PerfilPage = () => {

    const user = useSelector((state) => state.user);

    const [infoPerfil, informacionPerfilCargada] = useState(false);
    const [usuario, actualizarUsuario] = useState({
        email: "",
        name: "",
        lastname: "",
        preferences: "",
        user_image_url: ""
    });


    const { email, name, lastname, preferences, user_image_url } = usuario;

    const actualizarDatosPerfil = (e) =>{
        e.preventDefault();
        let user_aux = {
            email,
            name,
            lastname,
            preferences,
            user_image_url
        }
        axios.put(URL + "/user/" + user.id_user,user_aux).then(res => {
            console.log(res.data);
            alert("Datos Actualizados correctamente")

        }).catch(error => {
            console.log(error.response);
        });
    }

    const actualizarState = (e) => {
        actualizarUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        if (!infoPerfil) {
            cargarInfo();
            informacionPerfilCargada(true);
        }
    });

    let cargarInfo = () => {
       
        if (user.autenticado) {
            axios.get(URL + "/user/" + user.id_user).then(res => {
                console.log(res.data);

                const { email, name, lastname, preferences,user_image_url} = res.data

                let user = {
                    email,
                    name,
                    lastname,
                    preferences,
                    user_image_url
                }

                actualizarUsuario(user)
            }).catch(error => {
                console.log(error.response);
            });
        }
    }
    return (
        <div className="box">
            <form className="login-form" onSubmit={actualizarDatosPerfil} >
                <h4>Tu Perfil</h4>
                <div className="foto-perfil">
                    <img 
                        src={user_image_url}
                    ></img>
                </div>
                <p>Todos los campos marcados (*) son obligatorios</p>
                <div className="form-fields">
                    <div className="input-box">
                        <label htmlFor="">Email</label>
                        <input disabled
                            type="text"
                            placeholder="abcd@gmail.com"
                            class="form-control email"
                            name="email"
                            value={email}
                        />
                    </div>

                    <div className="input-box">
                        <label htmlFor="">Nombre(s)<span>*</span></label>
                        <input
                            type="text"
                            placeholder="Ingresa tu nuevo nombre"
                            class="form-control"
                            name="name"
                            value={name}
                            onChange={actualizarState}
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="">Apellido(s)<span>*</span></label>
                        <input type="text"
                            placeholder="Ingresa nuevo tu apellido"
                            class="form-control"
                            name="lastname"
                            value={lastname}
                            onChange={actualizarState}
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="">Imagen de usuario</label>
                        <input
                            type="text"
                            placeholder="Ingresa el link de tu imagen"
                            class="form-control"
                            name="user_image_url"
                            value={user_image_url}
                            onChange={actualizarState}
                        />
                    </div>
                    <div className="button-box">
                        <button type="submit">ACTUALIZAR DATOS</button>
                    </div>
                    <div className="button-box">
                        <button type="submit">MIS MASCOTAS</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default PerfilPage;