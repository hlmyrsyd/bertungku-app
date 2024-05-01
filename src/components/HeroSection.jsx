import React, { useEffect } from 'react'
import { useState } from 'react';
import './HeroSection.css'

function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "src/assets/hero-image/kitchen1-1.png",
        "src/assets/hero-image/kitchen1-2.png",
        "src/assets/hero-image/kitchen1-3.png",
        "src/assets/hero-image/kitchen1-4.png",
        "src/assets/hero-image/kitchen1-5.png",
        "src/assets/hero-image/kitchen1-6.png",
        "src/assets/hero-image/kitchen2-1.png",
        "src/assets/hero-image/kitchen2-2.png",
        "src/assets/hero-image/kitchen2-3.png",
        "src/assets/hero-image/kitchen2-4.png",
        "src/assets/hero-image/kitchen2-5.png",
        "src/assets/hero-image/kitchen2-6.png",
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
    
        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <section id='home' className="hero">
            <div className="hero-text">
                <h1>Welcome to Bertungku</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#portfolio" className="btn">Check Our Work</a>
            </div>
            <div className="hero-image">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt="Hero Image"
                        className={index === currentImageIndex ? 'fade-in' : 'fade-out'}
                    />
                ))};
            </div>
        </section>
    );
}

export default HeroSection;