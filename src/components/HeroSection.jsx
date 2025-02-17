import React, { useEffect } from 'react'
import { useState } from 'react';
import './HeroSection.css'

function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "/hero-image/kitchen1-1.webp",
        "/hero-image/kitchen1-2.webp",
        "/hero-image/kitchen1-3.webp",
        "/hero-image/kitchen1-4.webp",
        "/hero-image/kitchen1-5.webp",
        "/hero-image/kitchen1-6.webp",
        "/hero-image/kitchen2-1.webp",
        "/hero-image/kitchen2-2.webp",
        "/hero-image/kitchen2-3.webp",
        "/hero-image/kitchen2-4.webp",
        "/hero-image/kitchen2-5.webp",
        "/hero-image/kitchen2-6.webp",
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
                <p>The joy and excitement of creating custom furniture is what drives us. A home is not only filled with furniture, but also with lifestyle and memories. Bertungku envisions a thoughtful living space with the hope that precious and valuable families will create a lot of history together.</p>
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