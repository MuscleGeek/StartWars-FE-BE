const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			characters: [],
			favorites: [],
			bool: false
		},
		actions: {
			signup: async (name, gender, email, password) => {
				const res = await fetch("https://3000-magenta-termite-yz43ab7q.ws-us03.gitpod.io/signup", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ name: name, gender: gender, email: email, password: password })
				});
				const data = await res.json();
				console.table(data.info); //shows up data-extracted
			},
			login: async (email, password) => {
				const res = await fetch("https://3000-magenta-termite-yz43ab7q.ws-us03.gitpod.io/signin", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password })
				});
				data = await res.json();
				console.table(data);
				if (data.activity) {
					sessionStorage.setItem("access_token", data.access); //token
					sessionStorage.setItem("activity", data.activity); //session state
					setStore({ bool: true }); //Setting by token and actibity status to BE
				} else {
					console.table("Invalid credentials, something is going wrong... ");
				}
			},

			signout: () => {
				setStore({ bool: false });
			},

			loadCharacters: () => {
				//obtener personajes obteniendo el result
				fetch("https://3000-magenta-termite-yz43ab7q.ws-us03.gitpod.io/people")
					.then(res => res.json())
					.then(data => {
						console.table("Fetching Planet data:", data);
						setStore({ characters: data });
					})
					.catch(err => console.error(err));
			},
			loadPlanets: () => {
				//obtiene todos los planetas por medio del result
				fetch("https://3000-magenta-termite-yz43ab7q.ws-us03.gitpod.io/planet")
					.then(res => res.json())
					.then(data => {
						console.table("Fetching Planets data: ", data);
						setStore({ planets: data });
					})
					.catch(err => console.error(err));
			},

			loadPlanetsbyID: id => {
				//obtener el planeta por ID @view
				fetch("https://magenta-termite-yz43ab7q.ws-us03.gitpod.io/planet" + id)
					.then(res => res.json())
					.then(data => {
						console.table("Fetching Planets data: ", data);
						setStore({ planets: data });
					})
					.catch(err => console.error(err));
			},

			loadCharactersbyID: id => {
				//obtener el personaje por ID @view
				fetch("https://magenta-termite-yz43ab7q.ws-us03.gitpod.io/people" + id)
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
