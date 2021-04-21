import React, { useState, useEffect } from "react";
import { URL } from "../../config/vars";
import { Carousel, Item } from "react-bootstrap";

import axios from "axios";

import "./adopcion_detalles.styles.scss";

import FormContacto from "../../components/form_contacto/from_contacto.component";

import { useDispatch, useSelector } from "react-redux";

const AdopocionDetalles = () => {
  const pet = useSelector((state) => state.pet);
  const user = useSelector((state) => state.user);
  console.log("now this");
  console.log(pet);

  const [infoMascota, informacionMascotaCargada] = useState(false);
  const [showButton, changeShowButton] = useState(true);


  const [mascota, actualizarMascota] = useState({
    name: "",
    birth_date: "",
    breed: "",
    type: "",
    images: "",
    description: "",
    animal_age_relation: "",
    animal_size_relation: "",
    isDisabled: "",
    id: "",
    city: ""
  });


  const [data, actualizarTexto] = useState({
    interest: ""
  });

  const { interest } = data;

  const actualizarState = (e) => {
    actualizarTexto({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (!infoMascota) {
      actualizarMascota(pet);
      informacionMascotaCargada(true);
    }
  });
  //TODO: validar al cargar la página si el usuario ya está interesado y no mostrar el botón

  let express_interest = async () => {

    if (data.interest === "") {
      alert("Debe agregar un mensaje de interés");
      return;
    }

    let interesed = {
      id_pet: mascota.id,
      id_user: user.id_user,
      message: data.interest,
    };
    console.log(interesed);
    try {
      let res = await axios.post(URL + "/interested", interesed);
      console.log(res);
      alert("Genial! pronto se pondrán en contacto contigo");
      changeShowButton(false);
      actualizarTexto({
        ...data,
        interest: ""
      });
    } catch (error) {
      console.log("Error al manifestar interés");
    }
  };

  return (
    <div className="box_adopcion_detalles row">
      <div className="foto_mascota_contacto col-md-12 col-sm-12 col-lg-6">
        <div className="foto_container">
          <h1>{mascota.name}</h1>
          <div className="foto_mascota_contacto">
            {mascota.images.length > 1 ? (
              <Carousel>
                {mascota.images.map((img, i) => (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={
                        img != null
                          ? img.route
                          : "https://cnnespanol.cnn.com/wp-content/uploads/2020/07/200703104728-labrador-retriever-stock-super-169.jpg?quality=100&strip=info&w=940&h=530&crop=1"
                      }
                      alt="First slide"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <img
                src={mascota.images[0] != null ? mascota.images[0].route : null}
              />
            )}




            {showButton ?

              <div>

                {/* DESCRIPCION */}
                <label>Interés</label>
                <textarea
                  placeholder="Describe tu interes en esta mascota"
                  className="u-full-width"
                  name="interest"
                  onChange={actualizarState}
                  value={interest}
                ></textarea>
                <button
                  className=" "
                  onClick={express_interest}
                >
                  Enviar Mensaje al dueño!
                    </button>
              </div>

              : null}

          </div>
        </div>
      </div>
      <div className="info col-md-12 col-sm-12 col-lg-6">
        <h2>Información general</h2>
        <div className="info_detalle">
          <p>
            <strong>Fecha de nacimiento: </strong>
            {mascota.birth_date}
          </p>
          <p>
            <strong>Raza: </strong>
            {mascota.breed}
          </p>
          <p>
            <strong>Tipo: </strong>
            {mascota.type}
          </p>
          <p>
            <strong>Ciudad: </strong>
            {mascota.city.name}
          </p>
        </div>
        <h2>Detalles</h2>
        <p>{mascota.description}</p>
      </div>
    </div>
  );
};

export default AdopocionDetalles;
