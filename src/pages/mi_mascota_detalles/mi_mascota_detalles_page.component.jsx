import React, { useState, useEffect } from "react";
import { URL } from "../../config/vars";
import { Carousel, Item } from "react-bootstrap";

import axios from "axios";

import "./mi_mascota_detalles.styles.scss";

import FormContacto from "../../components/form_contacto/from_contacto.component";

import { useDispatch, useSelector } from "react-redux";

const MiMascotaDetalles = () => {
  const pet = useSelector((state) => state.pet);

  const [infoMascota, informacionMascotaCargada] = useState(false);
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
  });

  const [interesados, setInteresados] = useState([]);

  useEffect(() => {
    if (!infoMascota) {
      getInterested();
      actualizarMascota(pet);
      informacionMascotaCargada(true);
    }
  });

  let getInterested = async () => {
    let response = await axios.get(URL + `/get-interested/${pet.id}`);
    setInteresados(response.data.Users_interested);
    console.log(response.data.Users_interested);
  };

  let accept_interested = async (user) => {
    let interesed = {
      id_pet: mascota.id,
      id_user: user.email,
    };
    console.log(interesed);
    try {
      let res = await axios.post(URL + "/pet/accept_user", interesed);
      console.log(res);
      alert("Usuario aceptado");
      getInterested();
    } catch (error) {
      console.log("No se pudo aceptar al usuario");
    }
  };

  let reject_interested = async (user) => {
    let interesed = {
      id_pet: mascota.id,
      id_user: user.email,
    };
    console.log(interesed);
    try {
      let res = await axios.post(URL + "/pet/reject_user", interesed);
      console.log(res);
      alert("Usuario rechazado");
      getInterested();
    } catch (error) {
      console.log("No se pudo rechazar al usuario");
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
            <strong>Departamento: </strong>
            {mascota.state}
          </p>
          <p>
            <strong>Ciudad: </strong>
            {mascota.city}
          </p>
        </div>
        <h2>Detalles</h2>
        <p>{mascota.description}</p>

        <h2>Interesados</h2>

        {interesados.length === 0 ? null : (
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>
                {interesados.map((interesado) => (
                  <tr>
                    <td>{interesado.name}</td>
                    <td>{interesado.lastname}</td>
                    <td>{interesado.email}</td>
                    <td>
                      {interesado.Estado_adopcion == -1 ? (
                        <div>
                          <button
                            className=" "
                            onClick={accept_interested.bind(this, interesado)}
                          >
                            Aceptar
                          </button>
                          {"  "}
                          <button
                            className=" "
                            onClick={reject_interested.bind(this, interesado)}
                          >
                            Rechazar
                          </button>
                        </div>
                      ) : (
                        <div>
                          {interesado.Estado_adopcion == 1 ? (
                            <p>Candidato</p>
                          ) : (
                            <div>
                              {interesado.Estado_adopcion == 0 ? (
                                <p>Rechazado</p>
                              ) : (
                                <p>Aceptado</p>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiMascotaDetalles;
