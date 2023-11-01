import React from 'react';
import Logo from '../images/Logo.png';
import '../styles/style.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div>
                <img src={Logo} alt="Little Lemon Logo"/>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/contact">Order</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
