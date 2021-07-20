import React from 'react';


const SectionButton = ({ label, selected, onSectionSelect }) => {

    const handleButton = (e) => {
        e.preventDefault();
        onSectionSelect(label);
    };

    return (
        <button className="section-button" onClick={handleButton} >
            <label>{`~ ${label} ~`}</label><br/>
            {label == selected? "A":""}
        </button>
    );
};

export default SectionButton;