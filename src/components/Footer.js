import React from 'react';
import Logo from '../images/Logo.png';
import '../styles/style.css'
import Spacer from './Spacer-footer';

const Footer = () => {
    return (
        <footer>
            <div className='spacer-footer'></div>
            <div className="footer-column">
                <img src={Logo} alt='little-lemon-logo' width={100} />
            </div>
            <div className="footer-column">
                <h2>Navigation</h2>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Reservations</a></li>
                    <li><a href="/">Online</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h2>Contact</h2>
                <ul>
                    <li><a href="/">Phone</a></li>
                    <li><a href="/">Email</a></li>
                    <li><a href="/">Address</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h2>Social Media</h2>
                <ul>
                    <li><a href="/">Instagram</a></li>
                    <li><a href="/">Linkdin</a></li>
                    <li><a href="/">Facebook</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
