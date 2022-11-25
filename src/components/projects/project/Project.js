import React from 'react';
import styles from './Project.module.css'


const Project = (props) => {
    const title = props.title
    const style = styles[title]

    return (
        <div className={styles.projectItem}>
            <div className={`${ style} ${styles.projectImgContainer}`}>
                <a className={styles.projectLink} href="">See more</a>
            </div>
            <div className={styles.projectTitle}>{title}</div>
            <span className={styles.projectDescription}>{props.description}</span>
        </div>
    );
};

export default Project;