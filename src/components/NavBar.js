import React from 'react';

const NavBar = (props) => {
  return (
    <header>
        <div className='logo'>
        <h1>Bone Idle</h1>
        </div>
    
        <div className='nav-links'>
            <ul>
                <li className="navLink">
                <a href="/">Game</a>
                </li>
                <li className="navLink">
                <a href="/bestiary">Bestiary</a>
                </li>
                <li className="navLink">
                    <a href="/forum">Forum</a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default NavBar;