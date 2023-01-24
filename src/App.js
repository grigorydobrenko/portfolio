import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import {Main} from "./components/main/Main";
import {AboutMe} from "./components/aboutMe/AboutMe";
import {motion} from 'framer-motion';

export const CursorVariantContext = React.createContext(null);

function App() {
    const [mousePosition, setMousePosition] = React.useState({
        x: 0,
        y: 0
    });
    const [cursorVariant, setCursorVariant] = React.useState("default");


    React.useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        },
        link: {
            height: 70,
            width: 70,
            x: mousePosition.x - 35,
            y: mousePosition.y - 35,
            backgroundColor: 'rgba(251, 80, 59, 0.4)',
        }
    }

    const linkEnter = () => setCursorVariant("link");
    const linkLeave = () => setCursorVariant("default");

    return (

        <div className="App">
            <CursorVariantContext.Provider value={{
                linkEnter,
                linkLeave
            }}>
                <Header/>
                <Main/>
                <AboutMe/>
                <Skills/>
                <Projects/>
                <Contacts/>
                <Footer/>
            </CursorVariantContext.Provider>
            <motion.div
                className='cursor'
                variants={variants}
                animate={cursorVariant}
            />
        </div>

    );
}

export default App;



