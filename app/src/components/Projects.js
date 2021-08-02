import React, { useState } from 'react';

import ProjectCard from './ProjectCard';
import projects from './project_config';


const Projects = ({ isLargeScreen }) => {


    return (
        <div className=" section projects">
            <h1 className="section-title">_ These are projects! :) _</h1>
            <ProjectCard project={projects["baby-bot"]} alignment="left" isLargeScreen={isLargeScreen}/>
            <ProjectCard project={projects["web-contact-converter"]} alignment="right" isLargeScreen={isLargeScreen}/>
            <ProjectCard project={projects["coffee-calculator"]} alignment="left" isLargeScreen={isLargeScreen}/>
        </div>
    );
};

export default Projects;