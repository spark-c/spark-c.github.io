import React from 'react';


const ProjectCard = ({ project, alignment, isLargeScreen }) => {


    return (
        <div className={`card  ${alignment}`}>
            <div className="img-container">
                <img className="project-img" src={project["img-src"]} />
            </div>
            <div className="project-info">
                <div className="project-details">
                    <div className="project-title item-margin">
                        {project["title"]}
                    </div>
                    <div className="project-stack item-margin">
                        {project["stack"]}
                    </div>
                    <div className="project-desc item-margin">
                        {project["desc"]}
                    </div>
                </div>
                <div className="project-links">
                    {project["github-url"]?
                    <a
                        className="project-github"
                        href={project["github-url"]}>
                        GitHub
                    </a>:undefined}

                    {project["host-url"]?
                    <a
                        className="project-host"
                        href={project["host-url"]}>
                        {project["cta"]}
                    </a>:undefined}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;