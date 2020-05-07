import React from 'react';
import { Image, Button } from 'react-bootstrap';

import ProfilePic from '../../Assets/profile-pic-compressed.png';

// Dependant Components

// CSS
import './ContactCard.css';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import global_mapIcon from '../Projects/MapIcon';

import Resume from '../../Assets/website-resume.pdf';

class ContactCard extends React.Component {
    render() {
        const resumeIcon = global_mapIcon("resume");
        const emailIcon = global_mapIcon("email");
        const linkedInIcon = global_mapIcon("linkedin");
        const githubIcon = global_mapIcon("github");
        const email = "wren.liang@gmail.com";

        return (
            <div className="ContactCard">
                <div className="ContactCard-left">
                    <div className="ContactCard-profile">
                        <Image className="ContactCard-profile-pic" src={ProfilePic} roundedCircle></Image>
                        <div className="ContactCard-profile-text">
                            <h1 className="ContactCard-profile-name"> Wren Liang </h1>
                            <h3 className= "ContactCard-profile-description"> UBC Computer Engineering </h3>
                        </div>
                    </div>
                    <div className="ContactCard-contact-buttons">
                            <Button onClick={ () => {
                                window.location.href = `mailto:${email}`;
                            }} variant="dark" size="lg">
                                <FontAwesomeIcon icon={emailIcon.img} size="1x"></FontAwesomeIcon>
                                {` Email`}
                            </Button>
                            <Button onClick={ () => {
                                window.open('https://www.linkedin.com/in/wren-liang/', '_blank');
                            }} variant="dark" size="lg">
                                <FontAwesomeIcon icon={linkedInIcon.img} size="1x"></FontAwesomeIcon>
                                {` LinkedIn`}
                            </Button>
                            <Button onClick={ () => {
                                window.open('https://github.com/wrenliang', '_blank');
                            }} variant="dark" size="lg">
                                <FontAwesomeIcon icon={githubIcon.img} size="1x"></FontAwesomeIcon>
                                {` GitHub`}
                            </Button>
                    </div>
                    
                </div>
                <div className="ContactCard-right">
                    <Button onClick={ () => {
                        window.open(Resume, '_blank');
                    }} variant="outline-light">
                        <FontAwesomeIcon icon={resumeIcon.img} size="10x"></FontAwesomeIcon>
                        <h3> <br/> Here's my resume.</h3>
                    </Button>
                </div>
            </div>
        );
    }
}

export default ContactCard;