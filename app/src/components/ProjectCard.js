import React from 'react';


const ProjectCard = ({ project, alignment, isLargeScreen }) => {



    return (
        <div className="project-card">
            <div className={`project-info ${alignment}`}>
                <img className="project-img" src={project["img-src"]}></img>
                <div className="project-details">
                    <div className="project-title">{project["title"]}</div>
                    <div className="project-desc">{project["desc"]}</div>
                </div>
            </div>
            <div className="project-links">
                <a className="project-github" href={project["github-url"]}>GitHub</a>
                {project["host-url"]?
                <a className="project-host" href={project["host-url"]}>Live!</a>:undefined}
            </div>
        </div>
    );
};

export default ProjectCard;