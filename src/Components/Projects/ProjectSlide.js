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

        const buttons = this.props.buttons.map( (button) => {
            const icon = global_mapIcon(button.iconName);
            return (
                <Button variant="outline-dark" size="lg"> 
                <FontAwesomeIcon icon={icon.img} size="1x"/> 
                {` ${button.title}`}
                </Button>
            )
        });

        const descriptions = this.props.descriptionLong.sections.map( (section) => {
            return (
                <div className="ProjectSlide-description-section">
                    <h4>{section.title}</h4>
                    <p>{section.content}</p>
                </div>
            );
        });


        return (
            <div className="slide" style={{backgroundColor: this.props.bgColor}}>
                <div className="ProjectSlide-leftWrapper">
                    <TitleBlock title={this.props.title} description={this.props.descriptionShort}></TitleBlock>
                    <div className="ProjectSlide-left-spacer">
                    </div>
                    <div className="ProjectSlide-description-box">
                        <p className="ProjectSlide-extended-description"> {descriptions}
                        </p>
                        <div className="ProjectSlide-icon-list">
                            <div className="ProjectSlide-icon-list-left">
                                <FontAwesomeIcon icon={icons[0].img} color={icons[0].color} size="4x"/>
                                <FontAwesomeIcon icon={icons[1].img} color={icons[1].color} size="4x"/>
                                <FontAwesomeIcon icon={icons[2].img} color={icons[2].color} size="4x"/>
                            </div>
                            <div className="ProjectSlide-icon-list-right">
                                {buttons}
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