import React from 'react';

import SectionNav from './SectionNav';


const Header = ({ selected, onSectionSelect, setDrawHeader }) => {

    return (
        <div className="header">
            <h2 className="name" onClick={() => setDrawHeader(false)}>Collin Sparks</h2>
            <SectionNav
                selected={selected}
                onSectionSelect={onSectionSelect}
                drawSelector={true} />
        </div>
    );
};

export default Header;