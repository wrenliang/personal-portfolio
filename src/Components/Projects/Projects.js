import React from 'react';
import { Button } from 'react-bootstrap';
import '@fullpage/react-fullpage';

// Dependant Components
import ProjectCard from './ProjectCard';
import TitleBlock from '../TitleBlock/TitleBlock';
import ProjectSlide from './ProjectSlide';

// CSS
import './Projects.css';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import global_mapIcon from './MapIcon';

class Projects extends React.Component {
    render() {
        const githubIcon = global_mapIcon("github");

        const keepfreshCard = {
            title: 'keepfresh',
            description: 'Full-stack iOS app for cooking sustainably, developed at UBC Launch Pad',
            icons: ["swift", "javascript", "node"]
        }

        const jarvisCard = {
            title: 'Jarvis Robot',
            description: 'Autonomous line following robot that supports voice control and manual gyroscope driving mode',
            icons: ["swift", "python", "raspberry-pi"]
        }

        const portfolioCard = {
            title: 'Personal Website',
            description: 'Online portfolio for showcasing projects and experiences',
            icons: ["react", "javascript", "css"]
        }

        const sproutsCard = {
            title: 'Sprouts',
            description: 'Plant-care reminders app built at nwHacks 2020',
            icons: ["swift", "javascript", "node"]
        }

        const testSlide = {
            title: "Personal Website",
            descriptionShort: "Online portfolio built using React, Bootstrap, and CSS",
            descriptionLong: "//FILLER TEXT STILL HAVE NOT WRITTEN OUT YET",
            icons: ["react", "javascript", "css"],
            github: "http://www.github.com",
            bgColor: "#088FDD",
            imageURL: "LOCAL LINK TO IMAGE"
        }

        const testSlide2 = {
            title: "Jarvis Robot",
            descriptionShort: "Basically Iron Man lol",
            descriptionLong: "//FILLER TEXT STILL HAVE NOT WRITTEN OUT YET",
            icons: ["swift", "python", "raspberry-pi"],
            github: "http://www.github.com",
            bgColor: "#FF3F47",
            imageURL: "LOCAL LINK TO IMAGE"
        }

        return (
            <div className="section" id="Projects">
                <div className="slide">
                    <div className="Projects-leftWrapper">
                        <div className="Projects-cardRow">
                            <ProjectCard {... keepfreshCard} />
                            <ProjectCard {... jarvisCard} />
                        </div>
                        <h1 className="Projects-highlights-label">Some highlights</h1>
                        <div className="Projects-cardRow">
                            <ProjectCard {... portfolioCard} />
                            <ProjectCard {... sproutsCard} />
                        </div>
                    </div>
                    <div className="Projects-rightWrapper">
                        <TitleBlock title={'Projects'} description={'This is the projects page'}></TitleBlock>
                        <div className="Projects-github-main">
                            <img className="Projects-octocat" alt="GitHub Icon" src={require('../../Assets/mountietocat.png')}></img>
                            <br />
                            <Button variant="outline-danger" size="lg">
                                <FontAwesomeIcon icon={githubIcon.img} size="1x"/> View on GitHub
                            </Button>
                        </div>
                    </div>
                </div>
                <ProjectSlide {... testSlide}></ProjectSlide>
                <ProjectSlide {... testSlide2}></ProjectSlide>
            </div>
        )
    }
}


export default Projects;