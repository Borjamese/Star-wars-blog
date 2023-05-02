import React, { useState, useEffect } from "react";
import { AiOutlineHeart } from 'react-icons/ai';
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const urlStarships = "https://www.swapi.tech/api/starships"
const urlImgStarships= "https://starwars-visualguide.com/assets/img/starships/"

export function Starships() {

    const [starship, setStarship] = useState([]);

    useEffect(() => {
        fetch(urlStarships)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results);
                setStarship(data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <div className="container-fluid">
            <div className="row">
                {starship.map((starship, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="d-flex">
                            <div className="card">
                                <img src={`${urlImgStarships}${index + 9}.jpg`} alt="" />

                            </div>
                            <button> <AiOutlineHeart /> </button>
                            <Link to={`/starships/${index + 1}`}>
                                <button> Ver más </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};




