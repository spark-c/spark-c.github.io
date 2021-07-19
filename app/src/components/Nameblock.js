import React from 'react';

import SectionButton from './SectionButton';


const Nameblock = ({ children }) => {

    return (
        <h1>
            <div className="nameblock">
                    <div className='firstname'>Collin</div>
                    <div className="lastname">Sparks</div>
                    <div className="section-buttons">
                        {children}
                    </div>
            </div>
        </h1>
    );
};

export default Nameblock;