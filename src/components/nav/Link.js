import React from 'react';
import styles from "./Nav.module.scss";
import {CursorVariantContext} from "../../App";
import {Link} from 'react-scroll'

export const CustomLink = ({color, to, title}) => {

    const {
        linkEnter,
        linkLeave
    } = React.useContext(CursorVariantContext)

    const arrowStyle = color === true ? styles.animated : styles.nonAnimated

    return (
        <Link activeClass={styles.active}
              onMouseEnter={linkEnter}
              onMouseLeave={linkLeave}
              to={to}
              spy={true}
              smooth={true}
              offset={-90}
              duration={100}
              className={`${styles.link} ${arrowStyle}`}
        >
            {title}
        </Link>
    );
};

