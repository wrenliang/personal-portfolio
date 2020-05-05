import React from 'react';
import { Image, Button } from 'react-bootstrap';

import ProfilePic from '../../Assets/profile-pic-compressed.png';

// Dependant Components

// CSS
import './ContactCard.css';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import global_mapIcon from '../Projects/MapIcon';

class ContactCard extends React.Component {
    render() {
        const resumeIcon = global_mapIcon("resume");
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
                            <Button variant="success" size="lg"> Email </Button>
                            <Button variant="success" size="lg"> LinkedIn </Button>
                            <Button variant="success" size="lg"> Phone </Button>
                    </div>
                    
                </div>
                <div className="ContactCard-right">
                    <Button variant="outline-light">
                        <FontAwesomeIcon icon={resumeIcon.img} size="10x"></FontAwesomeIcon>
                        <h3> <br/> Here's my resume.</h3>
                    </Button>
                </div>
            </div>
        );
    }
}

export default ContactCard;