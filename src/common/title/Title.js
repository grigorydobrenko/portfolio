import React from 'react';
import styles from './Title.module.scss'


export const Title = (props) => {
    return (
        <div className={styles.title}>
            {props.span && <p><span className={styles.span}>{props.span}</span></p>}
            <h3 className={styles.h3}>{props.h3}</h3>
        </div>
    )
}