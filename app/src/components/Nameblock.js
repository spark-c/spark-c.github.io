import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import SectionNav from './SectionNav';


const Nameblock = ({ selected, onSectionSelect }) => {

    const isLargeScreen = useMediaQuery('(max-width:450px)');

    return (
        <div className="nameblock">
                <h1 className='name-container'>
                    <div className="name firstname">Collin</div>
                    <div className="name lastname">Sparks</div>
                </h1>
                <SectionNav
                    selected={selected}
                    onSectionSelect={onSectionSelect}
                    drawBraces={true}
                    isLargeScreen={isLargeScreen}
                />
                {/* drawBraces=true forces the '~'s to be used in buttons that are children of Nameblock. */}
        </div>
    );
};

export default Nameblock;