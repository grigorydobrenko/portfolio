import React from 'react';
import styles from './Nav.module.scss'
import {CursorVariantContext} from '../../App'

const Nav = (props) => {

    const {
        linkEnter,
        linkLeave
    } = React.useContext(CursorVariantContext)

    const arrowStyle = props.color === true ? styles.animated : styles.nonAnimated


    return (
        <div className={styles.nav}>
            <a onMouseEnter={linkEnter} onMouseLeave={linkLeave} href="#about"
               className={`${styles.link} ${arrowStyle}`}>About</a>
            <a onMouseEnter={linkEnter} onMouseLeave={linkLeave} href="#skills"
               className={`${styles.link} ${arrowStyle}`}>Skills</a>
            <a onMouseEnter={linkEnter} onMouseLeave={linkLeave} href="#projects"
               className={`${styles.link} ${arrowStyle}`}>Projects</a>
            <a onMouseEnter={linkEnter} onMouseLeave={linkLeave} href="#contact Me"
               className={`${styles.link} ${arrowStyle}`}>Contact Me</a>
        </div>
    );
};

export default Nav;