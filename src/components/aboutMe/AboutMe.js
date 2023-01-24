import React from 'react';
import styles from './AboutMe.module.scss'
import container from '../../common/styles/Container.module.scss'
import {Title} from "../../common/title/Title";
import Fade from 'react-reveal/Fade';

export const AboutMe = () => {
    return (
        <div className={container.about} id={'about'}>
            <div className={container.container}>
                <div className={styles.aboutContainer}>
                    <Title span={'About Me'} h3={'Know Me More'}/>
                    <Fade bottom>
                        <p className={styles.AboutInfo}>
                            I'm 25 years old front-end developer. Responsible,
                            fast-learning, involved person.
                            Graduated technical Univercity, as a power engineer, now immersed myself in the frontend
                            development. My aim is to always develop myself, discover new horizons and never stop
                            learning.
                        </p>
                    </Fade>
                    <div className={styles.aboutInfoBlock}>
                        <div className={styles.block}>
                            <p className={styles.title}>Name</p>
                            <p className={styles.info}>Grigory Dobrenko</p>
                        </div>
                        <div className={styles.block}>
                            <p className={styles.title}>Email</p>
                            <p className={styles.info}>grigorydobrenko97@gmail.com</p>
                        </div>
                        <div className={styles.block}>
                            <p className={styles.title}>Date of birth</p>
                            <p className={styles.info}>8 September, 1997</p>
                        </div>
                        <div className={styles.block}>
                            <p className={styles.title}>From</p>
                            <p className={styles.info}>Minsk, Belarus</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}