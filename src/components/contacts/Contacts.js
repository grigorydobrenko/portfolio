import React from 'react';
import styles from './Contacts.module.scss'
import container from '../../common/styles/Container.module.scss'
import buttons from '../../common/buttons/Buttons.module.scss'
import {Title} from "../../common/title/Title";
import Fade from 'react-reveal/Fade';
import {CursorVariantContext} from "../../App";
import axios from "axios";
import {useFormik} from "formik";


const Contacts = () => {

    const {
        linkEnter,
        linkLeave
    } = React.useContext(CursorVariantContext)

    const [loading, setLoading] = React.useState(false)
    const [myMessages, setMyMessages] = React.useState('')
    const [error, setError] = React.useState('')

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate: (values) => {
            const errors = {}
            if (!values.name) {
                errors.name = 'Enter your name'
            }
            if (!values.email) {
                errors.email = 'Enter your email'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.message) {
                errors.message = 'Enter your message'
            }
            return errors
        },
        onSubmit: values => {
            setLoading(true)
            axios.post('https://gmail-nodejs-three.vercel.app/send-message', values)
                .then(res => {
                    setMyMessages('Thanks for your interest! I will contact you as soon as I have free time!')
                    setError('')
                    formik.resetForm();
                })
                .catch(error => {
                    setError('Error, please try again later.')
                })
                .finally(() => {
                    setLoading(false)
                })
        },
    })

    return (
        <div className={styles.contacts} id={'contactMe'}>
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
                                <a onMouseEnter={linkEnter} onMouseLeave={linkLeave}
                                   href="https://t.me/grigodo" target='_blank'>
                                    <div className={`${styles.icon} ${styles.telegram}`}>
                                    </div>
                                </a>
                                <a onMouseEnter={linkEnter} onMouseLeave={linkLeave}
                                   href="https://github.com/grigorydobrenko" target='_blank'>
                                    <div className={`${styles.icon} ${styles.github}`}>
                                    </div>
                                </a>
                                <a onMouseEnter={linkEnter} onMouseLeave={linkLeave}
                                   href="https://www.linkedin.com/in/grigory-dobrenko-65006325a/"
                                   target='_blank'>
                                    <div className={`${styles.icon} ${styles.linkedin}`}>
                                    </div>
                                </a>
                                <a onMouseEnter={linkEnter} onMouseLeave={linkLeave}
                                   href="https://www.codewars.com/users/Grigory_Dobrenko" target='_blank'>
                                    <div className={`${styles.icon} ${styles.codewars}`}>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className={styles.contactsForm}>
                            <form className={styles.form} onSubmit={formik.handleSubmit}>
                                <div className={styles.formField}>
                                    <label className={styles.label}>What is Your Name:</label>
                                    <input
                                        disabled={loading}
                                        name="name"
                                        {...formik.getFieldProps('name')}
                                    />
                                    <div className={styles.error}>
                                        {formik.touched.name && formik.errors.name && formik.errors.name}
                                    </div>
                                </div>
                                <div className={styles.formField}>
                                    <label className={styles.label}>Your Email Address:</label>
                                    <input
                                        disabled={loading}
                                        name="email"
                                        {...formik.getFieldProps('email')}
                                    />
                                    <div className={styles.error}>
                                        {formik.touched.email && formik.errors.email && formik.errors.email}
                                    </div>
                                </div>
                                <div className={styles.formField}>
                                    <label className={styles.label}>How can I Help you?:</label>
                                    <textarea
                                        className={styles.textArea}
                                        disabled={loading}
                                        rows={3}
                                        name="message"
                                        {...formik.getFieldProps('message')}
                                    ></textarea>
                                    <div className={styles.error}>
                                        {formik.touched.message && formik.errors.message && formik.errors.message}
                                    </div>
                                </div>

                                <div
                                    className={styles.contactButtons}
                                >

                                    <button
                                        onMouseEnter={linkEnter}
                                        onMouseLeave={linkLeave}
                                        disabled={loading}
                                        type="submit"
                                        className={`
                                        ${buttons.btn} ${buttons.btnPrimary} 
                                        ${styles.contactButton}`}
                                    >
                                        {
                                            loading ?
                                                <div className={styles.loader}></div> :
                                                <span className={styles.send}>Send</span>
                                        }

                                    </button>
                                    <span>
                                        {error && <div className={styles.responseError}>{error}</div>}
                                        {myMessages && <div className={styles.responseSuccess}>{myMessages}</div>}
                                    </span>
                                </div>
                            </form>
                        </div>
                    </Fade>
                </div>

            </div>
        </div>
    )
}

export default Contacts;