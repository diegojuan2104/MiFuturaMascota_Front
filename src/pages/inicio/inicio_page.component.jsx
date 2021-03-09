import React from 'react'
import './inicio_page.styles.scss'

const inicio_page = () => {
    return ( 
    <div className="mensaje_inicio">
        <div className="mensaje_box">
            <img src={require("../../images/paws.png")} />
            <p>
Alguien quiere adoptar tu mascota! </p>
<p>Aquí tienes la información para contactarlo.</p>
        </div>
    </div>);
}
 
export default inicio_page;