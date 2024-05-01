import React from 'react';
import BasicCard from '../cards/BasicCard';
import './Portfolio.css'

function Portfolio() {
    return (
        <div id='portfolio' className="portfolio">
            <h1>Our Latest Works</h1>
            <div className="card-container">
                <BasicCard
                title="Project 1"
                location="Jakarta"
                imageUrl="../src/assets/card-image/project1.png"
                />
                <BasicCard
                title="Project 2"
                location="Jakarta"
                imageUrl="../src/assets/card-image/project2.png"
                />
                <BasicCard
                title="Project 3"
                location="Jakarta"
                imageUrl="../src/assets/card-image/project3.png"
                />
            </div>
        </div>
    );
}

export default Portfolio;
