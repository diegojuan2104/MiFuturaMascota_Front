import React  , { useState, useEffect } from 'react'
import { URL } from "../../config/vars"

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
    "url_img": ""
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
    let breed =  localStorage.getItem("breed");
    let type =   localStorage.getItem("type");
    let url_img =  localStorage.getItem("url_img");
   
    let mascota = {
        name,
        birth_date,
        breed,
        type,
        url_img
    }

    actualizarMascota(mascota)
}


    return ( 
        <div className="box_adopcion_detalles row">
                <div className="foto_mascota_contacto col-md-12 col-sm-12 col-lg-6">
                    <h1>{mascota.name}</h1>

                    <img src={'http://localhost:8000'+mascota.url_img}/>
                    <FormContacto/>
                </div>
                <div className="info col-md-12 col-sm-12 col-lg-6">
                    <h2>Información general</h2>
                    <div className="info_detalle">
                        <p><strong>Fecha de nacimiento: </strong>{mascota.birth_date}</p>
                        <p><strong>Raza: </strong>{mascota.breed}</p>
                        <p><strong>Tipo: </strong>{mascota.type}</p>
                    </div>
                    <h2>Detalles</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque porro quidem labore, quas doloremque dicta culpa beatae, architecto debitis, voluptatem cupiditate laboriosam quibusdam omnis dolorem non expedita ex doloribus magnam dignissimos dolores modi delectus repellendus? Doloribus ea voluptatem fuga quod suscipit, magnam consectetur eveniet laborum sint expedita aliquid numquam sunt delectus illum, dolores doloremque nemo natus ut, qui eos minima omnis sed. Obcaecati similique dolores placeat odit. Blanditiis repudiandae quibusdam aut odio nemo amet repellat, fugit, consequatur maiores inventore et expedita aliquam animi consequuntur adipisci praesentium, magni porro! Dolorem perspiciatis iste sunt, blanditiis rem nisi voluptatibus dolor dolores atque sint?</p>
                </div>
        </div>
    );
}
 
export default AdopocionDetalles;