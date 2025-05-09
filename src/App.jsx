import { useState } from 'react';
import PokemonCard from './components/PokemonCard';
import usePokemon from './hooks/usePokemon';
import './App.css';

function App() {
  const [pokemonUrls, setPokemonUrls] = useState([
    'https://pokeapi.co/api/v2/pokemon/1/',
    'https://pokeapi.co/api/v2/pokemon/7/',
  ]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const { pokemonList, loading, error } = usePokemon(pokemonUrls);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div className="App">
      <h1>Pokemon App</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Error loading Pokémon!</p>}

      <div className="pokemon-grid">
        {pokemonList &&
          pokemonList.map((pokemon) => (
            <div key={pokemon.name} onClick={() => handlePokemonClick(pokemon)}>
              <PokemonCard pokemon={pokemon} />
            </div>
          ))}
      </div>

      {selectedPokemon && (
        <div className="pokemon-detail">
          <h2>{selectedPokemon.name} {selectedPokemon.number}</h2>
          <img
            src={selectedPokemon.sprite}
            alt={selectedPokemon.name}
            className="pokemon-detail-image"
          />
          <p>Height: {selectedPokemon.height} decimeters</p>
          <p>Weight: {selectedPokemon.weight} hectograms</p>
          <h3>Abilities:</h3>
          <ul>
            {selectedPokemon.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
          <h3>Stats:</h3>
          <p>Health: {selectedPokemon.health}</p>
          <p>Attack: {selectedPokemon.attack}</p>
          <p>Defense: {selectedPokemon.defense}</p>
        </div>
      )}
    </div>
  );
}

export default App;
