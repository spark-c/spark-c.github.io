import React, { useState } from 'react';


const ProjectCard = ({ project, alignment, isLargeScreen }) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <div className={`card  ${alignment}`}>
            <div className="project-wrapper">
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
                            onClick={() => setExpanded(!expanded)}
                            href={project["host-url"]}
                            target="_blank">
                            {project["cta"]}
                        </a>:undefined}
                    </div>
                </div>
            </div>
            {project["embed"] && expanded? project["embed"]:undefined}
        </div>
    );
};

export default ProjectCard;