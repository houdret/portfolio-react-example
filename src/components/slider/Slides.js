import React from "react";
import './Slider.css';
import project1 from '../../media/project1.png';
import project2 from '../../media/project2.png';
import project3 from '../../media/project3.png';

const slidesInfo = [
    {
        src: project1,
        alt: "Project 1",
        desc: "Movies",
    },
    {
        src: project2,
        alt: "Project 2",
        desc: "Cliker",
    },
    {
        src: project3,
        alt: "Project 3",
        desc: "C.V.",
    },
    

]

const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
));

export default slides;