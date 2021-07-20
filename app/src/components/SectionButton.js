import React from 'react';


const SectionButton = ({ label, selected, onSectionSelect }) => {

    const handleButton = (e) => {
        e.preventDefault();
        onSectionSelect(label);
    };

    return (
        <div className="section-button-container">
            <button className="section-button" onClick={handleButton} >
                <label>{`~ ${label} ~`}</label><br/>
            </button>
            <div className="selected-marker">
                {label == selected? "^":""}
            </div>
        </div>
    );
};

export default SectionButton;