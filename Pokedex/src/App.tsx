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
    },
  ];

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const Next = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  const Previous = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <section>
      <div>

        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
      <div>

        {pokemonIndex > 0 && (
          <button onClick={Previous}>Précédent</button>
        )}

        {pokemonIndex < pokemonList.length - 1 && (
          <button onClick={Next}>Suivant</button>
        )}
      </div>
    </section>
  );
}

export default App;
