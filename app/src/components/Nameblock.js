import React from 'react';

import SectionNav from './SectionNav';


const Nameblock = ({ selected, onSectionSelect }) => {

    return (
        <h1>
            <div className="nameblock">
                    <div className='firstname'>Collin</div>
                    <div className="lastname">Sparks</div>
                    <SectionNav selected={selected} onSectionSelect={onSectionSelect} drawBraces={true} />
                    {/* drawBraces=true forces the '~'s to be used in buttons that are children of Nameblock. */}
            </div>
        </h1>
    );
};

export default Nameblock;