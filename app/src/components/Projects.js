import * as React from 'react';
import WidgetBot from '@widgetbot/react-embed';

import ProjectCard from './ProjectCard';
import wcc_img from '../images/wcc.png';
import sparksiebot_img from '../images/sparksiebot.png';


const Projects = ({ isLargeScreen }) => {

    const projects = {
        'baby-bot': {
            "title": "SparksieBOT",
            "host-url": true,
            "github-url": "https://github.com/spark-c/SparksieBOT",
            "img-src": sparksiebot_img,
            "desc": (
                <div>
                    <p>This bot is created and maintained to provide commands for utility and entertainment on my personal Discord server!</p>
                    <p>The project goes varying periods of light maintainance, heavy development for additional functionality, and occasional upkeep work to refactor old code to meet my improving code-quality standards.</p>
                    <p className="cta">Click the "Live!" link to say hi and interact with SparksieBot!</p>
                </div>
            ),
            "stack": "Python (discord.py, SQLAlchemy) | Postgres | Heroku",
            "cta": "Live!",
            "embed": (
                <WidgetBot
                    className="widgetbot"
                    server="742418152280948857" // sparksie test server
                    channel="871196944754696233" // sparksiebot-live-demo
                />
            ),
        },
        "web-contact-converter": {
            "title": "web-contact-converter",
            "host-url": "http://web-contact-converter.herokuapp.com",
            "github-url": "https://github.com/spark-c/web-contact-converter",
            "img-src": wcc_img,
            "desc": (
                <div>
                    <p>A local company had a frequent task of manually transferring sales leads/contact information from a plain-text document into a spreadsheet -- which took <span className="italic">hours</span> at a time. This app is used to enormously expedite the process!</p>
                    <p>Note: The app is served from a Heroku "free" dyno, and may take several seconds to load while it wakes up!</p>
                </div>
            ),
            "stack": "Python (Flask, SQLAlchemy) | JavaScript | Postgres | Heroku",
            "cta": "Live!",
            "embed": undefined,
        },
        "coffee-calculator": {
            "title": "coffee-calculator",
            "host-url": undefined,
            "github-url": "https://github.com/spark-c/coffee-calculator",
            "img-src": "https://via.placeholder.com/50.png",
            "desc": (
                <div>
                    <p>A small web app used for calculating the necessary variables of a pour-over coffee recipe.</p>
                    <p>There are several modes to account for the various common combinations of given/desired values to calculate. Soon including a setting for making iced coffee! Based on V60 paramters.</p>
                </div>
            ),
            "stack": "JavaScript (React)",
            "cta": "Live!",
            "embed": undefined,
        }
    }

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