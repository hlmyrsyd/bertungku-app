import React from 'react';
import './AboutUs.css'

function AboutUs() {
    return (
        <div id='about' className="about-us">
            <div className='about-us-header'>
                <h1>About Us</h1>
                <p> Transforming your living space is more than just a project—it's a journey towards creating a home that reflects your unique style and personality. At Bertungku, we understand the importance of craftsmanship and attention to detail. With a background rooted in woodworking, our founder's journey from humble beginnings to mastering the art of interior design has been marked by dedication, perseverance, and a commitment to excellence. Let us bring your vision to life and craft spaces that inspire, uplift, and truly embody the essence of home. </p>
            </div>
            <div className='about-us-section'>
                <div className="left-section">
                    <h2>Hilmy Rasyad</h2>
                    <p>Founder</p>
                </div>
                <div className="right-section">
                    <blockquote>
                    Crafting spaces that blend beauty and function is my forte. Let's turn your vision into a stunning reality.
                    </blockquote>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
