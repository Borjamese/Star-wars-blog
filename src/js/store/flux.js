const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favoritos:[], 
			element:{}
		},
		actions: {
			// Use getActions to call a function within a fuction
			selectElement: (item) => {
            setStore({element:item})
			console.log(getStore().element)
			},
			addFavoritos:() => {
				const store = getStore()
				const newFavorito = store.element;
				setStore({favoritos: [...store.favoritos,newFavorito]})
				console.log(getStore().favoritos)
			},
			deleteFavoritos: (index) => {
				const store = getStore()
				const updateFavoritos = store.favoritos.filter((fav, i) => i != index); 
				setStore({favoritos: updateFavoritos})
				console.log(getStore().favoritos)
			}
			
		}
	};
};

export default getState;
