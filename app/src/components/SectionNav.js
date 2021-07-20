import React from 'react';

import SectionButton from './SectionButton';


const SectionNav = ({ selected, onSectionSelect }) => {

    return (
        <div className="section-buttons">
            <SectionButton selected={selected} onSectionSelect={onSectionSelect} label="Projects" target="Projects" />
            <SectionButton selected={selected} onSectionSelect={onSectionSelect} label="About" target="About" />
            <SectionButton selected={selected} onSectionSelect={onSectionSelect} label="Contact" target="Contact" />
        </div>
    );
};

export default SectionNav;