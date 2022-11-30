import React from 'react';
import styles from './Project.module.css'


const Project = (props) => {
    const title = props.title
    return (
            <a href="" className={styles.projectItem} style={props.style}>
                {/*<div className={`${ style} ${styles.projectImgContainer}`}>*/}
                    <div className={styles.projectInfo}>
                        <div className={styles.projectTitle}>{title}</div>
                        <span className={styles.projectDescription}>{props.description}</span>
                    </div>
                {/*</div>*/}
            </a>
    );
};

export default Project;