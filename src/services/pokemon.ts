export const getPokemonInfo = async (name: string) => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
	const data = await res.json();
	return data;
};

export const getPokemonSpecies = async (name: string) => {
	const res = await fetch(
		`https://pokeapi.co/api/v2/pokemon-species/${name}`
	);
	const data = await res.json();
	return data;
};

export const getType = async (name: string) => {
	const types = [
		"Colorless",
		"Darkness",
		"Dragon",
		"Fairy",
		"Fighting",
		"Fire",
		"Grass",
		"Lightning",
		"Metal",
		"Psychic",
		"Water",
	];
	const res = await fetch(`https://pokeapi.co/api/v2/type/${name}`);
	const data = await res.json();
	return data;
};

export const getMove = async (name: string) => {
	const res = await fetch(`https://pokeapi.co/api/v2/move/${name}`);
	const data = await res.json();
	return data;
};

export const getItem = async (name: string) => {
	const res = await fetch(`https://pokeapi.co/api/v2/item/${name}`);
	const data = await res.json();
	return data;
};

export const getGeneration = async (genNumber: number) => {
	const romans = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
	const res = await fetch(
		`https://pokeapi.co/api/v2/generation/generation-${romans[genNumber]}`
	);
	const data = await res.json();
	return data;
};

export const getBerry = async (name: string) => {
	const res = await fetch(`https://pokeapi.co/api/v2/berry/${name}`);
	const data = await res.json();
	return data;
};

export const getPokemonCard = async (name: string) => {
	const res = await fetch(
		`https://api.pokemontcg.io/v2/cards?q=name:${name}`,
		{
			headers: {
				"X-Api-Key": "e516ea3d-d99f-4ff0-9cc7-252c4e74a762 ",
			},
		}
	);
	const data = await res.json();
	return data;
};
