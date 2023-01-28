import React from 'react';
import styles from './Projects.module.scss'
import container from '../../common/styles/Container.module.scss'
import Project from "./project/Project";
import {Title} from "../../common/title/Title";
import todolistImg from "../../common/images/todolist.jpg"
import socialNetworkImg from "../../common/images/social-network.jpg"
import learningCardsImg from "../../common/images/learning-cards.png"

const Projects = () => {

    const learningCards = {
        backgroundImage: `url(${learningCardsImg})`,
    }
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImg})`,
    }
    const todolist = {
        backgroundImage: `url(${todolistImg})`,
    }

    return (
        <div className={styles.projects} id={'projects'}>
            <div className={container.container}>
                <div className={`${container.itemsContainer} ${styles.projectsContainer}`}>
                    <Title span={'Portfolio'} h3={'Some of my most recent projects'}/>
                    <div className={styles.projectsItems}>
                        <Project title={'Learning Cards'} style={learningCards} link={'https://grigorydobrenko.github.io/learning-cards/'}
                                 description={'A tool to facilitate learning. There are cards bearing information, which is intended to be used as an aid in memorization'}/>
                        <Project title={'Social Network'} style={socialNetwork} link={'https://grigorydobrenko.github.io/social-network'}
                                 description={'An application which enables users to communicate with each other by posting information, comments, messages, images, etc.'}/>
                        <Project title={'Todolist'} style={todolist} link={'https://grigorydobrenko.github.io/todolist'}
                                 description={'It\'s a list of tasks you need to complete or things that you want to do'}/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Projects