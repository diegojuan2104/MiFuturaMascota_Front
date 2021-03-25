import React, { Fragment, useState, useEffect } from "react";
import uuid from "uuid/dist/v4";

import Select from "../../components/opciones_tipo_mascota/Select";
import OptionsBreed from "../../components/opciones_raza_mascota/OptionsBreed";
import Opciones_ciudades from "../../components/opciones_ciudades/Opciones_ciudades";
import Select_depart from "../../components/opciones_departamentos/Select_depart";

import "./dar_en_adopcion.styles.scss";

import "./dar_en_adopcion.styles.scss";
import { URL } from "../../config/vars"
import axios from "axios";
import { useHistory } from "react-router-dom";
import { render } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";


const DarEnAdopcion = () => {
  const history = useHistory();
  const email_user = useSelector((state) => state.user.id_user);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    console.log(email_user);
    if (!email_user) {
      localStorage.clear();
      //history.push("/ingresar")
      //alert("Debes ingresar")
    }
    update_pet(
      {
        ...Mascota,
        user_id: email_user,
      },
      [email_user]
    );

    return () => console.log("clean");
  }, []);

  const [mascotas, setPets] = useState([]);

  const [isDisable, setIsDisable] = useState(false);
  const [Mascota, update_pet] = useState({
    name: "",
    user_id: email_user,
    fecha: "",
    city: "",
    breed: "",
    type: "",
    filename: "",
    images: [],
    description: "",
    age: "",
    size: "",
  });
  const [error, setError] = useState(false);

  const createPet = (mascota) => {
    var bodyFormData = new FormData();
    bodyFormData.append("id_owner", mascota.user_id);
    bodyFormData.append("name", mascota.name);
    bodyFormData.append("animal_breed", mascota.breed);
    bodyFormData.append("animal_type", mascota.type);
    if (mascota.fecha != "") { bodyFormData.append("birth_date", mascota.fecha); }
    bodyFormData.append("location", mascota.city);
    bodyFormData.append("description", mascota.description);
    bodyFormData.append("animal_size", mascota.size);
    bodyFormData.append("age_aprox", mascota.age);
    bodyFormData.append("description", mascota.description);
    bodyFormData.append("isDisabled", isDisable ? 1 : 0);
    console.log(mascota);

    Object.values(mascota.images).forEach((x) =>
      bodyFormData.append("images", x)
    );

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios({
      method: "post",
      url: URL + "/pet",
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => console.log((response.data)))
      .catch((error) => console.log(error));
    setPets([...mascotas, mascota]);
  };

  const handleChange = (e) => {
    if (e.target.name === "filename") {
      update_pet({
        ...Mascota,
        filename: e.target.value,
        images: e.target.files,
      });
      console.log(Mascota.filename);
      return;
    }
    update_pet({
      ...Mascota,
      [e.target.name]: e.target.value,
    });
  };
  const create_pet = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      user_id === "" ||
      breed === "" ||
      type === "" ||
      images === "",
      age === "",
      size === ""
    ) {
      setError(true);
      console.log(Mascota);
      alert("Todos los campos marcados con * son obligatorios")
      return;
    }
    console.log(Mascota);
    setError(false);
    Mascota.id = uuid();
    createPet(Mascota);
    update_pet({
      name: "",
      user_id: email_user,
      fecha: "",
      breed: "",
      type: "",
      filename: "",
      images: [],
      description: "",
      city: "",
      state: "",
    });
  };
  const {
    name,
    user_id,
    fecha,
    breed,
    description,
    type,
    images,
    filename,
    city,
    state,
    age,
    size
  } = Mascota;
  return (
    <Fragment>
      <div className="form_registro">
        <h1>Registrar Mascota</h1>

        {error ? (
          <p className="alerta-error">todos los campos son oblilgatorios</p>
        ) : null}
        <form className="myform" onSubmit={create_pet}>

          {/* NOMBRE */}
          <label>
            Nombre<span className="required">*</span>
          </label>
          <input
            type="text"
            name="name"
            className="u-full-width"
            placeholder="Nombre Mascota"
            onChange={handleChange}
            value={name}
          />

          {/* FECHA DE NACIMIENTO */}
          <label>
            Fecha nacimiento(Opcional)
          </label>
          <input
            type="date"
            name="fecha"
            className="u-full-width"
            placeholder="Nombre Mascota"
            onChange={handleChange}
            value={fecha}
          />

          {/* TIPO DE ANIMAL */}
          <label>
            Tipo de animal<span className="required">*</span>
          </label>
          <select
            className="u-full-width"
            value={type}
            name="type"
            onChange={handleChange}
          >
            <option defaultValue value="">
              Seleccione una opción
            </option>
            <Select />
          </select>


          {/* RAZA*/}
          <label>
            Raza de animal<span className="required">*</span>
          </label>
          <select
            className="u-full-width"
            value={breed}
            name="breed"
            onChange={handleChange}
          >
            <option defaultValue value="">
              Seleccione una opción
            </option>
            <OptionsBreed id={type} />
          </select>

          {/* DEPARTAMENTO */}
          <label>
            Departamento<span className="required">*</span>
          </label>
          <select
            className="u-full-width"
            value={state}
            name="state"
            onChange={handleChange}
          >
            <option defaultValue value="">
              Seleccione una opción
            </option>
            <Select_depart />
          </select>

          {/* CIUDAD O MUNICIPIO */}
          <label>
            Ciudad/Municipio<span className="required">*</span>
          </label>
          <select
            className="u-full-width"
            value={city}
            name="city"
            onChange={handleChange}
          >
            <option defaultValue value="">
              Seleccione una opción
            </option>
            <Opciones_ciudades id={state} />
          </select>

          {/*EDAD*/}
          <label>
            Edad<span className="required">*</span>
          </label>
          <select
            className="u-full-width"
            value={age}
            name="age"
            onChange={handleChange}
          >
            <option defaultValue value="">
              Seleccione una opción
            </option>
            <option value={1}>Cachorro</option>
            <option value={2}>Adulto</option>
            <option value={3}>Anciano</option>
          </select>

          {/*TAMAÑO*/}
          <label>
            Tamaño<span className="required">*</span>
          </label>
          <select
            className="u-full-width"
            value={size}
            name="size"
            onChange={handleChange}
          >
            <option defaultValue value="">
              Seleccione una opción
            </option>
            <option value={1}>Pequeño</option>
            <option value={2}>Mediano</option>
            <option value={3}>Grande</option>
          </select>


          {/* DISCAPACIDDAD*/}

          <label>
            ¿Presenta alguna discapacidad?_
            <input type="checkbox"
              defaultChecked={isDisable}
              onChange={() => setIsDisable(!isDisable)}
            />
          </label>
          {/* DESCRIPCION */}
          <label>Descripción</label>
          <textarea
            className="u-full-width"
            name="description"
            onChange={handleChange}
            value={description}
          ></textarea>
          <label>
            Imagenes<span className="required">*</span>
          </label>
          <input
            multiple
            type="file"
            className="u-full-width"
            name="filename"
            value={filename}
            onChange={handleChange}
            accept="image/png, image/jpeg, image/jpg,image/jpe"
          />
          <button type="submit" className="u-full-width myboton">
            Agregar Mascota
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default DarEnAdopcion;