import React from 'react';
import styles from './Header.module.css'
import container from '../../common/styles/Container.module.css'

import Nav from "../nav/Nav";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={`${container.container} ${styles.headerContainer}`}>
                    <Nav/>
            </div>
        </div>
    );
};

export default Header;