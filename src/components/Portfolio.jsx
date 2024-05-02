import React from 'react';
import BasicCard from '../cards/BasicCard';
import './Portfolio.css'

function Portfolio() {
    return (
        <div id='portfolio' className="portfolio">
            <h1>Our Latest Works</h1>
            <div className="card-container">
                <BasicCard
                title="Mr LY"
                location="Dago, Bandung"
                imageUrl="/card-image/project1.webp"
                />
                <BasicCard
                title="Mrs VV"
                location="KBP, Bandung"
                imageUrl="/card-image/project2.webp"
                />
                <BasicCard
                title="Mr TR"
                location="Summarecon,Bandung"
                imageUrl="/card-image/project3.webp"
                />
            </div>
        </div>
    );
}

export default Portfolio;
