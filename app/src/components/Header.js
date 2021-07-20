import React from 'react';

import SectionNav from './SectionNav';


const Header = ({ selected, onSectionSelect }) => {

    return (
        <div className="header">
            <h2 className="name">Collin Sparks</h2>
            <SectionNav selected={selected} onSectionSelect={onSectionSelect} />
        </div>
    );
};

export default Header;