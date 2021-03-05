const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			characters: [],
			favorites: []
		},
		actions: {
			login: (name, pass) => {
				//getting token jwt-validation
				fetch(`https://3000-coral-pelican-mixyy8yh.ws-us03.gitpod.io/signin`)
					.then(res => {
						if (res.ok) res.json();
						else if (res.status === 401) {
							console.table("Invalid credentials");
						} else if (res.status === 400) {
							console.table("Invalid email or password format");
						} else throw Error("Unknown error");
					})
					.then(data => {
						localStorage.setItem("jwt-token", data.token);
					})
					.catch(error => console.error("Uknown error around!", error));
            },
            signup: (name,gender,password,email) => {
                //const data = {name:name,gender:gender,password:password,email:email}
                fetch(`https://3000-coral-pelican-mixyy8yh.ws-us03.gitpod.io/register`,{
                    method = 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({name:name,gender:gender,password:password,email:email})
                })
                    .then(response =>response.json())
                    .then(data => {console.table("success", data);
                               setRedirect(true);
                    })
                    .catch(error => {console.table("Error", error)
                    });   
            },
			loadCharacters: () => {
				//obtiener personajes obteniendo el result
				fetch("https://3000-coral-pelican-mixyy8yh.ws-us03.gitpod.io/people")
					.then(res => res.json())
					.then(data => {
						console.table("Fetching Planet data:", data);
						setStore({ characters: data });
					})
					.catch(err => console.error(err));
			},
			loadPlanets: () => {
				//obtiene todos los planetas por medio del result
				fetch("https://3000-coral-pelican-mixyy8yh.ws-us03.gitpod.io/planet")
					.then(res => res.json())
					.then(data => {
						console.table("Fetching Planets data: ", data);
						setStore({ planets: data });
					})
					.catch(err => console.error(err));
			},
			loadPlanetsbyID: id => {
				//obtener el planeta por ID @view
				fetch("https://3000-coral-pelican-mixyy8yh.ws-us03.gitpod.io/planet" + id)
					.then(res => res.json())
					.then(data => {
						console.table("Fetching Planets data: ", data);
						setStore({ planets: data });
					})
					.catch(err => console.error(err));
			},
			loadCharactersbyID: id => {
				//obtener el personaje por ID @view
				fetch("https://3000-coral-pelican-mixyy8yh.ws-us03.gitpod.io/people" + id)
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
