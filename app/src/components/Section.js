import React from 'react';

import Socials from './Socials';


const Section = ({ children }) => {

    const isContact = children.type.name === "Contact"? true:false;

    return (
        <div className="section-container">
            {children}
            {isContact? undefined:<Socials />}
        </div>
    );
};

export default Section;