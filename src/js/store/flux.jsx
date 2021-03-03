const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			characters: [],
			favorites: []
		},
		actions: {
			loadCharacters: () => {
				//obtiener personajes obteniendo el result
				fetch("https://3000-tomato-wildebeest-x2kvinqb.ws-us03.gitpod.io/people/")
					.then(res => res.json())
					.then(data => {
						console.table("Fetching Planet data:", data);
						setStore({ characters: data });
					})
					.catch(err => console.error(err));
			},
			loadPlanets: () => {
				//obtiene todos los planetas por medio del result
				fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => {
						console.table("Fetching Planets data: ", data);
						setStore({ planets: data.results });
					})
					.catch(err => console.error(err));
			},
			loadPlanetsbyID: id => {
				//obtener el planeta por ID @view
				fetch("https://swapi.dev/api/planets/" + id)
					.then(res => res.json())
					.then(data => {
						console.table("Fetching Planets data: ", data);
						setStore({ planets: data });
					})
					.catch(err => console.error(err));
			},
			loadCharactersbyID: id => {
				//obtener el personaje por ID @view
				fetch("https://swapi.dev/api/people/" + id)
					.then(res => res.json())
					.then(data => {
						console.log("Fetching Planets data: ", data);
						setStore({ characters: data });
					})
					.catch(err => console.error(err));
			},
			addFavorites: value => {
				//agregar favoritos al dropdown

				const store = getStore();

				setStore({
					favorites: [...store.favorites, [value]]
				});
			},

			countFavorites: () => {
				const store = getStore();
				const length = store.favorites.length;
				return length;
			},

			deleteFavorites: id => {
				const store = getStore();

				const listFavorites = store.favorites.filter((item, f) => id !== f);

				setStore({
					favorites: [...listFavorites]
				});
			}
		}
	};
};

export default getState;
