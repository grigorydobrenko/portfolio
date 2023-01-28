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
import NodeJsIcon from "../../common/icons/node-js.svg";
import Git from "../../common/icons/git.svg";
import Storybook from "../../common/icons/storybook.svg";
import Jest from "../../common/icons/jest.svg";
import Axios from "../../common/icons/axios.svg";
import Material from "../../common/icons/material.svg";
import Formik from "../../common/icons/formik.svg";
import ReactHookForm from "../../common/icons/react-hook-form.svg";
import Sass from "../../common/icons/sass.svg";
import Fade from 'react-reveal/Fade';


const Skills = () => {
    const html = {
        backgroundImage: `url(${HTMLIcon})`,
    }
    const css = {
        backgroundImage: `url(${CSSIcon})`,
    }
    const javascript = {
        backgroundImage: `url(${JavascriptIcon})`,
    }
    const typescript = {
        backgroundImage: `url(${TypescriptIcon})`,
    }
    const react = {
        backgroundImage: `url(${ReactIcon})`,
    }
    const redux = {
        backgroundImage: `url(${ReduxIcon})`,
    }
    const nodeJs = {
        backgroundImage: `url(${NodeJsIcon})`,
    }
    const git = {
        backgroundImage: `url(${Git})`,
    }
    const storybook = {
        backgroundImage: `url(${Storybook})`,
    }
    const jest = {
        backgroundImage: `url(${Jest})`,
    }
    const axios = {
        backgroundImage: `url(${Axios})`,
    }
    const material = {
        backgroundImage: `url(${Material})`,
    }
    const formik = {
        backgroundImage: `url(${Formik})`,
    }
    const reactHookForm = {
        backgroundImage: `url(${ReactHookForm})`,
    }
    const sass = {
        backgroundImage: `url(${Sass})`,
    }


    return (
        <div className={styles.skills} id={'skills'}>
            <div className={container.container}>
                <div className={styles.skillsContainer}>
                    <Fade left>
                        <Title span={'What I Do?'} h3={'How I can help your next project'}/>
                    </Fade>
                    <Fade bottom>
                        <div className={styles.skillsItems}>
                            <Skill icon={react} title={'React'}/>
                            <Skill icon={redux} title={'Redux / Redux Toolkit'}/>
                            <Skill icon={nodeJs} title={'Node JS'}/>
                            <Skill icon={typescript} title={'Typescript'}/>
                            <Skill icon={javascript} title={'Javascript'}/>
                            <Skill icon={git} title={'Git'}/>
                            <Skill icon={storybook} title={'Storybook'}/>
                            <Skill icon={jest} title={'Jest'}/>
                            <Skill icon={axios} title={'Axios'}/>
                            <Skill icon={material} title={'Material UI'}/>
                            <Skill icon={formik} title={'Formik'}/>
                            <Skill icon={reactHookForm} title={'React Hook Form'}/>
                            <Skill icon={html} title={'HTML'}/>
                            <Skill icon={css} title={'CSS'}/>
                            <Skill icon={sass} title={'Sass / Scss'}/>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Skills;