import React from 'react';


const Section = ({ children, label }) => {

    const titles = {
        "Projects": "This is Projects!",
        "About": "This is About!",
        "Contact": "This is Contact!"
    };

    return (
        <div className="section">
            <div className="section-title">{titles[label]}</div>
            {children}
        </div>
    );
};

export default Section;