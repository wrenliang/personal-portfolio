import React from 'react';
import TextLoop from 'react-text-loop';

// Dependant Components

// CSS
import './Homepage.css';

class Homepage extends React.Component {
    render() {
        const roles = [
            "am a Software Engineer Intern",
            "study Computer Engineering",
            "am a Technical Lead",
            
        ]
        const locations = [
            "Orbis Investments",
            "University of British Columbia",
            "UBC Launch Pad",
        ]

        return (
            <div className="section" id="Homepage">
                <div className="Homepage-main-wrapper">
                    <div className="Homepage-welcome-message-wrapper">
                        <h1 id="Homepage-welcome-message"> Wren Liang </h1>
                    </div>
                    <div className="Homepage-description-wrapper">
                        <div className="Homepage-who-i-am-wrapper">
                            <h1>I <TextLoop className="Homepage-animated-text" fade={true} mask={true} children={roles}
                                interval={4000} adjustingSpeed={750} springConfig={{
                                    stiffness: 300,
                                    damping: 30
                                }}
                                ></TextLoop>
                            </h1>
                        </div>
                        <div className="Homepage-where-i-am-wrapper">
                            <h1> at <TextLoop className="Homepage-animated-text" fade={true} mask={true} children={locations}
                                interval={4000} adjustingSpeed={750} springConfig={{
                                    stiffness: 300,
                                    damping: 30
                                }}
                                
                                ></TextLoop>.
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="Homepage-caption-wrapper">
                    <p className="Homepage-caption">
                        Kananaskis Country <br/>
                        Alberta, Canada <br/>
                        © 2019 Noah Edwards & Wren Liang 
                    </p>
                </div>
            </div>
        );
    }
}

export default Homepage;