import React from 'react';

import ProjectCard from './ProjectCard';


const Projects = ({ isLargeScreen }) => {

    const projects = {
        'baby-bot': {
            "title": "baby-bot",
            "host-url": undefined,
            "github-url": "https://github.com/spark-c/baby-bot",
            "img-src": "https://via.placeholder.com/50.png",
            "desc": "This is a longer description to test how things look when the descriptions start to get kinda long and require a lot of space to properly display on the screen.",
            "stack": "Python (discord.py, SQLAlchemy) | Postgres | Heroku",
        },
        "web-contact-converter": {
            "title": "web-contact-converter",
            "host-url": "http://web-contact-converter.herokuapp.com",
            "github-url": "https://github.com/spark-c/web-contact-converter",
            "img-src": "https://via.placeholder.com/50.png",
            "desc": "This is a longer description to test how things look when the descriptions start to get kinda long and require a lot of space to properly display on the screen.",
            "stack": "Python (Flask, SQLAlchemy) | JavaScript | Postgres | Heroku"
        },
        "coffee-calculator": {
            "title": "coffee-calculator",
            "host-url": undefined,
            "github-url": "https://github.com/spark-c/coffee-calculator",
            "img-src": "https://via.placeholder.com/50.png",
            "desc": "description",
            "stack": "JavaScript (React)"
        }
    }

    return (
        <div className="projects">
            <h1 className="section-title">_ These are projects! :) _</h1>
            <ProjectCard project={projects["baby-bot"]} alignment="left" isLargeScreen={isLargeScreen}/>
            <ProjectCard project={projects["web-contact-converter"]} alignment="right" isLargeScreen={isLargeScreen}/>
            <ProjectCard project={projects["coffee-calculator"]} alignment="left" isLargeScreen={isLargeScreen}/>
        </div>
    );
};

export default Projects;