import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Characters } from "./characters";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	
	return (
		<div>
			<Characters />
		</div>
	)
};