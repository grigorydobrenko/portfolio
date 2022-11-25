import React from 'react';
import styles from './Footer.module.css'
import container from "../../common/styles/Container.module.css";


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={`${container.container} ${styles.footerContainer}`}>
                <span className={styles.title}>Grigory Dobrenko</span>
                <span>2022</span>
            </div>
        </div>
    );
};

export default Footer;