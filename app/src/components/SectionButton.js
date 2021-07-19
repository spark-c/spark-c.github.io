import React from 'react';


const SectionButton = ({ label, target }) => {

    const handleButton = (e) => {
        e.preventDefault();
        // console.log(`Clicked at ${label}!`)
    };

    return (
        <button className="section-button" onClick={handleButton}>
            <label>{`~ ${label} ~`}</label>
        </button>
    );
};

export default SectionButton;