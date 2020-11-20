import React from 'react';
import './mascota_card.styles.scss'

const mascota_card = ({mascota}) => {
  
    return ( 
    <div className="card_mascota" >
                <div className="foto_mascota">
                    <img 
                        src={'http://localhost:8000'+mascota.url_img}
                    ></img>
                </div>
    <h4 className="card_title">{mascota.name}</h4>
                
    </div>);
}
 
export default mascota_card;