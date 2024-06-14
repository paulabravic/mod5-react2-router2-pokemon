import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const URL = "https://pokeapi.co/api/v2/pokemon/";

export const Detalle = () => {
    const [pokemon, setPokemon] = useState({})
   const {name} = useParams();

   const getData = async () => {
    try {
        const response = await fetch(URL+name);
        const results = await response.json();
        setPokemon(results);
        console.log(results);
    } catch (error) {
        console.error("No hay pokemon");
    }
}

useEffect(() => {
    getData();
}, [name]);

  return (
    <>
    <p>{pokemon?.name}</p>

    <img src={pokemon?.sprites?.front_default} alt="" />
    </>
  )
}
