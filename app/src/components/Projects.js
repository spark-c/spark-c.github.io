import React, { useState } from 'react';

import ProjectCard from './ProjectCard';
import ProjectWriteup from './ProjectWriteup';
import OssEntry from './OssEntry';
import {projects, oss} from './project_config';


const Projects = ({ isLargeScreen }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [selectedProject, setSelectedProject] = useState(undefined);


    const handleSelection = (boolean, project_label) => {
        setShowDetails(boolean);
        setSelectedProject(project_label)
    };

    const projectsToShow = [
        projects["SparksieBOT"],
        projects["web-contact-converter"],
        projects["coffee-calculator"],
    ];

    const ossToShow = [
        oss["gh_changelog"],
        oss["hubspot"],
        oss["chipy"],
    ];

    const renderedProjects = showDetails?
            <ProjectWriteup
                project={projects[selectedProject]}
                showDetails={handleSelection} />:
            <div>
                <h2>Projects</h2>
                {projectsToShow.map(project => {
                    return (
                        <ProjectCard
                            project={project}
                            showDetails={handleSelection}
                            isLargeScreen={isLargeScreen}
                            key={project["title"]}/>
                    );
                })}
            </div>

    const renderedOSS = showDetails?
            undefined:
            <div>
                <h2>OSS Contributions</h2>
                    {ossToShow.map(project => {
                        return (
                            <OssEntry project={project} />
                        );
                    })}
                </div>;


    return (
        <div className="section projects">
            <h1 className="section-title">[ Here's some of my work! ]</h1>

            {renderedProjects} {/* either all items, or one writeup */}
            {renderedOSS}       {/* depending on value of showDetails */}
            
        </div>
    );
};

export default Projects;