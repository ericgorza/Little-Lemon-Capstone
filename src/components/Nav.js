import React from 'react';
import Logo from '../images/Logo.png'
import '../styles/style.css'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div>
                <img src={Logo} alt="Little Lemon Logo"/>
            </div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Reservations</a></li>
                <li><a href="/contact">Order</a></li>
                <li><a href="/contact">Login</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
