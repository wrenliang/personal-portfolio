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

//Images
import PortfolioImage from '../../Assets/projects-personal-website.png';
import SproutsImage from '../../Assets/projects-sprouts.png';
import KeepfreshImage from '../../Assets/projects-keepfresh.png';

class Projects extends React.Component {
    render() {
        const githubIcon = global_mapIcon("github");

        const keepfreshCard = {
            title: 'keepfresh',
            description: 'Full-stack iOS app for cooking sustainably, developed at UBC Launch Pad',
            icons: ["swift", "javascript", "node"],
            hoverColor: "#206030",
            noHoverColor: "#50C878"
        }

        const jarvisCard = {
            title: 'Jarvis Robot',
            description: 'Autonomous line following robot that supports voice control and manual gyroscope driving mode',
            icons: ["swift", "python", "raspberry-pi"],
            hoverColor: "#AB8027",
            noHoverColor: "#FFE856"
        }

        const portfolioCard = {
            title: 'Personal Website',
            description: 'Online portfolio site for projects and experiences',
            icons: ["react", "javascript", "css"],
            hoverColor: "#9B3A38",
            noHoverColor: "#E17875"
        }

        const sproutsCard = {
            title: 'Sprouts',
            description: 'Plant care reminders app for iOS, built at nwHacks 2020',
            icons: ["swift", "javascript", "node"],
            hoverColor: "#254B81",
            noHoverColor: "#4A8CC8"
        }

        const portfolioSlide = {
            title: "Personal Website",
            descriptionShort: "Online portfolio site for projects and experiences",
            descriptionLong: "//FILLER TEXT STILL HAVE NOT WRITTEN OUT YET",
            icons: ["react", "javascript", "css"],
            github: "http://www.github.com",
            bgColor: "#9B3A38",
            bgImage: PortfolioImage
        }

        const sproutsSlide = {
            title: "Sprouts",
            descriptionShort: "Plant care reminders app for iOS, built at nwHacks 2020",
            descriptionLong: "//FILLER TEXT STILL HAVE NOT WRITTEN OUT YET",
            icons: ["swift", "javascript", "node"],
            github: "http://www.github.com",
            bgColor: "#4A8CC8",
            bgImage: SproutsImage
        }

        const keepfreshSlide = {
            title: "keepfresh",
            descriptionShort: "Full-stack iOS app to make cooking sustainably easy",
            descriptionLong: "//FILLER TEXT STILL HAVE NOT WRITTEN OUT YET",
            icons: ["swift", "javascript", "node"],
            github: "http://www.github.com",
            bgColor: "#50C878",
            bgImage: KeepfreshImage
        }

        const jarvisSlide = {
            title: "Jarvis Robot",
            descriptionShort: "Basically Iron Man lol",
            descriptionLong: "//FILLER TEXT STILL HAVE NOT WRITTEN OUT YET",
            icons: ["swift", "python", "raspberry-pi"],
            github: "http://www.github.com",
            bgColor: "#AB8027",
            bgImage: ""
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
                        <TitleBlock title={'Projects'} description={"Here's what I've been working on."}></TitleBlock>
                        <div className="Projects-github-main">
                            <img className="Projects-octocat" alt="GitHub Icon" src={require('../../Assets/mountietocat.png')}></img>
                            <br />
                            <Button variant="danger" size="lg">
                                <FontAwesomeIcon icon={githubIcon.img} size="1x"/> View on GitHub
                            </Button>
                        </div>
                    </div>
                </div>
                <ProjectSlide {... portfolioSlide}></ProjectSlide>
                <ProjectSlide {... sproutsSlide}></ProjectSlide>
                <ProjectSlide {... keepfreshSlide}></ProjectSlide>
                <ProjectSlide {... jarvisSlide}></ProjectSlide>
            </div>
        )
    }
}


export default Projects;