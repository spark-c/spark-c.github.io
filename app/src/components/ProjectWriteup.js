import React from 'react';


const ProjectWriteup = ({ showDetails, project }) => {

    return (
        <div className="project-writeup">
            <button
                className="backbutton"
                onClick={() => showDetails(false, undefined)}>
                Back
            </button>
            {project["writeup"]}
        </div>
    );
};

export default ProjectWriteup;