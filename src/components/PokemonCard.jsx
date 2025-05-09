// src/components/PokemonCard.jsx
import React from 'react';

// Import gambar lokal secara langsung
import bulbasaurImage from '../assets/images/bulbasaur.png';
import squirtleImage from '../assets/images/squirtle.png';

const PokemonCard = ({ pokemon }) => {
  // Memilih gambar berdasarkan nama Pokémon
  const image = pokemon.name === 'Bulbasaur' ? bulbasaurImage : squirtleImage;

  return (
    <div className="pokemon-card">
      <img
        src={image}
        alt={pokemon.name}
        className="pokemon-image"
      />
      <div className="pokemon-name">{pokemon.name}</div>
    </div>
  );
};

export default PokemonCard;
