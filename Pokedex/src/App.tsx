import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
      imgSrc:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/151.png",
    },
  ];

  function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);
  
    return (
      <div>
        <nav>
          {pokemonList.map((p, i) => (
            <button
              key={p.name}
              onClick={() => setPokemonIndex(i)} 
            >
              {p.name}
            </button>
          ))}
        </nav>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
    );
  }
  
  export default App;