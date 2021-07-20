import React from 'react';

import SectionNav from './SectionNav';


const Header = ({ onSectionSelect }) => {

    return (
        <div className="header">
            <h2 className="name">Collin Sparks</h2>
            <SectionNav onSectionSelect={onSectionSelect} />
        </div>
    );
};

export default Header;