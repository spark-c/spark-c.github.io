import React, { useState } from 'react';


const OssEntry = ({ project }) => {
    const [color, setColor] = useState("");
    const updateColor = () => {
        setColor(`c${Math.floor(Math.random()*6).toString()}`);
    };

    return (
        <div className={`oss-entry ${color}`}
            onMouseEnter={updateColor}
            onMouseLeave={() => setColor("")}>
            <a
                href={project["repo_url"]}
                target="_blank"
                className="project-title link-hover">
                {project["title"]}
            </a>
            <p>
                {project["description"]}
            </p>
            <a
                className="pr link-hover"
                href={project["pr_url"]}
                target="_blank">
                    {"{ Go to PR }"}
            </a>
        </div>
    );
};

export default OssEntry;