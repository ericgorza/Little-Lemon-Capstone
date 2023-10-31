import React from 'react';
import '../styles/style.css'
import food1 from '../images/food1.jpg'
import food3 from '../images/food3.jpg'

const About = () => {
    return (
        <section className="about-section">
            <div className="about-left">
                <h1>About Us</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.</p>
            </div>
            <div className="about-right">
                <img src={food1} alt="Image 1" className="image-top" />
                <img src={food3} alt="Image 2" className="image-bottom" />
            </div>
        </section>
    );
}

export default About;
