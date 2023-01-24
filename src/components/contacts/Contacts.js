import React from 'react';
import styles from './Contacts.module.scss'
import container from '../../common/styles/Container.module.scss'
import buttons from '../../common/buttons/Buttons.module.scss'
import {Title} from "../../common/title/Title";
import Fade from 'react-reveal/Fade';


const Contacts = () => {
    return (
        <div className={styles.contacts} id={'contact Me'}>
            <div className={container.container}>
                <Title h3={'Contact Me'}/>
                <div className={styles.contactsContainer}>
                    <Fade left>
                        <div className={styles.contactsInfo}>
                            <p className={styles.description}>Please share as much info, as possible so we can get the
                                most out of our first catch-up.</p>
                            <h3>Call:</h3>
                            <p>+375 (44) 785-53-63</p>
                            <div className={styles.linksContainer}>
                                <a href="https://github.com/grigorydobrenko" target='_blank'>
                                    <div className={`${styles.icon} ${styles.github}`}>
                                    </div>
                                </a>
                                <a href="https://ru.linkedin.com/" target='_blank'>
                                    <div className={`${styles.icon} ${styles.linkedin}`}>
                                    </div>
                                </a>
                                <a href="https://www.codewars.com/users/Grigory_Dobrenko" target='_blank'>
                                    <div className={`${styles.icon} ${styles.codewars}`}>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className={styles.contactsForm}>
                            <form className={styles.Form} action="">
                                <div>
                                    <label>What is Your Name:</label>
                                    <input type="text"/>
                                </div>
                                <div>
                                    <label>Your Email Address:</label>
                                    <input type="text"/>
                                </div>
                                <div>
                                    <label>How can I Help you?:</label>
                                    <textarea name="" id=""></textarea>
                                </div>
                            </form>
                            <div className={styles.contactButtons}><a href=""
                                                                      className={`${buttons.btn} ${buttons.btnPrimary}`}>Send</a>
                            </div>
                        </div>
                    </Fade>
                </div>

            </div>
        </div>
    );
};

export default Contacts;