BASEURL = "https://pokeapi.co/api/v2/pokemon/";

function getPokemonlist() {
  let PokemonList = [];
  fetch(BASEURL + "?limit=1010").then((Response) => {
    if (Response.status == 200) {
      PokemonList = Response.json().then((json) => {
        json.results.map((pokemon) => {
          console.log(pokemon.name);
        });
        return json;
      });
      return PokemonList;
    }
  });
}
function showPokemonlist() {
  let listaPokemons = [];
  fetch(BASEURL + "?limit=1010").then((Response) => {
    if (Response.status == 200) {
      listaPokemons = Response.json().then((json) => {
        json.results.map((pokemon) => {
          let liPokemon = document.createElement("li");
          let liPokemonImg = document.createElement("img");
          fetch(pokemon.url).then((Response) => {
            pokemonImg = Response.json().then((pokemon) => {
              liPokemonImg.src = pokemon.sprites.other["official-artwork"].front_default;
            });
          });
          liPokemon.innerHTML = pokemon.name;
          liPokemon.appendChild(liPokemonImg);
          document.getElementById("PokemonList").appendChild(liPokemon);
        });
        return json;
      });
      return listaPokemons;
    }
  });
}

function getpokemonbyId() {
  let PokeId = document.getElementById("getPokeId").value;
  fetch(BASEURL + PokeId).then((Response) => {
    if (Response.status == 200) {
      PokebyId = Response.json().then((pokemon) => {
          let PokemonName = document.getElementsByClassName("name-pokemon")[0];
          let PokemonImg = document.getElementsByClassName("img-pokemon")[0];
          PokemonName.classList.add("PokebyId")
        //   fetch(pokemon.url).then((Response) => {
        //     pokemonImg = Response.json().then((pokemon) => {
        //       PokemonImg.src = pokemon.sprites.front_default;
        //     });
        //   });
        PokemonImg.src = pokemon.sprites.other["official-artwork"].front_default;
        PokemonName.innerHTML = pokemon.name;
      });
    }
  });
}
