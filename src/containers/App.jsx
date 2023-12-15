import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../containers/About";
import Contact from "../containers/Contact";
import Header from "../containers/Header";
import Projects from "../containers/Projects";
import Skills from "../containers/Skills";
import ParticlesContainer from "../containers/ParticlesContainer";
import Footer from "../containers/Footer";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <div className="w-full xl:w-[1600px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">
        <ParticlesContainer />
        < Home />
        < Header />
        <About />
        <Skills />
        < Projects />
        <Contact />
        

        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
