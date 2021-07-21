import React from 'react';


const ProjectCard = ({ project, alignment }) => {

    return (
        <div className={`project-card ${alignment}`}>
            <img className="project-img" src={project["img-src"]}></img>
            <div className="project-details">
                <div className="project-title">{project["title"]}</div>
                <div className="project-desc">{project["desc"]}</div>
            </div>
        </div>
    );
};

export default ProjectCard;