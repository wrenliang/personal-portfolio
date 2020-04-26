import React from 'react';

// Dependant Components
import TitleBlock from './TitleBlock';

// CSS
import './Skills.css';

class Skills extends React.Component {
    render() {
        return (
            <div className="section" id="Skills">
                <div className="Skills-leftWrapper">
                    <TitleBlock title={'Skills'} description={'This is the skills page'}></TitleBlock>
                </div>
                <div className="Skills-rightWrapper">
                </div>
            </div>
        );
    }
}

export default Skills;