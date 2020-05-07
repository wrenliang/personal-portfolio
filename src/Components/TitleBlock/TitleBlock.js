import React from 'react';

// Dependant Components

// CSS
import './TitleBlock.css';


class TitleBlock extends React.Component {

    render() {
        return (
            <div className="TitleBlock">
                <h1 style={{fontSize: this.props.titleSize}} className="TitleBlock-title">{this.props.title}</h1>
                <p style={{fontSize: this.props.descriptionSize}} className="TitleBlock-description">{this.props.description}</p>
            </div>
        );
    }
}

export default TitleBlock;