import React from 'react';
import styles from './Nav.module.scss'

const Nav = (props) => {

    const arrowStyle = props.color === true ? styles.animated : styles.nonAnimated

    return (
        <div className={styles.nav}>
            <a href="#about" className={`${styles.link} ${arrowStyle}`}>About</a>
            <a href="#skills" className={`${styles.link} ${arrowStyle}`}>Skills</a>
            <a href="#projects" className={`${styles.link} ${arrowStyle}`}>Projects</a>
            <a href="#contact Me" className={`${styles.link} ${arrowStyle}`}>Contact Me</a>
        </div>
    );
};

export default Nav;