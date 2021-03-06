import * as React from 'react';
import WidgetBot from '@widgetbot/react-embed';

import wcc_img from '../images/wcc.png';
import sparksiebot_img from '../images/sparksiebot.png';
import coffee_img from '../images/coffee-calc.png';
import solitaire_img from '../images/solitaire.png'

import sparksiebot_writeup from './writeups/SparksieBOT.js';


export const projects = {
    'SparksieBOT': {
        "title": "SparksieBOT",
        "host-url": undefined,
        "github-url": "https://github.com/spark-c/SparksieBOT",
        "img-src": sparksiebot_img,
        "desc": (
            <div>
                <p>This bot is created and maintained to provide commands for utility and entertainment on my personal Discord server.</p>
                <p>I've recently added a <span className="underline">test suite</span>! I'm very excited to have this working, as it will greatly ease further development and extension of more complex features.</p>
                <p>The project goes varying periods of light maintainance, heavy development for additional functionality, and occasional upkeep work to refactor old code.</p>
            </div>
        ),
        "stack": "Python (discord.py, SQLAlchemy, pytest) | Postgres",
        "cta": "Live!",
        "embed": null,
        // "embed": (
        //     <WidgetBot
        //         className="widgetbot"
        //         server="742418152280948857" // sparksie test server
        //         channel="871196944754696233" // sparksiebot-live-demo
        //         height={600}
        //     />
        // ),
        "writeup": undefined,
        // "writeup": sparksiebot_writeup,
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
    "solitaire": {
        "title": "solitaire",
        "host-url": undefined,
        "github-url": "https://github.com/spark-c/solitaire",
        "img-src": solitaire_img,
        "desc": (
            <div>
                <p>A 3-Card Klondike Solitaire game played at the command line, written in 100% Python.</p>
                <p>I moved house from Illinois to Ohio at the end of November, and I didn't have internet access for about two weeks. I played a bunch of board/card games in that time -- including a bunch of Solitaire. I eventually got bored of the cards, so naturally... I'm writing my own Solitaire game!</p>
            </div>
        ),
        "stack": "Python",
        "cta": "Live!",
        "embed": undefined,
        "writeup": undefined,
    },
    "coffee-calculator": {
        "title": "coffee-calculator",
        "host-url": "https://coffee-calculator-nine.vercel.app",
        "github-url": "https://github.com/spark-c/coffee-calculator",
        "img-src": coffee_img,
        "desc": (
            <div>
                <p>A small web app used for calculating the necessary variables of a pour-over coffee recipe.</p>
                <p>There are several modes to account for the various common combinations of given/desired values to calculate. Soon including a setting for making iced coffee! Based on V60 paramters.</p>
            </div>
        ),
        "stack": "JavaScript (React) | Vercel",
        "cta": "Live!",
        "embed": undefined,
        "writeup": undefined,
    },
}

export const oss = {
    "chipy_modal": {
        "title": "chipy.org",
        "description":
            "Chicago Python user group (ChiPy) Django codebase. Updates how contact form success feedback is presented to the user; replaces old alert-msg behavior with a new modal instead. Pending final review.",
        "repo_url": "https://github.com/chicagopython/chipy.org",
        "pr_url": "https://github.com/chicagopython/chipy.org/pull/422",
    },
    "chipy_responsive": {
        "title": "chipy.org",
        "description":
            "ChiPy Django codebase. Fixes sponsor logo images not being correctly resized to fit the viewport; makes the logo images responsive for all screen sizes.",
        "repo_url": "https://github.com/chicagopython/chipy.org",
        "pr_url": "https://github.com/chicagopython/chipy.org/pull/430",
    },
    "hubspot": {
        "title": "hubspot-api-python",
        "description": 
            "HubSpot's Python wrapper for their product's Auth and CRM APIs. This PR located, fixed, and tested broken links to the HubSpot API documentation in one of their sample app???s README files.",
        "repo_url": "https://github.com/HubSpot/hubspot-api-python/",
        "pr_url": "https://github.com/HubSpot/hubspot-api-python/pull/53",
    },
    "gh_changelog" : {
        "title": "github-changelog-generator",
        "description":
            "This Ruby CLI tool automatically generates change-logs from tags, issues, labels and PRs on GitHub. This PR updated the project's help, docstrings, and documentation pages to accurately reflect whether each command's arguments were optional or required.",
        "repo_url": "https://github.com/github-changelog-generator/github-changelog-generator/",
        "pr_url": "https://github.com/github-changelog-generator/github-changelog-generator/pull/946",
    },
};