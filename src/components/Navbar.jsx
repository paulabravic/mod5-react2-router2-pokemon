import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className='d-flex justify-content-between p-3'>
            <span>Poked Web</span>
            <div className='d-flex gap-3'>
                <NavLink className={({isActive})=>isActive ? "active"  :""} to={"/"}>Home</NavLink>
                <NavLink to={"/pokemones"}>Pokemones</NavLink>
            </div>
        </nav>
    )
}
