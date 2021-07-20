import React from 'react';

import SectionNav from './SectionNav';


const Nameblock = ({ onSectionSelect }) => {

    return (
        <h1>
            <div className="nameblock">
                    <div className='firstname'>Collin</div>
                    <div className="lastname">Sparks</div>
                    <SectionNav onSectionSelect={onSectionSelect} />
            </div>
        </h1>
    );
};

export default Nameblock;