import React from 'react';
import styles from './BurgerNav.module.scss'
import {CustomLink} from "./../Link";

export const BurgerNav = (props) => {

    const [menuIsOpen, setIsOpen] = React.useState(false)

    const onToggleHandler = () => {
        setIsOpen(!menuIsOpen)
    }

    return (
        <div className={styles.burgerNav}>
            <div className={menuIsOpen ? `${styles.burgerNavItems} ${styles.show}` : styles.burgerNavItems}>
                <CustomLink color={props.color} to={'home'} title={'Home'}/>
                <CustomLink color={props.color} to={'about'} title={'About'}/>
                <CustomLink color={props.color} to={'skills'} title={'Skills'}/>
                <CustomLink color={props.color} to={'projects'} title={'Projects'}/>
                <CustomLink color={props.color} to={'contactMe'} title={'Contact'}/>
            </div>
            <div className={styles.burgerBtn} onClick={onToggleHandler}></div>
        </div>
    );
};

