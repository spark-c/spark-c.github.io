import React, { useState } from 'react';

import about_content from './about_content.js';
import grievous from '../images/grievous.png';


const About = () => {
    const [showImg, setShowImg] = useState(false);

    return (
        <div className="section about">
            <h1 className="section-title"
            onMouseEnter={() => setShowImg(true)}
            onMouseLeave={() => setShowImg(false)}
            onClick={() => setShowImg(!showImg)}>
                [ Hello there! ]
            </h1>
            {
                showImg?
                <img
                    className="grievous"
                    src={grievous}
                    alt="Star Wars' General Grievous saying 'General Kenobi!'"
                />:
                undefined
            }
            {about_content}
        </div>
    );
};

export default About;