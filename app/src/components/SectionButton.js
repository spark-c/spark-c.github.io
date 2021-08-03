import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const SectionButton = ({
    label,
    selected,
    onSectionSelect,
    drawBraces,
    drawSelector,
    isLargeScreen
}) => {

    const [color, setColor] = useState("");
    const updateColor = () => {
        setColor(`c${Math.floor(Math.random()*6).toString()}`);
    };

    const handleButton = (e) => {
        e.preventDefault();
        onSectionSelect(label);
    };

    const renderedLabel = isLargeScreen || drawBraces? `~ ${label} ~`:label;

    return (
        <div className="section-button-container">
            <button className="section-button" onClick={handleButton} >
                <label
                    className={color}
                    onMouseEnter={updateColor}
                    onMouseLeave={() => setColor("")}>
                    {renderedLabel}
                </label><br/>
            </button>
            <div className="selected-marker">
                {label == selected && drawSelector? "^":""}
            </div>
        </div>
    );
};

export default SectionButton;