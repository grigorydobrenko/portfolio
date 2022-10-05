import React from 'react';
import styles from './Projects.module.css'
import container from '../../common/styles/Container.module.css'

import Project from "./project/Project";

const Projects = () => {
    return (
        <div className={styles.projects}>
            <div className={`${container.container} ${container.itemsContainer}`}>
                <h2 className={styles.title}>My Projects</h2>
                <div className={styles.projectsItems}>
                    <Project title={'Todolist'}
                             description={'Todolist '}/>
                    <Project title={'WaySamurai'}
                             description={'WaySamurai'}/>
                    <Project title={'Counter'}
                             description={'Counter'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;