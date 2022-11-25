import React from 'react';
import styles from './Contacts.module.css'
import container from '../../common/styles/Container.module.css'
import buttons from '../../common/buttons/Buttons.module.css'
import {Title} from "../../common/title/Title";


const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={`${container.container} ${container.itemsContainer}`}>
                <Title span={'Contact Me'} h3={'Contact Me'}/>
                <div className={styles.contactsContainer}>
                    <div className={styles.contactsInfo}>
                        <p>Please share as much info, as possible so we can get the most out of our first catch-up.</p>
                        <h3>Call:</h3>
                        <p>+375 (44) 785-53-63</p>
                        <div>
                            <a href="">
                            <div className={`${styles.icon} ${styles.github}`}></div>
                        </a>
                            <a href=""></a>
                            <a href=""></a>
                            <a href=""></a>
                        </div>
                    </div>
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
                        <a href="" className={buttons.btn}>Send</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contacts;