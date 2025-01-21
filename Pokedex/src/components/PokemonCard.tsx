interface PokeProps {
    name: string;
    imgSrc?: string;
  }

function PokemonCard({ pokemon } : PokeProps) {
  return (
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
