const apiUrl = "https://pokeapi.co/api/v2/pokemon/";


const getPokemon = async (ID) => {
  const ApiEndPoint = `${apiUrl}${ID}`;
  try {
    const response = await fetch(ApiEndPoint, { methode: "GET" });
    return await response.json();
  } catch (error) {
    console.log(error);
    setPokemon(21);
  }
};
