import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero } from "../assets";
import { HeroTypeWritter, HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";


const Home = () => {
  return (
    <section id="home" className="flex items-center justify-center flex-col gap-12 relative ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="w-full h-full flex flex-col items-center lg:item-start justify-center gap-4">

          <h2 className="text-3xl lg:text-4xl text-texlight">
            Hola, soy
            <span className="block tracking-wider text-4xl lg:text-6xl mt-6 text-primary">
              {""}
              Jair Uribe </span>
          </h2> 
          <h2 className="block tracking-wider text-2xl text-center lg:text-4xl text-texlight mt-4"> Desarrollador frontend
            {" "}
            <HeroTypeWritter
            speed={100}
            words={["Transformando ideas en arte visual."]}
            />
          </h2>
          <p className="text-base text-texlight mt-6 text-center lg:text-left pb-7" >
          Apasionado por lo que hago y dispuesto a enfrentar desafíos. Amante de la transformación digital y la accesibilidad para lograr una verdadera inclusión. Mi punto único radica en mi versatilidad, impulsándome a adaptarme a diversos entornos de trabajo.
          </p>

          {/*Socials*/}
          <div className="flex item-center justify-center gap-16 mt16 ">
          <AnimatePresence>
           {Socials && Socials.map((item, index) => (
              <HomeSocialLinks key={index} data={item} index={index}/>
            ))}
          </AnimatePresence>
          </div>
          
          {/*Hire me*/}
          <a href="#"
          style={{boxShadow : "inset 0px 0px 10px rgba(255, 255, 255, 0.3)"}} 
          className="mt-12 border border-[rgba(255,255,255,0.3)] rounded-xl px-8 py-3 active:95 group hover:border-primary">
            <p className="text-texlight group-hover:text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Descargar CV</p>
          </a>   

        </div>
        <div className="w-full h-full flex items-center justify-center lg:item-center"> 
          <motion.img
            initial={{ y:0}}
            animate={{ y: [-50, 10] }}
            transition={{
              duration: 3,
              ease: "linear",
              }}
            src={Hero} className="w-auto h-auto object-contain rounded-full"
          />
          
        </div>

      </div>

    </section>
  );
};

export default Home;
