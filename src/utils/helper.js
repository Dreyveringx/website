import {
  FaDiagramProject,
  FaEnvelope,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
} from "react-icons/fa6";

import MovieApi from "../assets/img/Project/thumb-movie-api.png";
import PokedexApi from "../assets/img/Project/PokedexApi.png";
import TodoList from "../assets/img/Project/TodoList.png";
import Calculadora from "../assets/img/Project/Calculadora.png";
import ClonDeezer from "../assets/img/Project/ClonDeezer.png";
import WebTributo from "../assets/img/Project/WebTributo.png";

export const Socials = [
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/jairuribe",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    url: "https://github.com/Dreyveringx",
    color: "#fff",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Inicio",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "Acerca de mi",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Habilidades",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Proyectos",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contacto",
  },
];

export const ProjectsData = [
  {
    id: `movie-${Date.now()}`,
    name: "Api Movies",
    imgSrc: MovieApi,
    gitURL: "https://github.com/Dreyveringx/Movie.git",
    liveURL: "https://movie-lac-eight.vercel.app/",
  },
  {
    id: `pokedex-${Date.now()}`,
    name: "Api Pokedex",
    imgSrc: PokedexApi,
    gitURL: "https://github.com/Dreyveringx/pokedex.git",
    liveURL: "https://pokedex-three-ashen.vercel.app/",
  },
  {
    id: `calculadora-${Date.now()}`,
    name: "Calculadora",
    imgSrc: Calculadora,
    gitURL: "https://github.com/Dreyveringx/calculadora.git",
    liveURL: "https://calculadora-inky-nine.vercel.app/",
  },
  {
    id: `todolist-${Date.now()}`,
    name: "Todo List",
    imgSrc: TodoList,
    gitURL: "https://github.com/Dreyveringx/To-Do--List.git",
    liveURL: "https://to-do-list-smoky-xi.vercel.app/",
  },
  {
    id: `clondeezer-${Date.now()}`,
    name: "Clon Deezer",
    imgSrc: ClonDeezer,
    gitURL: "https://github.com/Dreyveringx/project.git",
    liveURL: "https://project-alpha-silk.vercel.app/",
  },
  {
    id: `webtributo-${Date.now()}`,
    name: "Web Tributo",
    imgSrc: WebTributo,
    gitURL: "https://github.com/Dreyveringx/Tributo.git",
    liveURL: "https://tributo-nine.vercel.app/",
    figmaUrl:
      "https://www.figma.com/file/GMMjhsa4MtUsCCpfFn0hmp/Untitled?type=design&node-id=1%3A2&mode=design&t=bkFXmhJ7KArdPIkj-1",
  },
];
