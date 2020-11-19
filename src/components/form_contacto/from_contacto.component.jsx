import React, { useState, useEffect }from 'react'
import './form_contacto.styles.scss'

import { URL } from "../../config/vars"

import axios from "axios";


const FormContacto = () => {
    
    const [contacto, actualizarContacto] = useState({
        telefono: "",
        mensaje: ""
    });
    
    
    const {telefono, mensaje} = contacto; 

    const actualizarState = (e) => {
        actualizarContacto({
            ...contacto,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form>
            <h3>Contacta al dueño</h3>
            <div className="input-box">
                            <label htmlFor="">Teléfono<span>*</span></label>
                            <input
                                type="number"
                                placeholder="Ingresa tu telefono de contacto"
                                class="form-control"
                                name="telefono"
                                value={telefono}
                                onChange={actualizarState}/>
            </div>
            <div className="input-box">
                            <label htmlFor="">Mensaje<span>*</span></label>
                            <textarea
                                type="text"
                                placeholder="Ingresa tus dudas,comentarios o inquietudes que tengas sobre la mascota "
                                class="form-control"
                                name="telefono"
                                value={telefono}
                                onChange={actualizarState}
                            />
            </div>
            <div className="button-box">
                            <button type="submit">ENVIAR MENSAJE</button>
            </div>
        </form>
    );
}
 
export default FormContacto;