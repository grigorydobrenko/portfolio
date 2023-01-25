import React from 'react';
import styles from './Nav.module.scss'
import {CustomLink} from "./Link";

const Nav = (props) => {

    return (
        <div className={styles.nav}>
            <CustomLink color={props.color} to={'home'} title={'Home'}/>
            <CustomLink color={props.color} to={'about'} title={'About'}/>
            <CustomLink color={props.color} to={'skills'} title={'Skills'}/>
            <CustomLink color={props.color} to={'projects'} title={'Projects'}/>
            <CustomLink color={props.color} to={'contactMe'} title={'Contact'}/>
        </div>
    );
};

export default Nav;