import React from 'react';
import styles from './Skills.module.scss'
import container from '../../common/styles/Container.module.scss'

import Skill from "./skill/Skill";
import {Title} from "../../common/title/Title";
import HTMLIcon from "../../common/icons/icons8-html.svg";
import CSSIcon from "../../common/icons/icons8-Css.svg";
import JavascriptIcon from "../../common/icons/icons8-javascript.svg";
import TypescriptIcon from "../../common/icons/icons8-typescript.svg";
import ReactIcon from "../../common/icons/icons8-react.svg";
import ReduxIcon from "../../common/icons/icons8-redux.svg";



const Skills = () => {
    const html = {
        backgroundImage: `url(${HTMLIcon})`,
    };
    const css = {
        backgroundImage: `url(${CSSIcon})`,
    };
    const javascript = {
        backgroundImage: `url(${JavascriptIcon})`,
    };
    const typescript = {
        backgroundImage: `url(${TypescriptIcon})`,
    };
    const react = {
        backgroundImage: `url(${ReactIcon})`,
    };
    const redux = {
        backgroundImage: `url(${ReduxIcon})`,
    };


    return (
        <div className={styles.skills} id={'skills'}>
            <div className={container.container}>
                <div className={styles.skillsContainer}>
                <Title span={'What I Do?'} h3={'How I can help your next project'}/>
                    <div className={styles.skillsItems}>
                        <Skill icon={html} title={'HTML'} description={'Hypertext Markup Language, is a markup language that defines the structure of web pages'} style={html}/>
                        <Skill icon={css} title={'CSS'} description={'Cascading Style Sheets is a style sheet language which is used to describe the look and formatting of a document written in markup language'}/>
                        <Skill icon={javascript} title={'Javascript'} description={'Multi-paradigm programming language. Supports object-oriented, imperative and functional styles. Is one of the core technologies of the World Wide Web'}/>
                        <Skill icon={typescript} title={'Typescript'} description={'TypeScript is a strongly typed programming language that builds on JavaScript'}/>
                        <Skill icon={react} title={'React'} description={'An open-source front-end JavaScript library for building user interfaces'}/>
                        <Skill icon={redux} title={'Redux'} description={'An open source JavaScript library for managing application state'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;