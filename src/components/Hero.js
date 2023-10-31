import React from 'react';
import '../styles/style.css'
import Dish1 from '../images/food1.jpg'

const Hero = () => {
    return (
        <section className='hero-section'>  
            <div>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant
                , focused on traditional recipes served with a modern twist.
                </p>
                <button>Reserve a Table</button>
            </div>
            <img src={Dish1} alt="Dish1"/>
        </section>
    );
}

export default Hero;
