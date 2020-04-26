import React from 'react';

// Dependant Components

// CSS
import './ProjectCard.css'

class ProjectCard extends React.Component {
    constructor() {
        super();
        this.state = {isHovered: false};
    }

    toggleHover = () => {
        console.log('Toggle hover called');
        this.setState(
            (state) => (
                {isHovered: !state.isHovered}
            )
        )
    }
    

    render() {
        return (
            <div className="ProjectCard" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                <h1 className="ProjectCard-title">ProjectCard Title</h1>
                <p className="ProjectCard-description">ProjectCard Description</p>
            </div>
        );
    }
}

export default ProjectCard;