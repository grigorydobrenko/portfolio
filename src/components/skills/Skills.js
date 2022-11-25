import React from 'react';
import styles from './Skills.module.css'
import container from '../../common/styles/Container.module.css'

import Skill from "./skill/Skill";
import {Title} from "../../common/title/Title";

const Skills = () => {
    return (
        <div className={styles.skills}>
            <div className={container.container}>
                <div className={styles.skillsContainer}>
                <Title span={'What I Do?'} h3={'How I can help your next project'}/>
                    <div className={styles.skillsItems}>
                        <Skill title={'HTML'} description={'Hypertext Markup Language, is a markup language that defines the structure of web pages'} />
                        <Skill title={'CSS'} description={'Cascading Style Sheets is a style sheet language which is used to describe the look and formatting of a document written in markup language'}/>
                        <Skill title={'Javascript'} description={'Multi-paradigm programming language. Supports object-oriented, imperative and functional styles. Is one of the core technologies of the World Wide Web'}/>
                        <Skill title={'Typescript'} description={'TypeScript is a strongly typed programming language that builds on JavaScript'}/>
                        <Skill title={'React'} description={'An open-source front-end JavaScript library for building user interfaces'}/>
                        <Skill title={'Redux'} description={'An open source JavaScript library for managing application state'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;