import React from 'react';

// Dependant Components
import ContactCard from './ContactCard';

// CSS
import './ContactPage.css';


class ContactPage extends React.Component {
    render() {
        return (
            <div className="section" id="ContactPage">
                <h1> I'd love to get in touch! </h1>
                <div className="ContactPage-businessCard">
                    <ContactCard></ContactCard>
                </div>
                <h1> Made by Wren Liang </h1>
            </div>
        );
    }
}

export default ContactPage;