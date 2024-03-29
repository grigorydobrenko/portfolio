import React, {useEffect, useState} from 'react';
import styles from './Header.module.scss'
import container from '../../common/styles/Container.module.scss'

import Nav from "../nav/Nav";
import {BurgerNav} from "../nav/burgerNav/BurgerNav";

const Header = () => {
    const [color, setColor] = useState(false)


    const changeColor = () => {
        const COLOR_CHANGE_THRESHOLD = 90;

        if(window.scrollY >= COLOR_CHANGE_THRESHOLD && color !== true){
            setColor(true)
        }
        if(window.scrollY < COLOR_CHANGE_THRESHOLD && color !== false){
            setColor(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeColor)
        window.addEventListener("scroll", changeColor)
    }, [window.scrollY])



    const headerColor = color ? styles.animate : styles.nonAnimate

    return (
        <div className={`${styles.header} ${styles.sticky} ${headerColor}`}>
            <div className={`${container.container} ${styles.headerContainer}`}>
                    <Nav color={color}/>
                    <BurgerNav color={color}/>
            </div>
        </div>
    );
};

export default Header;