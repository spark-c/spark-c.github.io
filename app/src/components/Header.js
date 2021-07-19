import React from 'react';

import SectionButton from './SectionButton';


const Header = ({ children }) => {

    return (
        <div className="header">
            <h2 className="name">Collin Sparks</h2>
            <div className="section-buttons">
                {children}
            </div>
        </div>
    );
};

export default Header;