import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import SectionNav from './SectionNav';


const Nameblock = ({ selected, onSectionSelect }) => {

    const isLargeScreen = useMediaQuery('(max-width:450px)');

    return (
        <h1>
            <div className="nameblock">
                    <div className='firstname'>Collin</div>
                    <div className="lastname">Sparks</div>
                    <SectionNav
                        selected={selected}
                        onSectionSelect={onSectionSelect}
                        drawBraces={true}
                        isLargeScreen={isLargeScreen}
                    />
                    {/* drawBraces=true forces the '~'s to be used in buttons that are children of Nameblock. */}
            </div>
        </h1>
    );
};

export default Nameblock;