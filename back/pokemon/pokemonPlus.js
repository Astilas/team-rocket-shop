// Ce fichier sert à récupérer les données des pokemons via l'api pokemon 
// Comme l'api pokemon donne les données des pokemons 20 par 20, on récupère les 100 premiers (5*20)
// On va donc recevoir 5 tableaux dans un tableau que l'on va rassembler avec concat pour ne former qu'un seul tableau
// On a aussi défini un délais pour ne pas surcharger l'api de requête trop rapide

const axios = require('axios');
const fs = require('fs');
const { promisify } = require('util');

const writeFilePromise = promisify(fs.writeFile);

const delay = duration => new Promise((resolve, reject) => {
  setTimeout(resolve, duration);
});

const getPokemonsAsync = async () => {

  try {
    const offsets = [0, 20, 40, 60, 80];
    const pageUrls = offsets.map(
      offset => `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
    );
    const pagePromises = pageUrls.map(
      url => axios.get(url).then(res => res.data.results)
    );
    const pageResults = await Promise.all(pagePromises);
    const pokemonsArray = [].concat(...pageResults);

    // const responseList = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    // const pokemonsArray = responseList.data.results;
    const pokemonPromises = pokemonsArray.map(
      (singlePokemon, index) => delay(3000)
        .then(() => axios.get(singlePokemon.url))
        .then(response => {
          console.log(`done ${index}/100`)
          return response.data;
        })
    );
    const pokemonDetailsArray = await Promise.all(pokemonPromises);
    const json = JSON.stringify(pokemonDetailsArray, null, 2);
    await writeFilePromise('pokemons.json', json);
    console.log('done');

  } catch(error) {
    console.log(error)
  }

};

getPokemonsAsync();