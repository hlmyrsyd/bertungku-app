import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className='upper-container'>
                <h1>Feel free to reach us. <br></br>We don't bite</h1>
                <div id='book-now' className='social'>
                    <div className='whatsapp'>
                        <h3>Whatsapp :</h3>
                        <a href="https://api.whatsapp.com/send?phone=6285159832665">+62851 5983 2665</a>
                    </div>
                    <div className='email'>
                        <h3>Email :</h3>
                        <a href="https://mailto:bertungku@gmail.com">bertungku@gmail.com</a>
                    </div>
                    <div className='instagram'>
                        <h3>Instagram :</h3>
                        <a href="https://instagram.com/bertungku">bertungku</a>
                    </div>
                </div>
            </div>
            <div className="under-container">
                <div className='logo'>
                    <img src="src\assets\bertungku-logo.png" alt="bertungku logo" />
                    <h4>Bertungku by Hilmy Rasyad</h4>
                </div>
                <p>&copy; 2024 Bertungku. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
