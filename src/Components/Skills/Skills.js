import React from 'react';

// Dependant Components
import SkillCard from './SkillCard';

// CSS
import './Skills.css';

class Skills extends React.Component {
    render() {
        return (
            <div className="section" id="Skills">
                <div className="Skills-leftWrapper">
                    <h1 className="Skills-title">Skills</h1>
                    <h3 className="Skills-description">My strengths are in <span className="Skills-iOS-tag">iOS</span> and <span className="Skills-web-tag">Web</span> development.</h3>
                </div>
                <div className="Skills-midWrapper">
                    <SkillCard title={'Languages'} skills={
                        [
                            {
                                key: "swift",
                                text: "Swift",
                                class: "SkillCard-list-li-ios"
                            },
                            {
                                key: "javascript",
                                text: "JavaScript",
                                class: "SkillCard-list-li-web"
                            },
                            {
                                key: "cplusplus",
                                text: "C/C++",
                                class: "SkillCard-list-li-standard"
                            },
                            {
                                key: "csharp",
                                text: "C#",
                                class: "SkillCard-list-li-standard"
                            },
                            {
                                key: "java",
                                text: "Java",
                                class: "SkillCard-list-li-standard"
                            }
                        ]
                    }/>
                    <SkillCard title={'Tools'} skills={
                        [
                            {
                                key: "xcode",
                                text: "Xcode",
                                class: "SkillCard-list-li-ios"
                            },
                            {
                                key: "git",
                                text: "Git",
                                class: "SkillCard-list-li-standard"
                            },
                            {
                                key: "linux",
                                text: "Linux",
                                class: "SkillCard-list-li-standard"
                            },
                            {
                                key: "docker",
                                text: "Docker",
                                class: "SkillCard-list-li-standard"
                            },
                            {
                                key: "aws",
                                text: "AWS",
                                class: "SkillCard-list-li-standard"
                            }
                        ]
                        }/>
                </div>
                <div className="Skills-rightWrapper">
                    <SkillCard title={'Technologies'} skills={
                        [
                            {
                                key: "uikit",
                                text: "UIKit",
                                class: "SkillCard-list-li-ios"
                            },
                            {
                                key: "html-css",
                                text: "HTML/CSS",
                                class: "SkillCard-list-li-web"
                            },
                            {
                                key: "react",
                                text: "React",
                                class: "SkillCard-list-li-web"
                            },
                            {
                                key: "angular",
                                text: "AngularJS",
                                class: "SkillCard-list-li-web"
                            },
                            {
                                key: "node",
                                text: "Node.js",
                                class: "SkillCard-list-li-web"
                            },
                            {
                                key: "dotnet",
                                text: ".NET Core",
                                class: "SkillCard-list-li-standard"
                            },
                            {
                                key: "mysql",
                                text: "MySQL",
                                class: "SkillCard-list-li-standard"
                            },
                            {
                                key: "sql-server",
                                text: "SQL Server",
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