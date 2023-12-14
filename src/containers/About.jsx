import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import ServiceCount from "./ServiceCount";
const About = () => {
  return ( 
  <section 
  id="about" 
  className="mt-[-50px] lg:mt-[100px] flex items-center justify-center flex-col my-32">
    {/* Title */}
    <div className="w-full flex items-center justify-center py-32">
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: 200 }}
        exit={{ opacity: 0, width: 0}}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-around w-52">
        <img src={Leaf1} className="w-8 h-auto object-contain" alt="leaf" />
        <p className="text-2xl lg:text-3xl whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Sobre mi</p>
        <img src={Leaf2} className="w-8 h-auto object-contain" alt="leaf" />
      </motion.div>
    </div>

    {/* main content */}
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
      <div className="w-full flex items-center justify-center px-4 ">
      <div className="w-full flex flex-col items-start justify-start">
        <p className="text-texlight text-base tracking-wide text-justify text-xl">
        Hola, soy Jair Uribe.Estudiante apasionado por el desarrollo de software enfocado en diseñar interfaces atractivas y funcionales. Actualmente, adquiero habilidades en Python, HTML, CSS, JavaScript, FIGMA y React con un firme deseo de aprender y crecer en el campo del diseño web.
        </p>
      </div>
      </div>
      <div>
        <h2 className="text-3xl lg:text-4xl text-texlight flex items-center justify-center mt-20 lg:mt-[-50px]">Intereses</h2>
        <ServiceCount />
      </div>
    </div>
  </section>
  );
};

export default About;
