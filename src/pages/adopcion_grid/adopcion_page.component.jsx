import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./adopcion_page.styles.scss";
import MascotaCard from "../../components/mascota_card/mascota_card.component";
import Select from "../../components/opciones_tipo_mascota/Select";
import OptionsBreed from "../../components/opciones_raza_mascota/OptionsBreed";

import { URL, masco } from "../../config/vars";
import axios from "axios";
import "./filtros.styles.scss";

const AdopcionPage = () => {
  const [filtros, setFiltros] = useState({
    type: "",
    breed: "",
    city: "",
  });

  const [mascotas, setMascotas] = useState([{}]);

  useEffect(() => {
      let getData = async () => {
        const result = await axios("http://localhost:5000/pets");
        console.log(result.data);
        setMascotas(result.data);

      };
      getData();
    return () => console.log("clean");
  }, []);
  const limpiarFiltros = () => {
    localStorage.setItem("breed_filter", "");
    localStorage.setItem("type_filter", "");
    localStorage.setItem("city_filter", "");
    setFiltros({
      breed: "",
      type: "",
      city: "",
    });

    console.log(filtros);
    document.getElementById("type_filter").selectedIndex = 0;
    document.getElementById("breed_filter").selectedIndex = 0;
    document.getElementById("city_filter").selectedIndex = 0;
  };

  const handleChange = (e) => {
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value,
    });
  };

  let mascotasFiltradas = mascotas;

  const { breed, type, city } = filtros;

  const mascotaSeleccionada = (mascota) => {
    console.log(mascota);
    localStorage.setItem("mascota", mascota.id);
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
        <label>Tipo de animal:</label>
        <select
          value={type}
          name="type"
          id="type_filter"
          onChange={handleChange}
        >
          <option defaultValue value="">
            Seleccione una opción
          </option>
          <option>perro</option>
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
          <option>pastor</option>
          <option>bulldog</option>
          <OptionsBreed id={type} />
        </select>

        <label>Ciudad:</label>
        <select
          id="city_filter"
          value={city}
          name="city"
          onChange={handleChange}
        >
          <option defaultValue value="">
            Seleccione una opción
          </option>
          <option>Medellin</option>
          <option>Cali</option>
        </select>

        <button onClick={limpiarFiltros}>QUITAR FILTROS</button>
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
