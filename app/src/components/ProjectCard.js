import React, { useState } from 'react';


const ProjectCard = ({ project, showDetails, isLargeScreen }) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <div className="card">
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
                        {project["writeup"]?
                        <div
                            className="show-writeup pointer"
                            onClick={() => {
                                showDetails(true, project["title"])
                            }}>
                            Details
                        </div>:undefined}
                        {project["host-url"]?
                        <a
                            className="project-host pointer"
                            onClick={() => setExpanded(!expanded)}
                            href={project["host-url"]}
                            target="_blank">
                            {project["cta"]}
                        </a>:undefined}
                        {project["github-url"]?
                        <a
                            className="project-github"
                            href={project["github-url"]}>
                            GitHub
                        </a>:undefined}

                    </div>
                </div>
            </div>
            {project["embed"] && expanded? project["embed"]:undefined}
        </div>
    );
};

export default ProjectCard;