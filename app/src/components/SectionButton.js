import React from 'react';


const SectionButton = ({ label, onSectionSelect }) => {

    const handleButton = (e) => {
        e.preventDefault();
        onSectionSelect(label);
    };

    return (
        <button className="section-button" onClick={handleButton} >
            <label>{`~ ${label} ~`}</label>
        </button>
    );
};

export default SectionButton;