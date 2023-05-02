import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Characters } from "./characters";
import { Context } from "../store/appContext";
import { Starships } from "./starships";


export const Home = () => {
	const { store, actions } = useContext(Context);
	
	return (
		<div>
			<Characters />
			<Starships />
		</div>
	)
};