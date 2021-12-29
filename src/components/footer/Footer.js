import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer-container">
            <div className="Footer-info">
                <h1>Houdret</h1>
                <p>Based in Fontaine L'Evêque 6140 Belgique</p>
            </div>
            <div className="Footer-contact">
                <h3>Contact me : 0498/52.56.85 </h3>
                <p>And let's get down to work</p>
            </div>
            <div className="Footer-sns">
                <div className="design-by">
                    Design By Houdret
                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/jean-louis-houdret-88250255/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://twitter.com/jeanhoudret" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/jeanlouis.houdret.1/" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook facebook"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
