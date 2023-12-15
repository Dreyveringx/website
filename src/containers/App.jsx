import React from "react";
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
      <div className="w-full xl:w-[1600px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">
        <ParticlesContainer />
        <Home />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
  );
};

export default App;
