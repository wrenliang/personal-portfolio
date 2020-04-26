import React from 'react';

// Dependant Components
import ProjectCard from './ProjectCard';
import TitleBlock from '../TitleBlock/TitleBlock';

// CSS
import './Projects.css';


class Projects extends React.Component {
    render() {
        return (
            <div className="section" id="Projects">
                <div className="Projects-leftWrapper">
                    <div className="Projects-cardRow">
                        <ProjectCard title={"Project Title"} description={"This is a test description. I wonder what happens if I keep on typing. This is hopefully really long. Let's keep going! Let me keep on going."} icons={["swift", "java", "react"]} />
                        <ProjectCard title={"keepfresh"} description={"UBC Launch Pad project for food management, using expiry tracking and recipe suggestions."} icons={["swift", "javascript", "node"]} />
                    </div>
                    <h1 className="Projects-highlightLabel">Some highlights</h1>
                    <div className="Projects-cardRow">
                    <ProjectCard title={"Voice Recognition Robot"} description={"Description"} icons={["python", "swift", "raspberry-pi"]} />
                    <ProjectCard title={"Portfolio Website"} description={"My personal website you're looking at! Current iteration built using ..."} icons={["javascript", "react", "css"]} />
                    </div>
                </div>
                <div className="Projects-rightWrapper">
                    <TitleBlock title={'Projects'} description={'This is the projects page'}></TitleBlock>
                </div>
                
                
            </div>
        )
    }
}


export default Projects;