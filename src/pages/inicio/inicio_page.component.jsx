import React from 'react'
import './inicio_page.styles.scss'

const inicio_page = () => {
    return ( 
    <div className="mensaje_inicio">
        <div className="mensaje_box">
            <img src={require("../../images/paws.png")} />
            <p>Da tus primeros pasos y registrate!</p>
        </div>
    </div>);
}
 
export default inicio_page;