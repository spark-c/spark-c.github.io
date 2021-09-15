import React from 'react';


const ProjectWriteup = ({ showDetails, project }) => {

    return (
        <div className="project-writeup">
            <button
                className="backbutton"
                onClick={() => showDetails(false, undefined)}>
                {"<< Back"}
            </button>
            <h1>{project["title"]}</h1>
            <p>{project["stack"]}</p>
            <hr/><br/>
            {project["writeup"]}
        </div>
    );
};

export default ProjectWriteup;