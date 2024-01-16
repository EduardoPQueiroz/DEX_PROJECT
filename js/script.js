BASEURL = "https://pokeapi.co/api/v2/pokemon/";

function getPokemonlist() {
  let PokemonList = [];
  fetch(BASEURL + "?limit=251").then((Response) => {
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
  fetch(BASEURL + "?limit=251").then((Response) => {
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

          const capitalizedPokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

          liPokemon.innerHTML = capitalizedPokemonName;
          liPokemon.classList.add("pokename");
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
        const capitalizedPokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        PokemonImg.src = pokemon.sprites.other["official-artwork"].front_default;
        PokemonName.innerHTML = capitalizedPokemonName;
      });
    }
  });
}

let lastPosition = 0;

document.addEventListener("scroll", function scrollHeader(){

  const nav = document.querySelector("nav")
  let actualPosition = window.scrollY

  if(actualPosition > lastPosition){
      nav.style.top = "-7em"
  }
  else{
      nav.style.top = "0"
  }

  lastPosition = actualPosition
})

function verifykey(event) {
  // Verifica se a tecla pressionada é Enter (código 13)
  if (event.keyCode === 13) {
    getpokemonbyId();
  }
}
