import { useState, useEffect } from 'react';

const usePokemon = (urls) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pokemonData = [
    {
      name: 'Bulbasaur',
      sprite: '/src/assets/images/bulbasaur.png',
      height: 7,
      weight: 69,
      id: 1,
      health: 45,
      attack: 49,
      defense: 49,
      abilities: [{ ability: { name: 'overgrow' } }],
      number: '#001',
    },
    {
      name: 'Squirtle',
      sprite: '/src/assets/images/squirtle.png',
      height: 5,
      weight: 90,
      id: 7,
      health: 44,
      attack: 48,
      defense: 65,
      abilities: [{ ability: { name: 'torrent' } }],
      number: '#007',
    },
  ];

  useEffect(() => {
    setPokemonList(pokemonData);
    setLoading(false);
  }, []);

  return { pokemonList, loading, error };
};

export default usePokemon;
