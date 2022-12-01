import React from 'react';
import styles from './Projects.module.scss'
import container from '../../common/styles/Container.module.scss'
import Project from "./project/Project";
import {Title} from "../../common/title/Title";
import todolistImg from "../../common/images/todo.jpg"
import socialNetworkImg from "../../common/images/sn.jpg"


const Projects = () => {
    const todolist = {
        backgroundImage: `url(${todolistImg})`,
    };
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImg})`,
    };



    return (
        <div className={styles.projects} id={'projects'}>
            <div className={container.container}>
                <div className={`${container.itemsContainer} ${styles.projectsContainer}`}>
                    <Title span={'Portfolio'} h3={'Some of my most recent projects'}/>
                    <div className={styles.projectsItems}>
                        <Project title={'Todolist'} style={todolist}
                                 description={'It\'s a list of tasks you need to complete or things that you want to do'}/>
                        <Project title={'Social network'} style={socialNetwork}
                                 description={'An application which enables users to communicate with each other by posting information, comments, messages, images, etc.'}/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;