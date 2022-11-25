import React from 'react';
import styles from './Projects.module.css'
import container from '../../common/styles/Container.module.css'

import Project from "./project/Project";
import {Title} from "../../common/title/Title";

const Projects = () => {
    return (
        <div className={styles.projects}>
            <div className={container.container}>
                <div className={`${container.itemsContainer} ${styles.projectsContainer}`}>
                    <Title span={'Portfolio'} h3={'Some of my most recent projects'}/>
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
        </div>
    );
};

export default Projects;