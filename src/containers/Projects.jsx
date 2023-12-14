import React, { useState } from "react";
import { Leaf1, Leaf2 } from "../assets";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectsData } from "../utils/helper";
import { FaGithub } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex items-center justify-center flex-col my-32 mt-0"
    >
      {/* Title */}
      <div className="w-full flex items-center justify-center py-32">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-8 h-auto object-contain" alt="leaf" />
          <p className="text-2xl lg:text-3xl whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Proyectos
          </p>
          <img src={Leaf2} className="w-8 h-auto object-contain" alt="leaf" />
        </motion.div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        <AnimatePresence>
          {ProjectsData &&
            ProjectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [isHoverred, setHoverred] = useState(false);

  const handleLinkClick = (e, url) => {
    e.preventDefault();
    window.open(url, '_blank');
  };

  return (
    <motion.div
      key={project.id}
      className="overflow-hidden cursor-pointer relative rounded-md"
      onMouseEnter={() => setHoverred(true)}
      onMouseLeave={() => setHoverred(false)}
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        className="w-full h-full object-contain rounded-lg"
        src={project.imgSrc}
      />

      {isHoverred && (
        <motion.div className="absolute inset-0 backdrop-blur-md bg-[rgba(0, 0, 0, 0.6)] flex items-center justify-center flex-col gap-2">
          <p className="text-xl text-primary">{project?.name}</p>
          <div className="flex gap-2">
            <a href={project?.gitURL} onClick={(e) => handleLinkClick(e, project?.gitURL)}>
              <FaGithub className="text-3xl text-white hover:text-primary" /> 
            </a>
            <a href={project?.liveURL} onClick={(e) => handleLinkClick(e, project?.liveURL)} className="flex">
              <FaGlobe className="text-3xl text-white hover:text-primary ml-2" />
            </a>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Projects;
