import React from 'react';
import styles from './Skill.module.scss'
import {motion} from 'framer-motion';

const Skill = (props) => {

    const motions = {
        iconMotion: {
            hover: {
                scale: 1.15,
                rotate: 360,
                transition: {
                    duration: 1,
                },
            },
            hoverText: {
                scale: 1.15,
            }
        },
        textMotion: {
            hover: {
                scale: 1.05,
                transition: {
                    duration: 0.35,
                },
            },
        }
    }


    return (
        <motion.div className={styles.skill} whileHover="hover">
            <motion.div style={props.icon} className={styles.icon} variants={motions.iconMotion}></motion.div>
            <motion.h3 className={styles.skillTitle} variants={motions.textMotion}>{props.title}</motion.h3>
            {/*<span className={styles.description}>{props.description}</span>*/}
        </motion.div>
    )
}

export default Skill;