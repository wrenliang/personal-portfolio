import React from 'react';

// Dependant Components
import TitleBlock from '../TitleBlock/TitleBlock';
import SkillCard from './SkillCard';

// CSS
import './Skills.css';

class Skills extends React.Component {
    render() {
        return (
            <div className="section" id="Skills">
                <div className="Skills-leftWrapper">
                    <TitleBlock title={'Skills'} description={'This is the skills page'}></TitleBlock>
                </div>
                <div className="Skills-midWrapper">
                    <SkillCard title={'Languages'} skills={
                        [
                            {
                                key: "cplusplus",
                                text: "C/C++",
                                class: "SkillCard-list-li-standard"
                            },
                            {
                                key: "java",
                                text: "Java",
                                class: "SkillCard-list-li-standard"
                            },
                            {
                                key: "swift",
                                text: "Swift",
                                class: "SkillCard-list-li-ios"
                            },
                            {
                                key: "python",
                                text: "Python",
                                class: "SkillCard-list-li-standard"
                            },
                            {
                                key: "html-css",
                                text: "HTML/CSS",
                                class: "SkillCard-list-li-web"
                            },
                            {
                                key: "javascript",
                                text: "JavaScript",
                                class: "SkillCard-list-li-web"
                            }
                        ]
                    }/>
                    <SkillCard title={'Tools'} skills={
                        [
                            {
                                key: "git",
                                text: "Git",
                                class: "SkillCard-list-li-standard"
                            },
                            {
                                key: "postman",
                                text: "Postman",
                                class: "SkillCard-list-li-standard"
                            }
                        ]
                        }/>
                </div>
                <div className="Skills-rightWrapper">
                    <SkillCard title={'Frameworks'} skills={
                        [
                            {
                                key: "uikit",
                                text: "UIKit",
                                class: "SkillCard-list-li-ios"
                            },
                            {
                                key: "spritekit",
                                text: "SpriteKit",
                                class: "SkillCard-list-li-ios"
                            },
                            {
                                key: "react",
                                text: "React",
                                class: "SkillCard-list-li-web"
                            },
                            {
                                key: "bootstrap",
                                text: "Bootstrap",
                                class: "SkillCard-list-li-web"
                            },
                            {
                                key: "node",
                                text: "Node.js & Express.js",
                                class: "SkillCard-list-li-web"
                            },
                            {
                                key: "junit",
                                text: "JUnit",
                                class: "SkillCard-list-li-standard"
                            }
                        ]
                        }>
                    </SkillCard>
                </div>
            </div>
        );
    }
}

export default Skills;