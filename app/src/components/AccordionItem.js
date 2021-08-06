import React from 'react';


const AccordionItem = ({ label, content, expanded, handleExpand }) => {

    return (
        <div className="accordion-item">
            <button className="label-wrapper" onClick={handleExpand} key="1">
                <label className="accordion-label">{label}</label>
            </button>

            {expanded === label?
            <div className="content-wrapper">
                <div className="accordion-content">
                    {content}
                </div>
            </div>:
            undefined}

        </div>
    );
};

export default AccordionItem;