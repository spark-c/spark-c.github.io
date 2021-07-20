import React from 'react';

import SectionButton from './SectionButton';


const SectionNav = ({ onSectionSelect }) => {

    return (
        <div className="section-buttons">
            <SectionButton onSectionSelect={onSectionSelect} label="Projects" target="Projects" />
            <SectionButton onSectionSelect={onSectionSelect} label="About" target="About" />
            <SectionButton onSectionSelect={onSectionSelect} label="Contact" target="Contact" />
        </div>
    );
};

export default SectionNav;