import React, { useState } from 'react';

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
                    alt="Star Wars' General Grievous saying 'General Kenobi!"
                />:
                undefined
            }
            <div className="about-content">
                <p>
                    Hiya! I am having a great time working with Python and JavaScript and whatever other techs I come across end up needing to learn in order to do my thing.
                </p>
                
            </div>
        </div>
    );
};

export default About;