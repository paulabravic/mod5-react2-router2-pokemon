import React from 'react'
import { NavLink } from 'react-router-dom'
import pokeGps from '../assets/img/pokegps.png';

export const Navbar = () => {
    return (
        <nav className='d-flex justify-content-between p-3 nav-fondo'>
            <img src={pokeGps} className='img-gps' alt="Poked Web" />
            <div className='d-flex gap-3'>
                <NavLink className={({isActive})=>isActive ? "active" : "inactive"} to={"/"}>Home</NavLink>
                <NavLink className={({isActive})=>isActive ? "active" : "inactive"} to={"/pokemones"}>Pokemones</NavLink>
            </div>
        </nav>
    )
}
