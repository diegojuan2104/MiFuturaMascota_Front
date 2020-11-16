import React, { useState, useEffect } from 'react';


import './adopcion_page.styles.scss';



const MascotasPage = () => {

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
        "url_img": "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__480.jpg"
    },
    {
        "id": 3,
        "name": "ronny",
        "birth_date": "2019-01-09",
        "breed": "ninguno",
        "type": "perro",
        "url_img": "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__480.jpg"
    },
    {
        "id": 6,
        "name": "juandick",
        "birth_date": "2020-02-01",
        "breed": "ninguno",
        "type": "perro",
        "url_img": "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__480.jpg"
    },
    {
        "id": 7,
        "name": "quevinrock",
        "birth_date": "2020-11-01",
        "breed": "ninguno",
        "type": "perro",
        "url_img": "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__480.jpg"
    },
    {
        "id": 8,
        "name": "thecacasgomes",
        "birth_date": "2019-11-30",
        "breed": "ninguno",
        "type": "perro",
        "url_img": "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__480.jpg"
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
    },
    {
        "id": 14,
        "name": "gatito",
        "birth_date": "2020-11-30",
        "breed": "ninguno",
        "type": "gato",
        "url_img": "/14/0.jpeg"
    },
    {
        "id": 15,
        "name": "calvin",
        "birth_date": "2019-11-29",
        "breed": "bulldog",
        "type": "perro",
        "url_img": "/15/0.jpeg"
    },
    {
        "id": 16,
        "name": "bull",
        "birth_date": "2019-11-30",
        "breed": "pitbull",
        "type": "perro",
        "url_img": "/16/0.jpeg"
    },
    {
        "id": 17,
        "name": "pepito",
        "birth_date": "2020-12-31",
        "breed": "ninguno",
        "type": "perro",
        "url_img": "/17/0.jpeg"
    },
    {
        "id": 18,
        "name": "pepito",
        "birth_date": "2020-12-31",
        "breed": "ninguno",
        "type": "perro",
        "url_img": "/18/0.jpeg"
    },
    {
        "id": 24,
        "name": "pepito",
        "birth_date": "2020-12-31",
        "breed": "ninguno",
        "type": "perro",
        "url_img": "/24/0.png"
    },
    {
        "id": 39,
        "name": "pablito",
        "birth_date": "2020-12-31",
        "breed": "ninguno",
        "type": "perro",
        "url_img": "/39/0.png"
    }
    ]);

    return (
        <div>
            <h1 className="col-12 text-center">Mascotas en adopción</h1>
            <div className="box">
                <div className="row">
                    {mascotas.map((mascota) => (
                        <div className="col-md-4" key={mascota.id}>
                            <p>{mascota.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MascotasPage;