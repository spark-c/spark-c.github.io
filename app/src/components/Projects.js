import React, { useState } from 'react';

import ProjectCard from './ProjectCard';
import ProjectWriteup from './ProjectWriteup';
import projects from './project_config';


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

    const renderedComponents = (
        showDetails?
            <ProjectWriteup
                project={projects[selectedProject]}
                showDetails={handleSelection} />:
            projectsToShow.map(project => {
                return (
                    <ProjectCard
                        project={project}
                        showDetails={handleSelection}
                        isLargeScreen={isLargeScreen}/>
                );
            })
    );


    return (
        <div className=" section projects">
            <h1 className="section-title">[ Here's some of my work! ]</h1>
            {renderedComponents} {/* either all projects or one writeup */}
        </div>
    );
};

export default Projects;