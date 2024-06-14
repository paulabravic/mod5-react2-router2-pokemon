import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const URL = "https://pokeapi.co/api/v2/pokemon";

export const Pokemones = () => {

    const [pokemones, setPokemones] = useState([]);
    const [name, setName] = useState("");

    const navigate = useNavigate();

    const getData = async () => {
        try {
            const response = await fetch(URL);
            const { results } = await response.json();
            setPokemones(results);
            console.log(results);
        } catch (error) {
            console.error("No hay pokemones");
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <select value={name} onChange={(e) => {setName(e.target.value)} }>
                <option value="" disabled defaultValue>Selecciona tu Pokemon</option>
                {
                    pokemones.map(({ name }) => <option key={name} value={name}>{name}</option>)
                }
            </select>
            <button onClick={()=>navigate(`/pokemones/${name}`)} className='btn btn-primary m-3'>Ver Pokemon</button>
        </>
    );
}
