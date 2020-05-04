import React from 'react';
import TextLoop from 'react-text-loop';

// Dependant Components

// CSS
import './Homepage.css';

class Homepage extends React.Component {
    render() {
        const roles = [
            "a Computer Engineering student",
            "an iOS Developer",
            "a Software Development Intern"
        ]
        const locations = [
            "The University of British Columbia",
            "UBC Launch Pad",
            "Orbis Investments Canada"
        ]

        return (
            <div className="section" id="Homepage">
                <div className="Homepage-leftWrapper">
                    <div className="Homepage-welcome-message-wrapper">
                        <h1 id="Homepage-welcome-message"> Wren Liang </h1>
                    </div>
                    <div className="Homepage-description-wrapper">
                        <div className="Homepage-who-i-am-wrapper">
                            <h1>I am <TextLoop className="Homepage-animated-text" fade={true} mask={true} children={roles}
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
                {/* <div className="Homepage-rightWrapper">
                
                    <div className="Homepage-photo-caption">
                        <p>
                            Photo Caption <br/>
                            This is my picture <br/>
                            From South Africa
                        </p>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Homepage;