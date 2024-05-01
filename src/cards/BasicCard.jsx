import React from 'react';
import './BasicCard.css'

function BasicCard({ title, location, imageUrl }) {
    return (
        <div className="basic-card">
            <img src={imageUrl} alt={title} />
            <div className="content">
                <h2>{title}</h2>
                <p>{location}</p>
            </div>
        </div>
    );
}

export default BasicCard;
