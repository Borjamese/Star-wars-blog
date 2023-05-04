import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export const StarshipOne = () => {

    const [singleStarship, setSingleStarship] = useState ({})
    const {uid} = useParams()


    useEffect(() => {
        fetch(`https://www.swapi.tech/api/starships/${uid}`)
        .then(response => response.json())
        .then(data =>{ 
            console.log(data.result.properties)
            setSingleStarship(data.result.properties)
        }) 
        .catch(error => console.log(error))
 }, [])

 
//HAY UN FALLO EN LA API, LAS IMG DE LAS STARSHIPS ESTAN CRASHEADAS Y LA NAVE 1 NO SALE.

	return (
        <>
        <div className="text-light container-fluid row mt-5">
           <div className="col-1"></div>
           <div className="col-5 text-center">
                <img className="imageSingle"
                src={ `https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`} alt=""/>
            </div>

           <div className="col-5 mt-5">
            <h1>Name: {singleStarship.name}</h1>
            <hr/>
            <h5>Model: {singleStarship.model}</h5>
            <h5>Manufacturer: {singleStarship.manufacturer}</h5>
            <h5>Passengers: {singleStarship.passengers}</h5>
            <h5>Consumables: {singleStarship.consumables}</h5>
            <h6>Starship class: {singleStarship.starship_class}</h6>
            <h6>Crew: {singleStarship.crew}</h6>
            
           </div>
           
           <div className="col-1"></div>
           
        </div>
            
        </>
	);
};
