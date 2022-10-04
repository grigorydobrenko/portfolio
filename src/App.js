import './App.css';
import Header from "./components/header/Header";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

function App() {
    return (
        <div className="App">
            <Header/>
            <About/>
            <Skills/>
        </div>
    );
}

export default App;
