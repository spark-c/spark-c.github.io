import * as React from 'react';
import WidgetBot from '@widgetbot/react-embed';

import wcc_img from '../images/wcc.png';
import sparksiebot_img from '../images/sparksiebot.png';
import coffee_img from '../images/coffee-calc.png';

import sparksiebot_writeup from './writeups/SparksieBOT.js';


export const projects = {
    'SparksieBOT': {
        "title": "SparksieBOT",
        "host-url": undefined,
        "github-url": "https://github.com/spark-c/SparksieBOT",
        "img-src": sparksiebot_img,
        "desc": (
            <div>
                <p>This bot is created and maintained to provide commands for utility and entertainment on my personal Discord server!</p>
                <p>The project goes varying periods of light maintainance, heavy development for additional functionality, and occasional upkeep work to refactor old code to meet my improving code-quality standards.</p>
                <p><span className="strike">You can click the "Live!" link to interact with SparksieBOT</span> Oops! SparksieBOT is currently ignoring commands sent from this page :(</p>
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
        "writeup": undefined,
    },
    "web-contact-converter": {
        "title": "web-contact-converter",
        "host-url": "http://web-contact-converter.herokuapp.com",
        "github-url": "https://github.com/spark-c/web-contact-converter",
        "img-src": wcc_img,
        "desc": (
            <div>
                <p>A local company had a frequent task of manually transferring sales leads/contact information from a plain-text document into a spreadsheet -- which took <span className="italic">hours</span> at a time. This app is used to enormously expedite the process!</p>
                <p>Note: The app is served from a Heroku "free" dyno, and unfortunately may take several seconds to load while it wakes up!</p>
            </div>
        ),
        "stack": "Python (Flask, SQLAlchemy) | JavaScript | Postgres | Heroku",
        "cta": "Live!",
        "embed": undefined,
        "writeup": undefined,
    },
    "coffee-calculator": {
        "title": "coffee-calculator",
        "host-url": undefined,
        "github-url": "https://github.com/spark-c/coffee-calculator",
        "img-src": coffee_img,
        "desc": (
            <div>
                <p>A small web app used for calculating the necessary variables of a pour-over coffee recipe.</p>
                <p>There are several modes to account for the various common combinations of given/desired values to calculate. Soon including a setting for making iced coffee! Based on V60 paramters.</p>
            </div>
        ),
        "stack": "JavaScript (React)",
        "cta": "Live!",
        "embed": undefined,
        "writeup": undefined,
    },
}

export const oss = {
    "hubspot": {
        "title": "hubspot-api-python",
        "description": 
            "HubSpot's Python wrapper for their product's Auth and CRM APIs. This PR located, fixed, and tested broken links to the HubSpot API documentation in one of their sample app’s README files.",
        "repo_url": "https://github.com/HubSpot/hubspot-api-python/",
        "pr_url": "https://github.com/HubSpot/hubspot-api-python/pull/53",
    },
    "chipy": {
        "title": "chipy.org",
        "description":
            "This is the Chicago Python user group (ChiPy) main Django website codebase. This PR updated the referral terms on group's job board page.",
        "repo_url": "https://github.com/chicagopython/chipy.org",
        "pr_url": "https://github.com/chicagopython/chipy.org/pull/397",
    },
    "gh_changelog" : {
        "title": "github-changelog-generator",
        "description":
            "This Ruby CLI tool automatically generates change-logs from tags, issues, labels and PRs on GitHub. This PR updated the project's help, docstrings, and documentation pages to accurately reflect whether each command's arguments were optional or required.",
        "repo_url": "https://github.com/github-changelog-generator/github-changelog-generator/",
        "pr_url": "https://github.com/github-changelog-generator/github-changelog-generator/pull/946",
    },
};