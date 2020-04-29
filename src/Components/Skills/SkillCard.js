import React from 'react';

// Dependant Components

// CSS
import './SkillCard.css';


class SkillCard extends React.Component {
    SkillList = (props) => {
        const skills = props.skills;
        const skillList = skills.map((skill) => {
            return (
            <li key={skill.key} className={skill.class}>{skill.text}</li>
            );
        })

        return(skillList);
    }


    render() {

        return (
            <div className="SkillCard">
                <h2 className="SkillCard-title">{this.props.title}</h2>
                <ul className="SkillCard-list">
                    {this.SkillList(this.props)}
                </ul>
            </div>
        );
    }

}

export default SkillCard;