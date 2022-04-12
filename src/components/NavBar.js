import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>
        <div className='logo'>
        <h1>Bone Idle</h1>
        </div>
    
        <div className='nav-links'>
            <ul>
                <li className="navLink">
                    <Link to="/"><button>Game</button></Link>
                </li>
                <li>
                    <Link to="/faq"><button>How To Play</button></Link>
                </li>
                <li className="navLink">
                    <Link to="/bestiary"><button>Bestiary</button></Link>
                </li>
                <li className="navLink">
                    <Link to="/forum">Forum</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default NavBar;