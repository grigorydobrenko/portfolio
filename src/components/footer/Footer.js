import React from 'react';
import styles from './Footer.module.scss'
import container from "../../common/styles/Container.module.scss";


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={container.container}>
                <div className={styles.footerContainer}><span className={styles.title}>Developed by Grigory Dobrenko © 2023</span>
                    </div>
            </div>
        </div>
    );
};

export default Footer;