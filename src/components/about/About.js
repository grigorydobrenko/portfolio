import React from 'react';
import styles from './About.module.css'
import container from '../../common/styles/Container.module.css'
import buttons from '../../common/buttons/Buttons.module.css'


const About = () => {
    return (
        <div className={styles.about}>
            <div className={container.container}>
                <div className={styles.aboutContainer}>
                    <div className={styles.mainBlock}>
                        <div>
                            <div className={styles.nameContainer}>Hello, I'm<br/>
                                <span className={styles.name}>Grigory Dobrenko</span></div>
                            <div className={styles.job}>Front-end developer</div>
                            <div className={styles.description}>I'm 25 years old front-end developer. Responsible,
                                fast-learning, involved person.
                                Graduated technical Univercity, as a power engineer, now immersed myself in the frontend
                                development. My aim is to always develop myself, discover new horizons and never stop
                                learning.
                            </div>
                        </div>

                        <div className={styles.buttonsContainer}><a className={buttons.btn}>View My Projects</a>
                            <a className={buttons.btn}>Contact Me</a></div>
                    </div>
                    <div className={styles.photo}><img src="../../common/images/avatar.jpg" alt=""/></div>
                </div>
            </div>
        </div>
    );
};

export default About;