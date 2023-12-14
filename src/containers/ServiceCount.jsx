import React from "react";
import ServiceCard from "../components/ServiceCard";
import { FaGamepad, FaPlane, FaBook, FaCamera, FaMask, FaFilm, FaPodcast, FaPalette, } from "react-icons/fa";
import { FaHeadphones, FaPersonHiking } from "react-icons/fa6";

const ServiceCount = () => {
  return (
    <div className="w-full py-6  mt-10 flex items-center justify-center grid grid-cols-2 lg:grid-cols-4 gap-6">
      <ServiceCard icon={<FaGamepad/>} text={"Juegos"} />
      <ServiceCard icon={<FaHeadphones/>} text={"Música"}/>
      <ServiceCard icon={<FaPlane/>} text={"Viajar"} />
      <ServiceCard icon={<FaBook/>} text={"Libros"}/>
      <ServiceCard icon={<FaCamera/>} text={"Fotografía"} />
      <ServiceCard icon={<FaMask/>} text={"Teatro"}/>
      <ServiceCard icon={<FaPersonHiking/>} text={"Senderismo"} />
      <ServiceCard icon={<FaFilm/>} text={"Cine"}/>
      <ServiceCard icon={<FaPodcast/>} text={"Podcasts"} />
      <ServiceCard icon={<FaPalette/>} text={"Dibujo"}/>
    </div>
  );
};

export default ServiceCount;
