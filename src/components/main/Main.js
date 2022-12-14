import React from 'react';
import styles from './Main.module.scss'
import container from '../../common/styles/Container.module.scss'
import buttons from '../../common/buttons/Buttons.module.scss'


export const Main = () => {
    return (
        <div className={styles.main}>
            <div className={container.container}>
                <div className={styles.mainContainer}>
                    <div className={styles.mainBlock}>
                        <div>
                            <h3 className={styles.hello}>Hello, I'm</h3>
                            <h3 className={styles.name}>Grigory Dobrenko</h3>
                            <h3 className={styles.job}>Front-end developer</h3>
                            <p className={styles.description}>
                                Based in Minsk, Belarus
                            </p>
                        </div>

                        <div className={styles.buttonsContainer}><a className={`${buttons.btn} ${buttons.btnPrimary}`} href="#projects">View My Works</a>
                            <a className={`${buttons.btn} ${buttons.btnSecondary}`} href="#contact Me">Contact Me</a></div>
                    </div>
                    <div className={styles.photo}><img src="../../common/images/avatar.jpg" alt=""/></div>
                </div>
            </div>
        </div>
    );
};

