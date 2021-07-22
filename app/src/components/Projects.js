import React from 'react';

import ProjectCard from './ProjectCard';


const Projects = ({ isLargeScreen }) => {

    const projects = {
        'baby-bot': {
            "title": "baby-bot",
            "host-url": undefined,
            "github-url": "https://github.com/spark-c/baby-bot",
            "img-src": "https://via.placeholder.com/50.png",
            "desc": "This is a longer description to test how things look when the descriptions start to get kinda long and require a lot of space to properly display on the screen."
        },
        "web-contact-converter": {
            "title": "web-contact-converter",
            "host-url": "web-contact-converter.herokuapp.com",
            "github-url": "https://github.com/spark-c/web-contact-converter",
            "img-src": "https://via.placeholder.com/50.png",
            "desc": "This is a longer description to test how things look when the descriptions start to get kinda long and require a lot of space to properly display on the screen."
        },
        "coffee-calculator": {
            "title": "coffee-calculator",
            "host-url": undefined,
            "github-url": "https://github.com/spark-c/coffee-calculator",
            "img-src": "https://via.placeholder.com/50.png",
            "desc": "description"
        }
    }

    return (
        <div className="projects">
            <ProjectCard project={projects["baby-bot"]} alignment="left" isLargeScreen={isLargeScreen}/>
            <ProjectCard project={projects["web-contact-converter"]} alignment="right" isLargeScreen={isLargeScreen}/>
            <ProjectCard project={projects["coffee-calculator"]} alignment="left" isLargeScreen={isLargeScreen}/>
        </div>
    );
};

export default Projects;