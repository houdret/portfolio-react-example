import React from 'react';
import './Cover.css';
import converVideo from '../../media/converVideo.mp4';

const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={converVideo} autoPlay loop muted />
            <h1>Houdret Jean-louis</h1>
            <p>Developer | Designer | Content Creator</p>
        </div>
    )
}

export default Cover;
