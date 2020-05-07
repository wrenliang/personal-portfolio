import React from 'react';

// Dependant Components

// CSS
import './ProjectCard.css';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import global_mapIcon from './MapIcon';

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
        var arr = [];
        for (const name of this.props.icons) {
            arr.push(global_mapIcon(name));
        }

        if (this.state.isHovered) {
            const hoverStyle = {
                backgroundColor: this.props.hoverColor
            }

            return (
                <div className="ProjectCard" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}
                onClick={()=> {
                    window.fullpage_api.moveTo(3, this.props.slideNo);
                }}
                style={hoverStyle}>
                    <h1 className="ProjectCard-title">{this.props.title}</h1>
                    <p className="ProjectCard-description">{this.props.description}</p>
                    <div className="ProjectCard-icons">
                        <FontAwesomeIcon icon={arr[0].img} size="3x" color={arr[0].color}/>
                        <FontAwesomeIcon icon={arr[1].img} size="3x" color={arr[1].color}/>
                        <FontAwesomeIcon icon={arr[2].img} size="3x" color={arr[2].color}/>
                    </div>
                </div>
            );
        } else {
            const noHoverStyle = {
                backgroundImage: "none",
                backgroundColor: this.props.noHoverColor
            }
            return (
                <div className="ProjectCard" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}
                style={noHoverStyle}>
                    <h1 className="ProjectCard-title">{this.props.title}</h1>
                </div>
            );
        }
        
    }
}

export default ProjectCard;