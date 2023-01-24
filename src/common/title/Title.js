import React from 'react';
import styles from './Title.module.scss'
import Fade from 'react-reveal/Fade';

export const Title = (props) => {
    return (
        <Fade left>
        <div className={styles.title}>
            {props.span && <p><span className={styles.span}>{props.span}</span></p>}
            <h3 className={styles.h3}>{props.h3}</h3>
        </div>
        </Fade>
    )
}