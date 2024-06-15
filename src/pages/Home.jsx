import React from 'react'
import pikachuImage from '../assets/img/pikachu.png';

export const Home = () => {
  return (
    <div className='home-page m-3'>
        <h1>Bienvenido maestro pokemón</h1>
        <img src={pikachuImage} className='img-pikachu' alt="Pikachu" />
    </div>
  )
}
