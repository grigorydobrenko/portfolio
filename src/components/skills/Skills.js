import React from 'react';
import styles from './Skills.module.css'
import container from '../../common/styles/Container.module.css'

import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={styles.skills}>
            <div className={`${container.container} ${styles.skillsContainer}`}>
                    <h2 className={styles.title}>skills</h2>
                    <div className={styles.skillsItems}>
                        <Skill title={'HTML'} description={'semantic and adaptive HTML '}/>
                        <Skill title={'Css'} description={'flex-box and grid layouts'}/>
                        <Skill title={'Javascript'} description={'ECMAscript 6'}/>
                        <Skill title={'Typescript'} description={'types'}/>
                        <Skill title={'React'} description={'hooks'}/>
                        <Skill title={'Redux'} description={'dispatch, reducers, actions'}/>
                    </div>
            </div>
        </div>
    );
};

export default Skills;