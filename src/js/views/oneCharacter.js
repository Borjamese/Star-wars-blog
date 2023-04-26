import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export const CharacterOne = () => {

    const [singleCharacter, setSingleCharacter] = useState ({})
    const {uid} = useParams()


    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${uid}`)
        .then(response => response.json())
        .then(data =>{ 
            console.log(data.result.properties)
            setSingleCharacter(data.result.properties)
        }) 
        .catch(error => console.log(error))
 }, [])


	return (
        <>
        <div className="text-light container-fluid row mt-5">
           <div className="col-1"></div>
           <div className="col-5 text-center">
                <img className="imageSingle"
                src={ `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} alt=""/>
            </div>

           <div className="col-5 mt-5">
            <h1>Name: {singleCharacter.name}</h1>
            <hr/>
            <h5>Mass: {singleCharacter.mass}</h5>
            <h5>Hair color: {singleCharacter.hair_color}</h5>
            <h5>Skin: {singleCharacter.skin_color}</h5>
            <h5>Eyes: {singleCharacter.eye_color}</h5>
            <h6>Birth year: {singleCharacter.birth_year}</h6>
            <h6>Gender: {singleCharacter.gender}</h6>
            
           </div>
           
           <div className="col-1"></div>
           
        </div>
            
        </>
	);
};
