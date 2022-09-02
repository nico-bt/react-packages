import React from 'react'
import {NavLink} from "react-router-dom"

function Header() {
  return (
    <header>
      <h1>Practical React</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/icons">Icons</NavLink>
        <NavLink to="/toastify">Toastify</NavLink>
        <NavLink to="/modal">Modal</NavLink>
        <NavLink to="/tooltip">Tooltip</NavLink>
        <NavLink to="/count">Count</NavLink>
        <NavLink to="/video">Video Player</NavLink>
        <NavLink to="/spinner">Spinner</NavLink>
        <NavLink to="/charts">Charts</NavLink>
      </nav>
    </header>
  )
}

export default Header