import React from 'react';

// Dependant Components

// CSS
import './ProjectCard.css'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwift, faJava, faPython, faCss3Alt, faHtml5, faJsSquare, faReact, faNode, faRaspberryPi} from '@fortawesome/free-brands-svg-icons';


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

    mapIcon = (name) => {
        var icon = {
            img: null,
            color: null
        };

        if (name === "swift") {
            icon.img = faSwift;
            icon.color = "#FF9900";
        } else if (name === "java") {
            icon.img = faJava;
            icon.color = "#D65645";
        } else if (name === "python") {
            icon.img = faPython;
            icon.color = "#2E4A69";
        } else if (name === "css") {
            icon.img = faCss3Alt;
            icon.color = "#4195D6"
        } else if (name === "html") {
            icon.img = faHtml5;
            icon.color = "#E06D3C";
        } else if (name === "javascript") {
            icon.img = faJsSquare;
            icon.color = "#F1DE4F";
        } else if (name === "react") {
            icon.img = faReact;
            icon.color = "#62D5FB";
        } else if (name === "node") {
            icon.img = faNode;
            icon.color = "#84AF35";
        } else if (name === "raspberry-pi") {
            icon.img = faRaspberryPi;
            icon.color = "#A72842";
        } 

        return icon;
    }
    

    render() {
        var arr = [];
        for (const name of this.props.icons) {
            arr.push(this.mapIcon(name));
        }

        if (this.state.isHovered) {
            const hoverStyle = {
                backgroundColor: "grey"
            }

            return (
                <div className="ProjectCard" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}
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
                backgroundColor: "crimson"
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