import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import SectionNav from './SectionNav';


const Nameblock = ({ selected, onSectionSelect }) => {

    const isLargeScreen = useMediaQuery('(min-width:515px)');

    return (
        <div className="nameblock">
            <div className="name-and-blurb">
                <h1 className='name-container'>
                    <div className="name firstname">Collin</div>
                    <div className="name lastname">Sparks</div>
                </h1>
                <div className="blurb">Software Engineer</div>
                <div className="stack">Python | JavaScript / React</div>
                {/* <div className="bordertext">This is test to test is test to test is test to test is test to test is test to test!</div> */}
            </div>
            <SectionNav
                selected={selected}
                onSectionSelect={onSectionSelect}
                drawBraces={true}
                drawSelector={isLargeScreen}
                isLargeScreen={isLargeScreen} />
            {/* drawBraces=true forces the '~'s to be used in buttons that are children of Nameblock. */}
        </div>
    );
};

export default Nameblock;