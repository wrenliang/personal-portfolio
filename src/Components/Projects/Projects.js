import React from 'react';

// Dependant Components
import ProjectCard from './ProjectCard';
import TitleBlock from './TitleBlock';

// CSS
import './Projects.css';


class Projects extends React.Component {
    render() {
        return (
            <div className="section" id="Projects">
                <div className="Projects-leftWrapper">
                    <div className="Projects-cardRow">
                        <ProjectCard></ProjectCard>
                        <ProjectCard></ProjectCard>
                    </div>
                    <h1 className="Projects-highlightLabel">Some highlights</h1>
                    <div className="Projects-cardRow">
                        <ProjectCard></ProjectCard>
                        <ProjectCard></ProjectCard>
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