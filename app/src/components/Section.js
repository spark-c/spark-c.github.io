import React from 'react';


const Section = ({ children, label }) => {

    const titles = {
        "Projects": "This is Projects!",
        "About": "This is About!",
        "Contact": "This is Contact!"
    };

    return (
        <div className="section">
            <h1 className="section-title">_ {titles[label]} _</h1>
            {children}
        </div>
    );
};

export default Section;