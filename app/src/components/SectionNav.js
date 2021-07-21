import React from 'react';

import SectionButton from './SectionButton';


const SectionNav = ({ selected, onSectionSelect, drawBraces, isLargeScreen }) => {

    return (
        <div className="section-nav">
            {drawBraces? <div className="instructions">Pick a section!</div>:undefined}
            <div className="section-buttons">
                <SectionButton selected={selected} onSectionSelect={onSectionSelect} drawBraces={drawBraces} label="Projects" target="Projects" />
                <SectionButton selected={selected} onSectionSelect={onSectionSelect} drawBraces={drawBraces} label="About" target="About" />
                <SectionButton selected={selected} onSectionSelect={onSectionSelect} drawBraces={drawBraces} label="Contact" target="Contact" />
            </div>
        </div>
    );
};

export default SectionNav;