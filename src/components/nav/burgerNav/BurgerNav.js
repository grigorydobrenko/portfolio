import React from 'react';
import styles from './BurgerNav.module.scss'
import {CustomLink} from "../Link";
import {BurgerOpen} from "./BurgerOpen";
import {BurgerClose} from "./BurgerClose";

export const BurgerNav = (props) => {

    const [menuIsOpen, setIsOpen] = React.useState(false)

    const onToggleHandler = () => {
        setIsOpen(!menuIsOpen)
    }

    const burgerStyle = menuIsOpen ? <BurgerOpen/> : <BurgerClose/>

    const menuClass = menuIsOpen ? `${styles.burgerNavItems} ${styles.show}` : styles.burgerNavItems
    const burgerBtnClass = menuIsOpen ? `${styles.burgerBtn} ${styles.show}` : styles.burgerBtn

    return (
        <div className={styles.burgerNav}>
            <div className={menuClass}>
                <CustomLink color={props.color} to={'home'} title={'Home'} onClick={onToggleHandler}/>
                <CustomLink color={props.color} to={'about'} title={'About'} onClick={onToggleHandler}/>
                <CustomLink color={props.color} to={'skills'} title={'Skills'} onClick={onToggleHandler}/>
                <CustomLink color={props.color} to={'projects'} title={'Projects'} onClick={onToggleHandler}/>
                <CustomLink color={props.color} to={'contactMe'} title={'Contact'} onClick={onToggleHandler}/>
            </div>
            <div className={burgerBtnClass}
                 onClick={onToggleHandler}>
                {burgerStyle}
            </div>
        </div>
    )
}





