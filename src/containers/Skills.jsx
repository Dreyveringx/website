import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import { SkillCard } from "../components";
import  FigmaIcon from "../assets/img/FigmaIcon.png";
import  HtmlIcon from "../assets/img/HtmlIcon.png";
import  CssIcon  from "../assets/img/CssIcon.png";
import JsIcon from "../assets/img/JsIcon.png";
import ReactIcon from "../assets/img/ReactIcon.png";
import PythonIcon from "../assets/img/PythonIcon.png";
import SassIcon from "../assets/img/SassIcon.png";
import TailwindIcon from "../assets/img/TailwindIcon.png";

const Skills = () => {
  return (
    <section
      id="skills"
      className=""
    >
      {/* Title */}
      <div className="w-full flex items-center justify-center py-10">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-8 h-auto object-contain" alt="leaf" />
          <p className="text-2xl lg:text-3xl whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Habilidades
          </p>
          <img src={Leaf2} className="w-8 h-auto object-contain" alt="leaf" />
        </motion.div>
      </div>

      {/* main content */}
      <div className="">
        <div className="">
          <p className="text-3xl text-primary ">
          En el camino del aprendizaje, persiguiendo la maestría
          </p>
          <p className="text-texlight mt-10 text-xl">
          Mi trayectoria en el desarrollo de software se ha fusionado con mi pasión por el diseño, dando como resultado una búsqueda constante por interfaces atractivas y funcionales. Enfocado en el diseño web, actualmente estoy inmerso en el aprendizaje de tecnologías clave como React, HTML, JavaScript,  CSS, Tailwind, Sass, Git, github y Figma. Este viaje de aprendizaje continuo refleja mi firme compromiso de crecimiento en el campo del diseño web. Mi motor impulsor es el diseño centrado en el usuario, buscando constantemente entregar experiencias digitales de alta calidad que no solo satisfagan, sino que deleiten a los usuarios. Esta combinación de habilidades técnicas y creativas se convierte en el cimiento sobre el cual construyo cada proyecto, siempre con la meta de superar expectativas y crear conexiones significativas a través del diseño digital.
          </p>
        </div>

        {/* skills */}
        <div className=" flex items-center justify-center mt-8" >
        <div className="w-full p-4 sm:p-6 lg:p-8 max-w-screen-lg">
        <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-8 py-8 ">
        <SkillCard
            skill={
              <div className="flex items-center">
              <img className="w-10 h-auto object-contain mr-2" src={FigmaIcon} alt="html icon" />
              <span>Figma</span>
              </div>
            }
            percentaje={"70%"}
            color={"#00cf7f"}
            move={false}
          />
          <SkillCard
            skill={
              <div className="flex items-center">
              <img className="w-10 h-auto object-contain mr-2" src={HtmlIcon} alt="html icon" />
              <span>HTML</span>
              </div>
            }
            percentaje={"70%"}
            color={"#FF3F3F"}
            move={true}
          />
          <SkillCard
            skill={
              <div className="flex items-center">
              <img className="w-10 h-auto object-contain mr-2" src={CssIcon} alt="html icon" />
              <span>Css</span>
              </div>
            }
            percentaje={"60%"}
            color={"#008FFF"}
            move={false}
          />
          <SkillCard
            skill={
              <div className="flex items-center">
              <img className="w-10 h-auto object-contain mr-2" src={JsIcon} alt="html icon" />
              <span>JavaScript</span>
              </div>
            }
            percentaje={"50%"}
            color={"#FFB900"}
            move={true}
          />
          <SkillCard
            skill={
              <div className="flex items-center">
              <img className="w-10 h-auto object-contain mr-2" src={ReactIcon} alt="html icon" />
              <span>React</span>
              </div>
            }
            percentaje={"40%"}
            color={"#00FFF3"}
            move={false}
          />
          <SkillCard
            skill={
              <div className="flex items-center">
              <img className="w-10 h-auto object-contain mr-2" src={PythonIcon} alt="html icon" />
              <span>Python</span>
              </div>
            }
            percentaje={"30%"}
            color={"#4584b6"}
            move={true}
          />
          <SkillCard
            skill={
              <div className="flex items-center">
              <img className="w-10 h-auto object-contain mr-2" src={SassIcon} alt="html icon" />
              <span>Sass</span>
              </div>
            }
            percentaje={"30%"}
            color={"#c76494"}
            move={false}
          />
          <SkillCard
            skill={
              <div className="flex items-center">
              <img className="w-10 h-auto object-contain mr-2" src={TailwindIcon} alt="html icon" />
              <span>TaildwindCSS</span>
              </div>
            }
            percentaje={"30%"}
            color={"#44a8b3"}
            move={true}
          />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;