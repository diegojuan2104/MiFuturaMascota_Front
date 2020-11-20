import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./adopcion_page.styles.scss";
import MascotaCard from "../../components/mascota_card/mascota_card.component";
import Select from "../../components/opciones_tipo_mascota/Select";
import OptionsBreed from "../../components/opciones_raza_mascota/OptionsBreed";
import Opciones_ciudades from "../../components/opciones_ciudades/Opciones_ciudades";
import Select_depart from "../../components/opciones_departamentos/Select_depart";

import { URL, masco } from "../../config/vars";
import axios from "axios";
import "./filtros.styles.scss";

const AdopcionPage = () => {
  const [filtros, setFiltros] = useState({
    atype: "",
    breed: "",
    state: "",
    location: "",
  });

  const [mascotas, setMascotas] = useState([{}]);
  const [Flag, setFlag] = useState(false);
  let getData = async () => {
    const result = await axios("http://localhost:5000/pets");
    setMascotas(result.data);
  };
  useEffect(() => {
    if (!Flag) {
      console.log("sisas");
      getData();
      setFlag(true);
    }
    return () => console.log("clean");
  }, []);

    let busqueda_nueva = () =>{
        limpiarFiltros()
        getDataFiltered1()
    }

  let getDataFiltered = async () => {
    let res = await axios.post("http://localhost:5000/filter_by", filtros);
    setMascotas([{}]);
    console.log(res);
    setMascotas(res.data);
  };
  let getDataFiltered1 = async () => {
    let res = await axios.post("http://localhost:5000/filter_by", {});
    setMascotas([{}]);
    console.log(res);
    setMascotas(res.data);
  };
  const cargarInfo = () => {
    getDataFiltered();
  };
  const limpiarFiltros =  ()  => {
    setFiltros({
      breed: "",
      atype: "",
      location: "",
    });

    console.log(filtros);
    document.getElementById("atype_filter").selectedIndex = 0;
    document.getElementById("breed_filter").selectedIndex = 0;
<<<<<<< HEAD
    document.getElementById("citys_filter").selectedIndex = 0;
    document.getElementById("state_filter").selectedIndex = 0;
    return 0
=======
    document.getElementById("city_filter").selectedIndex = 0;
>>>>>>> 4e3feef21944fbe59d61501e6b16ecb5f18470ec
  };

  const handleChange = (e) => {
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value,
    });
  };


  const { breed, atype, state, location } = filtros;

  const mascotaSeleccionada = (mascota) => {
    console.log(mascota);
    localStorage.setItem("mascota", mascota.name);
    localStorage.setItem("birth_date", mascota.birth_date);
    localStorage.setItem("breed", mascota.breed);
    localStorage.setItem("type", mascota.type);
    localStorage.setItem("url_img", mascota.url_img);
    localStorage.setItem("description", mascota.description);
    localStorage.setItem("city", mascota.city);
    localStorage.setItem("state", mascota.state);
    
  };

  return (
    <div>
      <div className="title_adopcion">
        <img src={require("../../images/catdog.png")} />
        <h1 className="col-12">Mascotas en adopción</h1>
      </div>
      <div className="filtros">
<<<<<<< HEAD
        <div className="combobox">
          <label>Tipo de animal:</label>
          <select
            value={atype}
            name="atype"
            id="type_filter"
            onChange={handleChange}
          >
            <option defaultValue value="">
              Seleccione una opción
            </option>

            <Select />
          </select>

          <label>Raza de animal:</label>
          <select
            value={breed}
            name="breed"
            id="breed_filter"
            onChange={handleChange}
          >
            <option defaultValue value="">
              Seleccione una opción
            </option>

            <OptionsBreed id={atype} />
          </select>

          <label>
            Departamento<span className="required">*</span>
          </label>
          <select
            value={state}
            name="state"
            id="state_filter"
            onChange={handleChange}
          >
            <option defaultValue value="">
              Seleccione una opción
            </option>
            <Select_depart />
          </select>
          <label>
            Ciudad/Municipio<span className="required">*</span>
          </label>
          <select
            value={location}
            name="location"
            id="citys_filter"
            onChange={handleChange}
          >
            <option defaultValue value="">
              Seleccione una opción
            </option>
            <Opciones_ciudades id={state} />
          </select>
        </div>
        <div className="botones">
          <button onClick={cargarInfo}>Buscar</button>
          <button onClick={limpiarFiltros}>QUITAR FILTROS</button>
          <button onClick={busqueda_nueva}>Reiniciar Busqueda</button>
        </div>
=======
        <label>Tipo de animal:</label>
        <select
          value={atype}
          name="atype"
          id="type_filter"
          onChange={handleChange}
        >
          <option defaultValue value="">
            Seleccione una opción
          </option>
    
          <Select />
        </select>

        <label>Raza de animal:</label>
        <select
          value={breed}
          name="breed"
          id="breed_filter"
          onChange={handleChange}
        >
          <option defaultValue value="">
            Seleccione una opción
          </option>
       
          <OptionsBreed id={atype} />
        </select>

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
        <label>
          Ciudad/Municipio<span className="required">*</span>
        </label>
        <select
          className="u-full-width"
          value={location}
          name="location"
          onChange={handleChange}
        >
          <option defaultValue value="">
            Seleccione una opción
          </option>
          <Opciones_ciudades id={state} />
        </select>

        <button onClick={cargarInfo}>Buscar</button>
        <button onClick={limpiarFiltros}>QUITAR FILTROS</button>
>>>>>>> 4e3feef21944fbe59d61501e6b16ecb5f18470ec
      </div>
      <div className="box_adopcion">
        <div className="row">
          {mascotas.map((mascota, i) => (
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              className="card_mascota"
              to="/adopcion/detalles_adopcion"
              key={i}
              onClick={mascotaSeleccionada.bind(this, mascota)}
              className="col-md-6 col-sm-12 col-lg-6 col-xl-4"
            >
              <MascotaCard mascota={mascota} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdopcionPage;
