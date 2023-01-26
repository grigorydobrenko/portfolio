import React from 'react';
import styles from './BurgerNav.module.scss'
import {CustomLink} from "./../Link";

export const BurgerNav = (props) => {

    const [menuIsOpen, setIsOpen] = React.useState(false)

    const onToggleHandler = () => {
        setIsOpen(!menuIsOpen)
    }

    const burgerStyle = menuIsOpen ? <BurgerOpen/> : <BurgerClose/>


    return (
        <div className={styles.burgerNav}>
            <div className={menuIsOpen ? `${styles.burgerNavItems} ${styles.show}` : styles.burgerNavItems}>
                <CustomLink color={props.color} to={'home'} title={'Home'} onClick={onToggleHandler}/>
                <CustomLink color={props.color} to={'about'} title={'About'} onClick={onToggleHandler}/>
                <CustomLink color={props.color} to={'skills'} title={'Skills'} onClick={onToggleHandler}/>
                <CustomLink color={props.color} to={'projects'} title={'Projects'} onClick={onToggleHandler}/>
                <CustomLink color={props.color} to={'contactMe'} title={'Contact'} onClick={onToggleHandler}/>
            </div>
            <div className={menuIsOpen ? `${styles.burgerBtn} ${styles.show}` : styles.burgerBtn}
                 onClick={onToggleHandler}>
                {burgerStyle}
            </div>
        </div>
    )
}


const BurgerOpen = () => {
    return (
        <svg
            width={50}
            height={50}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.95 8.464a1 1 0 1 0-1.414-1.414L12 10.586 8.465 7.05A1 1 0 0 0 7.05 8.464L10.586 12 7.05 15.536a1 1 0 1 0 1.415 1.414L12 13.414l3.536 3.536a1 1 0 1 0 1.414-1.414L13.414 12l3.536-3.536Z"
                fill="#fb503b"
            />
        </svg>
    )
}

const BurgerClose = () => {
    return (
        <svg
            width={50}
            height={50}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g stroke="#fb503b" strokeWidth={2} strokeLinecap="round">
                <path d="M5 12h15M5 17h15M5 7h15"/>
            </g>
        </svg>

    )
}

