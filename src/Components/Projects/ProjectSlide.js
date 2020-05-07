import React from 'react';
import { Button } from 'react-bootstrap';

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
                <Button onClick={ () => {
                    if (button.link !== "") {
                        window.open(button.link, '_blank');
                    }
                }} variant="outline-dark" size="lg"> 
                <FontAwesomeIcon icon={icon.img} size="1x"/> 
                {` ${button.title}`}
                </Button>
            )
        });

        const descriptions = this.props.descriptionLong.sections.map( (section, index) => {
            const paragraphs = section.contents.map((content, index) => {
                return (
                    <p key={index}>{content}</p>
                );
            })
            return (
                <div key={index} className="ProjectSlide-description-sections">
                    <h4>{section.title}</h4>
                    {paragraphs}
                </div>
            );
        });


        return (
            <div className="slide" style={{backgroundColor: this.props.bgColor}}>
                <div className="ProjectSlide-leftWrapper">
                    <TitleBlock title={this.props.title} titleSize={'72px'} description={this.props.descriptionShort} descriptionSize={'24px'}></TitleBlock>
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