import React from 'react';
import styles from './Main.module.scss'
import container from '../../common/styles/Container.module.scss'
import buttons from '../../common/buttons/Buttons.module.scss'
import Fade from 'react-reveal/Fade';
import {CursorVariantContext} from "../../App";
import {Link} from "react-scroll";

export const Main = () => {

    const {
        linkEnter,
        linkLeave
    } = React.useContext(CursorVariantContext);

    return (
        <div className={styles.main} id={'home'}>
            <div className={container.container}>
                <div className={styles.mainContainer}>
                    <Fade left>
                        <div className={styles.mainBlock}>
                            <div>
                                <h3 className={styles.hello}>Hello, I'm</h3>
                                <h3 className={styles.name}>Grigory Dobrenko</h3>
                                <h3 className={styles.job}>Front-end developer</h3>
                                <p className={styles.description}>
                                    Based in Minsk, Belarus
                                </p>
                            </div>

                            <div className={styles.buttonsContainer}>
                                <Link
                                    onMouseEnter={linkEnter}
                                    onMouseLeave={linkLeave}
                                    to={"projects"}
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration={100}
                                    className={`${buttons.btn} ${buttons.btnPrimary}`}
                                >
                                    View My
                                    Works
                                </Link>
                                <Link
                                    onMouseEnter={linkEnter}
                                    onMouseLeave={linkLeave}
                                    to={"contactMe"}
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration={100}
                                    className={`${buttons.btn} ${buttons.btnSecondary}`}
                                >
                                    Contact
                                    Me
                                </Link>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className={styles.photo}><img src="../../common/images/avatar.jpg" alt=""/></div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

