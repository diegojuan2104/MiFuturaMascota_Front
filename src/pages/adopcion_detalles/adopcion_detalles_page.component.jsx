import React  , { useState, useEffect } from 'react'
import { URL } from "../../config/vars"

import axios from "axios";

import './adopcion_detalles.styles.scss'

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
    <div>
        <div className="box_adopcion_detalles">
                <div className="foto_mascota">
                    <h1>{mascota.name}</h1>
                <img
                    src={mascota.url_img}/>
                </div>

                <div className="info">
                    <h2>Información</h2>
                    <div className="info_detalle">
                        <p>Fecha de nacimiento:{mascota.birth_date}</p>
                        <p>Raza:{mascota.breed}</p>
                        <p>Tipo:{mascota.type}</p>
                    </div>
                </div>
        </div>
    </div>
    );
}
 
export default AdopocionDetalles;