import React, { useEffect } from "react";
import { useParams } from "react-router";


export const CharacterOne = () => {

    const {index} = useParams()


    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${index}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

	return (

        //1. hay que crear una variable de estado onecharacter,setonecharacter] 
        // 2. setear mi data dentro del fetch 
        //en el return llamo directamente al nombre de mi variable y a la propiedad {onecharacter.name} <p> {onecharacter.gender...height...}</>
		<div>
            <p>soy el character</p>
        </div>
	);
};
