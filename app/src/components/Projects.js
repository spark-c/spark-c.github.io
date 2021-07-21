import React from 'react';

import ProjectCard from './ProjectCard';


const Projects = () => {

    const projects = {
        'baby-bot': {
            "title": "baby-bot",
            "host-url": undefined,
            "github-url": "https://github.com/spark-c/baby-bot",
            "img-src": undefined,
            "desc": "description"
        },
        "web-contact-converter": {
            "title": "web-contact-converter",
            "host-url": "web-contact-converter.herokuapp.com",
            "github-url": "https://github.com/spark-c/web-contact-converter",
            "img-src": undefined,
            "desc": "description"
        },
        "coffee-calculator": {
            "title": "coffee-calculator",
            "host-url": undefined,
            "github-url": "https://github.com/spark-c/coffee-calculator",
            "img-src": undefined,
            "desc": "description"
        }
    }

    return (
        <div className="projects">
            <ProjectCard project={projects["baby-bot"]} alignment="left" />
            <ProjectCard project={projects["web-contact-converter"]} alignment="right" />
            <ProjectCard project={projects["coffee-calculator"]} alignment="left" />
        </div>
    );
};

export default Projects;