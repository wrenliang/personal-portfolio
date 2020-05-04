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
                            <h3> UBC | Computer Engineering | iOS Developer </h3>
                        </div>
                    </div>
                    <div className="ContactCard-contact-buttons">
                            <Button size="lg"> Email </Button>
                            <Button size="lg"> LinkedIn </Button>
                            <Button size="lg"> Phone </Button>
                    </div>
                    
                </div>
                <div className="ContactCard-right">
                    <Button variant="outline-dark">
                        <FontAwesomeIcon icon={resumeIcon.img} size="10x"></FontAwesomeIcon>
                        <h1>Here is my resume.</h1>
                    </Button>
                </div>
            </div>
        );
    }
}

export default ContactCard;