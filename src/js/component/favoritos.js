import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";

import { Context } from "../store/appContext";

export const Favoritos = () => {
	const { store, actions } = useContext(Context);
	
	return (
		<div>
			{store.favoritos.map((favorito,index)=> (
        <> 
        <li key={index}>
          {favorito.name}
        </li>
        
        <button onClick= {() => actions.deleteFavoritos(index) }> Eliminar </button>
        </>
            ))}
		</div>
	)
};