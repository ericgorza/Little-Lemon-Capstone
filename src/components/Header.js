import React from 'react';
import Logo from '../images/Logo.png'
import '../styles/style.css'

const Header = () => {
    return (
        <header className='Header'>
            <div>
                <img src={Logo} alt="Little Lemon Logo"/>
            </div>
        </header>
    );
}

export default Header;
