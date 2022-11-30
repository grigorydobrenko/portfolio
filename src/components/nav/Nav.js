import React from 'react';
import styles from './Nav.module.scss'


const Nav = (props) => {

    const arrowStyle = props.color === true? styles.animated : styles.nonAnimated

    return (
        <div className={styles.nav}>
            <a href="" className={`${styles.link} ${arrowStyle}`}>About</a>
            <a href="" className={`${styles.link} ${arrowStyle}`}>Skills</a>
            <a href="" className={`${styles.link} ${arrowStyle}`}>Projects</a>
            <a href="" className={`${styles.link} ${arrowStyle}`}>Contact Me</a>
        </div>
    );
};

export default Nav;