import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Let me tell you something about me</h3>
                <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Iste odio quidem aut distinctio ad alias iure error ipsa odit in incidunt libero repudiandae, 
                    sequi soluta? Enim eveniet dolorem cumque sit! 
                </p>
            </div>
            <div className="about-img">
                <img src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg" alt="about" />
            </div>
        </div>
    )
}

export default About;
