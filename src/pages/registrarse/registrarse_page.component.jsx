import React, { Fragment, useState, useEffect } from "react";

import "./registrarse_page.styles.scss";

import { URL } from "../../config/vars";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Opciones_ciudades from "../../components/opciones_ciudades/Opciones_ciudades";
import Select_depart from "../../components/opciones_departamentos/Select_depart";

//Actions de Redux
import { useDispatch, useSelector } from "react-redux";
import { registerUserAction } from "../../actions/userActions";

const RegistrarsePage = () => {
  //utilizar use distpach y te crea una función
  const dispatch = useDispatch();

  //mandar llamar el action de boyaActions
  const registerUser = (user) => dispatch(registerUserAction(user));

  const history = useHistory();

  const [usuario, actualizarUsuario] = useState({
    email: "",
    nombres: "",
    apellidos: "",
    password: "",
    password_confirmation: "",
    isCorporation: false,
    phone: "",
    address: "",
    state: "",
    city: "",
    nit:"",
    state: null,
    city: null,
    description: ""
  });

  const {
    isCorporation,
    email,
    nombres,
    apellidos,
    password,
    password_confirmation,
    state,
    city,
    address,
    nit,
    phone,
    description
  } = usuario;

  const actualizarState = (e) => {
    actualizarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const submitUsuario = async (e) => {
    e.preventDefault();


    let new_usuario = {
    };

    if (!isCorporation) {
      new_usuario = {
        auto_description: description,
        isCorporation,
        email,
        password,
        name: nombres,
        lastname: apellidos,
        preferences: "",
        user_image_url: "https://blog.aulaformativa.com/wp-content/uploads/2016/08/consideraciones-mejorar-primera-experiencia-de-usuario-aplicaciones-web-perfil-usuario.jpg",
      };

      if (

        email.trim() == "" ||
        password.trim() == "" ||
        nombres.trim() == "" ||
        apellidos.trim() == "" ||
        password_confirmation.trim() == ""
      ) {
        alert("Todos los campos marcados (*) son obligatorios");
        return;
      }
    } else {

      new_usuario = {
        auto_description: description,
        email,
        password,
        name_corporation: nombres,
        preferences: "",
        user_image_url: "https://blog.aulaformativa.com/wp-content/uploads/2016/08/consideraciones-mejorar-primera-experiencia-de-usuario-aplicaciones-web-perfil-usuario.jpg",
        nit,
        phone,
        city,
        ubication: address,
        isCorporation
      };
      if (
        email.trim() == "" ||
        password.trim() == "" ||
        nombres.trim() == "" ||
        password_confirmation.trim() == "" ||
        address.trim() == "" ||
        state.trim() == "" ||
        city.trim() == ""
      ) {
        alert("Todos los campos marcados (*) son obligatorios");
        return;
      }
    }

    if (password != password_confirmation) {
      alert("Las contraseñas ingresadas son diferentes");
      actualizarUsuario({
        ...usuario,
        password: "",
        password_confirmation: "",
      });
      return;
    }

    try {
      registerUser(new_usuario);

      actualizarUsuario({
        email: "",
        nombres: "",
        apellidos: "",
        password: "",
        password_confirmation: "",
        nit:"",
        phone:"",
        city:"",
        ubication: "",
        isCorporation:false
      });

      history.push("/ingresar");
    } catch (error) {
      alert("El email ingresado ya está registrado");
    }
  };

  return (
    <div className="box">
      <form className="login-form" onSubmit={submitUsuario}>
        <img src={require("../../images/bulldog_signin.png")} />
        <h4>Registrate con tu correo!</h4>
        <p>Todos los campos marcados (*) son obligatorios</p>
        <div className="form-fields">
          <div className="input-box">
            <label htmlFor="colors">
              Tipo de registro<span>*</span>
            </label>
            <input
              type="radio"
              checked={!isCorporation}
              onChange={() => {
                actualizarUsuario({
                  ...usuario,
                  isCorporation: false,
                });
              }}
            />{" "}
            Persona
            <input
              className="ml-5"
              type="radio"
              name="colors"
              checked={isCorporation}
              onChange={() => {
                actualizarUsuario({
                  ...usuario,
                  isCorporation: true,
                });
              }}
              id="blue"
            />{" "}
            Corporación
          </div>

          <div className="input-box">
            <label htmlFor="">
              Nombre(s)<span>*</span>
            </label>
            <input
              name="nombres"
              type="text"
              placeholder="Ingrese nombre"
              className="form-control"
              value={nombres}
              onChange={actualizarState}
            />
          </div>


          {!isCorporation ? (
            <div className="input-box">
              <label htmlFor="">
                Apellido(s)<span>*</span>
              </label>
              <input
                name="apellidos"
                type="text"
                placeholder="Ingrese apellido"
                className="form-control"
                value={apellidos}
                onChange={actualizarState}
              />
            </div>
          ) : null}

          
            {/* DESCRIPCION */}
            <label>Descripción</label>
          <textarea
            placeholder="Describe algo sobre ti, este campo lo podrán ver otras personas si deseas adoptar una mascota."
            className="u-full-width"
            name="description"
            onChange={actualizarState}
            value={description}
          ></textarea>

          {isCorporation ? (

            <div>
              <div className="input-box">
                <label htmlFor="">
                  NIT<span>*</span>
                </label>
                <input
                  name="nit"
                  type="number"
                  placeholder="Ingrese un teléfono"
                  className="form-control"
                  value={nit}
                  onChange={actualizarState}
                />
              </div>
     

              <div className="input-box">
                <label htmlFor="">
                  Departamento<span>*</span>
                </label>
                <select
                  className="u-full-width"
                  value={state}
                  name="state"
                  onChange={actualizarState}
                >
                  <option defaultValue value="">
                    Seleccione una opción
                  </option>
                  <Select_depart />
                </select>
              </div>

              <div className="input-box">
                <label htmlFor="">
                  Ciudad<span>*</span>
                </label>
                <select
                  className="u-full-width"
                  value={city}
                  name="city"
                  onChange={actualizarState}
                >
                  <option defaultValue value="">
                    Seleccione una opción
                  </option>
                  <Opciones_ciudades id={state} />
                </select>
              </div>

              <div className="input-box">
                <label htmlFor="">
                  Dirección<span>*</span>
                </label>
                <input
                  name="address"
                  type="text"
                  placeholder="Ingrese una dirección"
                  className="form-control"
                  value={address}
                  onChange={actualizarState}
                />
              </div>

              <div className="input-box">
                <label htmlFor="">
                  Teléfono<span>*</span>
                </label>
                <input
                  name="phone"
                  type="text"
                  placeholder="Ingrese un teléfono"
                  className="form-control"
                  value={phone}
                  onChange={actualizarState}
                />
              </div>
            </div>
          ) : null}

          <div className="input-box">
            <label htmlFor="">
              Email<span>*</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="Ingrese email de registro"
              className="form-control"
              value={email}
              onChange={actualizarState}
            />
          </div>

          <div className="input-box">
            <label htmlFor="">
              Nueva contraseña<span>*</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Ingrese una Contraseña"
              class="form-control"
              value={password}
              onChange={actualizarState}
            />
          </div>
          <div className="input-box">
            <label htmlFor="">
              Confirmación de contraseña<span>*</span>
            </label>
            <input
              type="password"
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
};

export default RegistrarsePage;
