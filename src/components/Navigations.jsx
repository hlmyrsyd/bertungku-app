import React from 'react';
import './Navigations.css'

function Navigation() {
    return (
        <nav className='navigation'>
            <div className='logo'>
                <img src="/bertungku-logo.png" alt="bertungku logo" />
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
            </ul>
            <div className="book-now">
                <a href="#book-now" className="btn">Book Now</a>
            </div>
        </nav>
    );
}

export default Navigation;