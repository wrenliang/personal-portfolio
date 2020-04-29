import React from 'react';
import { Button } from 'react-bootstrap';
import '@fullpage/react-fullpage';

// Dependant Components
import ProjectCard from './ProjectCard';
import TitleBlock from '../TitleBlock/TitleBlock';

// CSS
import './Projects.css';


class Projects extends React.Component {
    render() {
        return (
            <div className="section" id="Projects">
                <div className="slide">
                    <div className="Projects-leftWrapper">
                        <div className="Projects-cardRow">
                            <ProjectCard title={"Project Title"} description={"This is a test description. I wonder what happens if I keep on typing. This is hopefully really long. Let's keep going! Let me keep on going."} icons={["swift", "java", "react"]} />
                            <ProjectCard title={"keepfresh"} description={"UBC Launch Pad project for food management, using expiry tracking and recipe suggestions."} icons={["swift", "javascript", "node"]} />
                        </div>
                        <h1 className="Projects-highlights-label">Some highlights</h1>
                        <div className="Projects-cardRow">
                        <ProjectCard title={"Jarvis Robot"} description={"This is a test description. I wonder what happens if I keep on typing. This is hopefully really long. Let's keep going! Let me keep on going."} icons={["python", "swift", "raspberry-pi"]} />
                        <ProjectCard title={"Portfolio Website"} description={"My personal website you're looking at! Current iteration built using React"} icons={["javascript", "react", "css"]} />
                        </div>
                    </div>
                    <div className="Projects-rightWrapper">
                        <TitleBlock title={'Projects'} description={'This is the projects page'}></TitleBlock>
                        <div className="Projects-github-main">
                            <img className="Projects-octocat" alt="GitHub Icon" src={require('../../Assets/mountietocat.png')}></img>
                            <br />
                            <Button variant="outline-danger">View on GitHub</Button>
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <h1> slide 2 </h1>
                </div>
                <div className="slide">
                    <h1> slide 3 </h1>
                </div>
            </div>
        )
    }
}


export default Projects;