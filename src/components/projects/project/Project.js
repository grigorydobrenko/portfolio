import React from 'react';
import styles from './Project.module.scss';
import {CursorVariantContext} from "../../../App";

const Project = (props) => {
    const {
        linkEnter,
        linkLeave
    } = React.useContext(CursorVariantContext)

    const title = props.title
    return (
        <a onMouseEnter={linkEnter} onMouseLeave={linkLeave} href="" className={styles.projectItem} style={props.style}>
            <div className={styles.projectInfo}>
                <div className={styles.projectTitle}>{title}</div>
                <span className={styles.projectDescription}>{props.description}</span>
            </div>
        </a>
    );
};

export default Project;