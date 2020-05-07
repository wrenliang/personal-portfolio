import React from 'react';

// Dependant Components
import ContactCard from './ContactCard';

// CSS
import './ContactPage.css';


class ContactPage extends React.Component {
    render() {
        return (
            <div className="section" id="ContactPage">
                <div className="ContactPage-wrapper">
                    <h1> Let's get in touch </h1>
                    <div className="ContactPage-businessCard">
                        <ContactCard></ContactCard>
                    </div>
                </div>
                <div className="ContactPage-credits-wrapper">
                    <p >Created by Wren Liang © 2020</p>
                </div>
            </div>
        );
    }
}

export default ContactPage;