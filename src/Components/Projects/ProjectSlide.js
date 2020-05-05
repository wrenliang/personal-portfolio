import React from 'react';
import { Image, Button } from 'react-bootstrap';

// Dependant Components
import TitleBlock from '../TitleBlock/TitleBlock';

// CSS
import './ProjectSlide.css';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import global_mapIcon from './MapIcon';

class ProjectSlide extends React.Component {
    render() {
        var icons = []
        for (const name of this.props.icons) {
            icons.push(global_mapIcon(name));
        }
        const githubIcon = global_mapIcon("github");

        return (
            <div className="slide" style={{backgroundColor: this.props.bgColor}}>
                <div className="ProjectSlide-leftWrapper">
                    <TitleBlock title={this.props.title} description={this.props.descriptionShort}></TitleBlock>
                    <div className="ProjectSlide-left-spacer">
                    </div>
                    <div className="ProjectSlide-description-box">
                        <p className="ProjectSlide-extended-description"> {this.props.descriptionLong}
                        </p>
                        <div className="ProjectSlide-icon-list">
                            <div className="ProjectSlide-icon-list-left">
                                <FontAwesomeIcon icon={icons[0].img} size="4x"/>
                                <FontAwesomeIcon icon={icons[1].img} size="4x"/>
                                <FontAwesomeIcon icon={icons[2].img} size="4x"/>
                            </div>
                            <div className="ProjectSlide-icon-list-right">
                                <Button variant="outline-dark" size="lg"> 
                                <FontAwesomeIcon icon={githubIcon.img} size="1x"/> Source code
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ProjectSlide-rightWrapper">
                    <img className="ProjectSlide-main-img" alt="Main Slide Background" src={this.props.bgImage}></img>
                </div>
            </div>
        );
    }
}


export default ProjectSlide;

/**
 * props
 * bg-color: (hex)
 * title:
 * description:
 * image: (url)
 * style-version: (left or right) -> can be like bootstrap, have different classes
 */