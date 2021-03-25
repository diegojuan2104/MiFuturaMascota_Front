import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./mis_mascotas_page.styles.scss";
import MascotaCard from "../../components/mascota_card/mascota_card.component";
import Select from "../../components/opciones_tipo_mascota/Select";
import OptionsBreed from "../../components/opciones_raza_mascota/OptionsBreed";
import Opciones_ciudades from "../../components/opciones_ciudades/Opciones_ciudades";
import Select_depart from "../../components/opciones_departamentos/Select_depart";
import { URL, } from "../../config/vars";
import axios from "axios";
import "./filtros.styles.scss";
import { useHistory } from "react-router-dom";


//Actions de Redux
import { useDispatch, useSelector } from "react-redux";
import { saveSelectedPetAction } from "../../actions/petActions";

const MisMascotasPage = () => {
  //utilizar use distpach y te crea una función
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const history = useHistory();
  //mandar llamar el action
  const savePetSelected = (pet) => dispatch(saveSelectedPetAction(pet));

  const [filtros, setFiltros] = useState({
    atype: "",
    breed: "",
    state: "",
    location: "",
  });

  const [mascotas, setMascotas] = useState([{}]);
  const [Flag, setFlag] = useState(false);
  let getData = async () => {
    const result = await axios.get(URL + "/my-pets/" + user.id_user);
    console.log(result);
    setMascotas(result.data.pets);
  };


  useEffect(() => {
    if (!Flag) {
      getData();
      setFlag(true);
    }
    return () => console.log("clean");
  }, []);

  let busqueda_nueva = () => {
    limpiarFiltros();
    getDataFiltered1();
  };

  let getDataFiltered = async () => {
    let res = await axios.post(URL + "/filter_by", filtros);
    setMascotas([{}]);
    console.log(res);
    setMascotas(res.data);
  };
  let getDataFiltered1 = async () => {
    let res = await axios.post(URL + "/filter_by", {});
    setMascotas([{}]);
    console.log(res);
    setMascotas(res.data);
  };
  const cargarInfo = () => {
    getDataFiltered();
  };
  const limpiarFiltros = () => {
    setFiltros({
      breed: "",
      atype: "",
      location: "",
    });

    console.log(filtros);
    document.getElementById("atype_filter").selectedIndex = 0;
    document.getElementById("breed_filter").selectedIndex = 0;
    document.getElementById("city_filter").selectedIndex = 0;
  };

  const handleChange = (e) => {
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value,
    });
  };

  const { breed, atype, state, location } = filtros;


  const mascotaSeleccionada = async (mascota) => {

    await axios.get(URL + "/get-pet-details/" + mascota.id).then((result) => {
      let newPet = result.data.pet;

      console.log(newPet);
      savePetSelected(newPet)
      history.push("/mis_mascotas/detalles")
    }

    );

  }

  return (
    <div>
      <div className="title_adopcion">
        <img src={require("../../images/catdog.png")} />
        <h1 className="col-12">Mis Mascotas</h1>
      </div>
      <div className="filtros">
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

        <button onClick={cargarInfo}>Buscar</button>
        <button onClick={limpiarFiltros}>QUITAR FILTROS</button>
      </div>
      <div className="box_adopcion">
        <div className="row">
        {mascotas.length === 0
          ? <p>No hay mascotas</p>
          : mascotas.map((mascota, i) => (
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              className="card_mascota"
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

export default MisMascotasPage;
