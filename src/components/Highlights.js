import React from 'react';
import '../styles/style.css'
import food1 from '../images/food1.jpg'
import food2 from '../images/food2.jpg'
import food3 from '../images/food3.jpg'

const Highlights = () => {
    return (
        <article className="highlight-article">
            <div className="highlight-content">
                <h1>Specials</h1>
                <button>Online Menu</button>
            </div>
            <div className="card-container">
                <div className="card">
                    <img src={food1} alt="Imagem 1" />
                    <h2>Salmao Caprese</h2>
                    <p>Descrição do Card 1</p>
                    <h3>Order Delivery</h3>
                </div>
                <div className="card">
                    <img src={food2} alt="Imagem 2" />
                    <h2>Pao Blueberry</h2>
                    <p>Descrição do Card 2.</p>
                    <h3>Order Delivery</h3>
                </div>
                <div className="card">
                    <img src={food3} alt="Imagem 3" />
                    <h2>Chicken Espetto</h2>
                    <p>Descrição do Card 3.</p>
                    <h3>Order Delivery</h3>
                </div>
            </div>
        </article>
    );
}

export default Highlights;
