import React from 'react';
import styles from './Skill.module.css'


const Skill = (props) => {
    const skill = props.title
    const skillIcon = styles[skill]

    return (
        <div className={styles.skill}>
            {/*<div className={styles.icon}><img src={`../../../common/icons/icons8-${props.title}.svg`} alt={props.title}/></div>*/}
            <div className={`${styles.icon} ${skillIcon}`}></div>
            <h3 className={styles.skillTitle}>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
};

export default Skill;