import React from 'react';

// Dependant Components

// CSS
import './TitleBlock.css';


class TitleBlock extends React.Component {

    render() {
        return (
            <div className="TitleBlock">
                <h1 className="TitleBlock-title">{this.props.title}</h1>
                <p className="TitleBlock-description">{this.props.description}</p>
            </div>
        );
    }
}

export default TitleBlock;