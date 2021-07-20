import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const SectionButton = ({ label, selected, onSectionSelect, drawBraces }) => {

    const isLargeScreen = useMediaQuery('(min-width: 450px)');

    const handleButton = (e) => {
        e.preventDefault();
        onSectionSelect(label);
    };

    const renderedLabel = isLargeScreen || drawBraces? `~ ${label} ~`:label;

    return (
        <div className="section-button-container">
            <button className="section-button" onClick={handleButton} >
                <label>{renderedLabel}</label><br/>
            </button>
            <div className="selected-marker">
                {label == selected? "^":""}
            </div>
        </div>
    );
};

export default SectionButton;