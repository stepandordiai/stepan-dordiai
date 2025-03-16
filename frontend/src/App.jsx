import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/loading/Loading";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Playground from "./pages/playground/Playground";
import Games from "./pages/games/Games";
import Nav from "./components/nav/Nav";
import DarkMode from "./components/darkMode/DarkMode";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import CustomCursor from "./components/customCursor/CustomCursor";
import CustomCorners from "./components/customCorners/CustomCorners";
import MemoryCardGame from "./pages/memoryCardGame/MemoryCardGame";
// import CubeBackground from "./components/cubeBackground/CubeBackground";
import ProjectPage from "./pages/projectPage/ProjectPage";
import "./App.scss";

function App() {
    useEffect(() => {
        document
            .querySelector(".loading")
            .addEventListener("animationend", () => {
                document.querySelector(".wrapper").style.display = "initial";
            });
    }, []);

    return (
        <Router>
            <Loading />
            <div className="wrapper">
                <CustomCursor />
                <CustomCorners />
                <Header />
                <Nav />
                <DarkMode />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/project-page/:id" element={<ProjectPage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/playground" element={<Playground />} />
                    <Route path="/games" element={<Games />} />
                    <Route
                        path="/memory-card-game"
                        element={<MemoryCardGame />}
                    />
                </Routes>
                <Footer />
                {/* <CubeBackground /> */}
            </div>
        </Router>
    );
}

export default App;
