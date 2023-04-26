import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const urlApiPeople = "https://www.swapi.tech/api/people";
const imgUrlChars = "https://starwars-visualguide.com/assets/img/characters/";

export const Characters = () => {
    const { store, actions } = useContext(Context);
    const [cardCharacter, setCardCharacter] = useState([]);
    const {uid} = useParams()

    useEffect(() => {
        fetch(urlApiPeople)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results)
                setCardCharacter(data.results)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="container">
            <div className="row">
                {cardCharacter.map((character, index) => (
                    <div className="col-md-2" key={index}>
                        <div className="d-flex">
                            <div className="card">
                                <img src={`${imgUrlChars}${index + 1}.jpg`} alt="" className="card-img-top char-img" />
                                <div className="card-body">
                                    <p className="card-text">{character.name}</p>
                                </div>
                            </div>
                            <button onClick={() => {
                                    actions.selectElement(character)
                                    actions.addFavoritos()
                                }
                            }> <AiOutlineHeart /> </button>
                            <Link to={`/characters/${index + 1}`}>
                                <button> Ver más </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

