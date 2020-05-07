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
import JarvisImage from '../../Assets/jarvis-robot.png';

class Projects extends React.Component {
    render() {
        const githubIcon = global_mapIcon("github");

        // Card Data Models
        const keepfreshCard = {
            title: 'keepfresh',
            description: 'Full-stack iOS app for cooking sustainably, developed at UBC Launch Pad',
            icons: ["swift", "node", "server"],
            hoverColor: "#206030",
            noHoverColor: "#50C878",
            slideNo: 1
        }

        const sproutsCard = {
            title: 'Sprouts',
            description: 'Plant care reminders app for iOS, built at nwHacks 2020',
            icons: ["swift", "javascript", "node"],
            hoverColor: "#254B81",
            noHoverColor: "#4A8CC8",
            slideNo: 2
        }

        const portfolioCard = {
            title: 'Personal Website',
            description: 'Online portfolio site for projects and experiences',
            icons: ["react", "bootstrap", "css"],
            hoverColor: "#9B3A38",
            noHoverColor: "#E17875",
            slideNo: 3
        }

        const jarvisCard = {
            title: 'Jarvis Robot',
            description: 'Autonomous line following robot that supports voice control and manual gyroscope driving mode',
            icons: ["swift", "python", "raspberry-pi"],
            hoverColor: "#AB8027",
            noHoverColor: "#FFE856",
            slideNo: 4
        }


        // Slide Data Models
        const keepfreshSlide = {
            title: "keepfresh",
            descriptionShort: "Full-stack iOS app to facilitate sustainable cooking",
            descriptionLong: {
                sections: [
                    {
                        title: "Background",
                        contents: ["keepfresh is an iOS app I built with my team at UBC Launch Pad, a student-run software engineering team devoted to building projects in a collaborative, professional environment. The goal was to create an app that allows users to track the food in their homes, see when items were expiring, and recommend recipes based on their inventory."]
                    }, {
                        title: "Technologies Used",
                        contents: [
                            "Design: Sketch, InVision, Figma",
                            "Front-end: Swift",
                            "Back-end: TypeScript, Node.js & Express.js, MongoDB Atlas, PostgreSQL"
                        ]
                    }
                ]
            },
            icons: ["swift", "node", "server"],
            buttons: [
                {
                    title: "GitHub Repo",
                    iconName: "github",
                    link: "https://github.com/ubclaunchpad/food-doods/tree/showcase"
                }
            ],
            bgColor: "#50C878",
            bgImage: KeepfreshImage
        }

        const sproutsSlide = {
            title: "Sprouts",
            descriptionShort: "Plant care reminders app for iOS, built at nwHacks 2020",
            descriptionLong: {
                sections: [
                    {
                        title: "Inspiration",
                        contents: ["Interaction with indoor plants can reduce various forms of stress, based on previous psychological and neurological studies. Additionally, many people face the common issue of either forgetting to water their plants, or not knowing how to care for them properly. By making a terrarium-like app, our goal at nwHacks 2020 was to create a fun way for users to learn how to take care of plants and relieve their stress levels."]
                    }, {
                        title: "Technologies Used",
                        contents: [
                            "Design: Sketch, InVision",
                            "Front-end: Swift",
                            "Back-end: JavaScript, Node.js & Express.js, MongoDB Atlas"
                        ]
                    }
                ]
            },
            icons: ["swift", "javascript", "node"],
            buttons: [
                {
                    title: "GitHub Repo",
                    iconName: "github",
                    link: "https://github.com/yan-alan/nwHacks2020-Sprouts"
                }, {
                    title: "Devpost",
                    iconName: "laptop-code",
                    link: "https://devpost.com/software/sprouts-7b83a1"
                }
            ],
            bgColor: "#4A8CC8",
            bgImage: SproutsImage
        }

        const portfolioSlide = {
            title: "Personal Website",
            descriptionShort: "Online portfolio for personal projects",
            descriptionLong: {
                sections: [
                    {
                        title: "Background",
                        contents: ["I created my website to display the projects I was working on and the skills I had gained. However, in addition to accompanying my resume, my online portfolio has also allowed me to practice developing and maintaining websites using modern web technologies. For example, in a recent update, I completely remade my old HTML/CSS/JS website into the current version using JavaScript ES6 and the React.js framework."]
                    },
                    {
                        title: "Technologies Used",
                        contents: ["JavaScript ES6, React.js, React-Bootstrap, fullPage.js, HTML/CSS"]
                    }
                ]
            },
            icons: ["react", "bootstrap", "css"],
            buttons: [
                {
                    title: "GitHub Repo",
                    iconName: "github",
                    link: "https://github.com/wrenliang/personal-portfolio"
                }
            ],
            bgColor: "#E26363",
            bgImage: PortfolioImage
        }

        const jarvisSlide = {
            title: "Jarvis Robot",
            descriptionShort: "",
            descriptionLong: {
                sections: [
                    {
                        title: "Features",
                        contents: [
                            "This robot started off life as an assignment in one of our CPEN project courses. However, our team was energized by what we were building, so we decided to add many additional features to our robot, taking inspiration from the Iron Man movies.",
                            "The accompanying iPad app we built includes a voice recognition assistant (hence the name Jarvis) that executes verbal commands. For example, in addition to the standard autonomous line following mode, you can activate a (very entertaining) manual drive mode using the iPad gyroscopes by simply saying “Jarvis, give me control.” While driving, the robot sends a live camera feed to the iPad to assist with navigation."
                        ]
                    },
                    {
                        title: "Technologies Used",
                        contents: ["Swift, Apple Speech Framework, Python, MQTT Network Protocol, Raspberry Pi, Soldering"]
                    }
                ]
            },
            icons: ["swift", "python", "raspberry-pi"],
            buttons: [
                {
                    title: "Private project",
                    iconName: "private",
                    link: ""
                }
            ],
            bgColor: "#F4C430",
            bgImage: JarvisImage
        }

        return (
            <div className="section" id="Projects">
                <div className="slide">
                    <div className="Projects-leftWrapper">
                        <div className="Projects-cardRow">
                            <ProjectCard {... keepfreshCard} />
                            <ProjectCard {... sproutsCard} />
                        </div>
                        <h1 className="Projects-highlights-label">Some highlights</h1>
                        <div className="Projects-cardRow">
                            <ProjectCard {... portfolioCard} />
                            <ProjectCard {... jarvisCard} />
                        </div>
                    </div>
                    <div className="Projects-rightWrapper">
                        <TitleBlock title={'Projects'} description={"Here's what I've been working on."}></TitleBlock>
                        <div className="Projects-github-main">
                            <img className="Projects-octocat" alt="GitHub Icon" src={require('../../Assets/mountietocat.png')}></img>
                            <br />

                            <Button onClick={ () => {
                                window.open('https://github.com/wrenliang', '_blank');
                            }} variant="danger" size="lg">
                                <FontAwesomeIcon icon={githubIcon.img} size="1x"/> View on GitHub
                            </Button>
                        </div>
                    </div>
                </div>
                <ProjectSlide {... keepfreshSlide}></ProjectSlide>
                <ProjectSlide {... sproutsSlide}></ProjectSlide>
                <ProjectSlide {... portfolioSlide}></ProjectSlide>
                <ProjectSlide {... jarvisSlide}></ProjectSlide>
            </div>
        )
    }
}


export default Projects;