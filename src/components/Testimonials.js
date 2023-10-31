import React from 'react';
import '../styles/style.css'
import foto1 from '../images/food1.jpg'

const Testimonials = () => {
    return (
        <article className="testimonials-article">
            <h1>Testimonials</h1>

            <div className="testimonials-cards">
                <div className="testimonial-card">
                    <div className="stars">★★★★★</div>
                    <div className="profile-picture">
                        <img src={foto1} alt="Profile Picture 1" />
                    </div>
                    <div className="person-name">John Doe</div>
                    <div className="testimonial">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</div>
                </div>

                <div className="testimonial-card">
                    <div className="stars">★★★★★</div>
                    <div className="profile-picture">
                        <img src={foto1} alt="Profile Picture 2" />
                    </div>
                    <div className="person-name">Jane Smith</div>
                    <div className="testimonial">"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</div>
                </div>

                <div className="testimonial-card">
                    <div className="stars">★★★★★</div>
                    <div className="profile-picture">
                        <img src={foto1} alt="Profile Picture 3" />
                    </div>
                    <div className="person-name">Alice Johnson</div>
                    <div className="testimonial">"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."</div>
                </div>

                <div className="testimonial-card">
                    <div className="stars">★★★★★</div>
                    <div className="profile-picture">
                        <img src={foto1} alt="Profile Picture 4" />
                    </div>
                    <div className="person-name">Robert Williams</div>
                    <div className="testimonial">"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
                </div>
            </div>
        </article>
    );
}

export default Testimonials;
