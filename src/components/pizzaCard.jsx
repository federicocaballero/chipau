import React,{ useState } from "react";

const PizzaCard = ({title, ingredientes, precioEntera, precioMitad, img}) => {
    
    return(
        <>
            <div className="" >
            <img src={img} className="card-img-top" alt="pizza-img"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{ingredientes}</p>
            </div>
            </div>

           
        </>
        
    )
}

export default PizzaCard;