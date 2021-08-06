import React, { useState } from 'react';

import AccordionItem from './AccordionItem';


const Accordion = ({ config }) => {
    const [expanded, setExpanded] = useState(null);

    const handleExpand = (e) => {
        console.log(e.target);
        setExpanded(e.target.innerText);
    };

    const renderedItems = config.map(item => {
        return (
            <AccordionItem
                label={item.label}
                content={item.content}
                expanded={expanded}
                handleExpand={handleExpand}
                key={item.label}/>
        );
    });

    return (
        <div className="accordion">
           {renderedItems}
        </div>
    );
};

export default Accordion;