import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import { AiOutlineHeart} from 'react-icons/ai';
import { Link } from "react-router-dom";

const urlApiPeople = "https://www.swapi.tech/api/people";
const imgUrl = "https://starwars-visualguide.com/assets/img/characters/";

export const Characters = () => {
    const [cardCharacter, setCardCharacter] = useState([]);

    useEffect(() => {
        fetch(urlApiPeople)
            .then((response) => response.json())
            .then((data) => {
                setCardCharacter(data.results)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="container">
            <br />
            <br />
                <div className="row justify-content-md-center">
                 {cardCharacter.map((character, index) => (
                <div className="col-2">
                    <p> {character.name} </p>
                    <button> <AiOutlineHeart /> </button>
                    <Link to = {`/characters/${index + 1}`}> 
                    <button> Ver más </button>
                    </Link>
                 </div>
                 )
                 )}
                </div>
            </div>
    );
};
