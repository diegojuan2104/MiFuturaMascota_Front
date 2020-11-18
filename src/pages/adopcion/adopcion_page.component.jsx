import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './adopcion_page.styles.scss';
import MascotaCard from "../../components/mascota_card/mascota_card.component"


const AdopcionPage = () => {

    const [mascotas, setMascotas] = useState([{
        "id": 1,
        "name": "brenda",
        "birth_date": "2020-01-09",
        "breed": "loro",
        "type": "pajaro",
        "url_img": "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__480.jpg"
    },
    {
        "id": 2,
        "name": "pamela",
        "birth_date": "2019-01-09",
        "breed": "ninguno",
        "type": "gato",
        "url_img": "data:image/jpeg;base64,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"
    },
    {
        "id": 3,
        "name": "ronny",
        "birth_date": "2019-01-09",
        "breed": "ninguno",
        "type": "perro",
        "url_img": "https://www.hola.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-m.jpg"
    },
    {
        "id": 6,
        "name": "juandick",
        "birth_date": "2020-02-01",
        "breed": "ninguno",
        "type": "perro",
        "url_img": "https://i.pinimg.com/originals/36/96/8c/36968c6cce7610f295d01bb38bbf213b.jpg"
    },
    {
        "id": 7,
        "name": "quevinrock",
        "birth_date": "2020-11-01",
        "breed": "ninguno",
        "type": "perro",
        "url_img": "data:image/jpeg;base64,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"
    },
    {
        "id": 8,
        "name": "thecacasgomes",
        "birth_date": "2019-11-30",
        "breed": "ninguno",
        "type": "perro",
        "url_img": "https://static.nationalgeographic.es/files/styles/image_3200/public/01-cat-questions-nationalgeographic_1228126.jpg?w=1600&h=900"
    },
    {
        "id": 9,
        "name": "dan",
        "birth_date": "2020-02-01",
        "breed": "ninguno",
        "type": "perro",
        "url_img": "/9/0.jpeg"
    },
    {
        "id": 10,
        "name": "luna",
        "birth_date": "2020-01-02",
        "breed": "egipcio",
        "type": "gato",
        "url_img": "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__480.jpg"
    },
    {
        "id": 11,
        "name": "pepe",
        "birth_date": "2019-12-30",
        "breed": "persa",
        "type": "gato",
        "url_img": "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__480.jpg"
    },
    {
        "id": 12,
        "name": "dario",
        "birth_date": "2016-01-01",
        "breed": "pitbull",
        "type": "perro",
        "url_img": "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__480.jpg"
    },
    {
        "id": 13,
        "name": "pajarin",
        "birth_date": "2018-02-01",
        "breed": "tucan",
        "type": "pajaro",
        "url_img": "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__480.jpg"
    }
    ]); 

      
    const mascotaSeleccionada = mascota =>{
        console.log(mascota);
        localStorage.setItem("mascota", mascota.id);
        localStorage.setItem("mascota", mascota.name);
        localStorage.setItem("birth_date", mascota.birth_date);
        localStorage.setItem("breed", mascota.breed);
        localStorage.setItem("type", mascota.type);
        localStorage.setItem("url_img", mascota.url_img);
    }

    return (
        <div>
            <div className="title_adopcion">
                <img src={require("../../images/catdog.png")} />
                <h1 className="col-12">Mascotas en adopción</h1>
            </div>
            
            <div className="box_adopcion">
                <div className="row" >
                    {mascotas.map((mascota, i) => (
                        <Link to="/adopcion/detalles_adopcion" key={i} onClick={mascotaSeleccionada.bind(this,mascota)} className="col-md-6 col-sm-12 col-lg-6 col-xl-4" >
                            <MascotaCard mascota={mascota} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AdopcionPage;