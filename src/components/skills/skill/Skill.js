import React from 'react';
import styles from './Skill.module.scss'


const Skill = (props) => {

    return (
        <div className={styles.skill}>
            <div style={props.icon} className={styles.icon}></div>
            <h3 className={styles.skillTitle}>{props.title}</h3>
            {/*<span className={styles.description}>{props.description}</span>*/}
        </div>
    );
};

export default Skill;