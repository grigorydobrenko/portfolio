import React from 'react';
import styles from './Contacts.module.css'
import container from '../../common/styles/Container.module.css'
import buttons from '../../common/buttons/Buttons.module.css'


const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={`${container.container} ${container.itemsContainer}`}>
                <h2 className={styles.contactsTitle}>Contact Me</h2>
                <form className={styles.contactsForm} action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" ></textarea>
                </form>
                <a href="" className={buttons.btn}>Send</a>

            </div>
        </div>
    );
};

export default Contacts;