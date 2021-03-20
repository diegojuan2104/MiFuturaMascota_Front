import React, { useState, useEffect } from 'react'
import { URL } from "../../config/vars"
import { Carousel, Item } from 'react-bootstrap';

import axios from "axios";

import './adopcion_detalles.styles.scss'

import FormContacto from "../../components/form_contacto/from_contacto.component"

const AdopocionDetalles = () => {

    const [infoMascota, informacionMascotaCargada] = useState(false);
    const [mascota, actualizarMascota] = useState({
        "name": "",
        "birth_date": "",
        "breed": "",
        "type": "",
        "url_img": "",
        "details": "",
        "city": "",
        "state": ""
    });

    useEffect(() => {
        if (!infoMascota) {
            cargarInfo();
            informacionMascotaCargada(true);
        }
    });

    const cargarInfo = () => {
        let name = localStorage.getItem("mascota");
        let birth_date = localStorage.getItem("birth_date");
        let breed = localStorage.getItem("breed");
        let type = localStorage.getItem("type");
        let url_img = localStorage.getItem("url_img");
        let city = localStorage.getItem("city");
        let state = localStorage.getItem("state");
        let details = localStorage.getItem("description");

        let mascota = {
            name,
            birth_date,
            breed,
            type,
            url_img,
            details,
            city,
            state
        }

        actualizarMascota(mascota)
    }


    return (
        <div className="box_adopcion_detalles row">
            <div className="foto_mascota_contacto col-md-12 col-sm-12 col-lg-6">
                <h1>{mascota.name}</h1>

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://ichef.bbci.co.uk/news/800/cpsprodpb/15665/production/_107435678_perro1.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cnnespanol.cnn.com/wp-content/uploads/2020/07/200703104728-labrador-retriever-stock-super-169.jpg?quality=100&strip=info&w=940&h=530&crop=1"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>

                <img src={mascota.url_img} />
                <FormContacto />
            </div>
            <div className="info col-md-12 col-sm-12 col-lg-6">
                <h2>Información general</h2>
                <div className="info_detalle">
                    <p><strong>Fecha de nacimiento: </strong>{mascota.birth_date}</p>
                    <p><strong>Raza: </strong>{mascota.breed}</p>
                    <p><strong>Tipo: </strong>{mascota.type}</p>
                    <p><strong>Departamento: </strong>{mascota.state}</p>
                    <p><strong>Ciudad: </strong>{mascota.city}</p>
                </div>
                <h2>Detalles</h2>
                <p>{mascota.details}</p>
            </div>


        </div>
    );
}

export default AdopocionDetalles;