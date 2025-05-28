import "./styles.css";
import { renderHomePage } from "./home.js";
import { renderMenu } from "./menu";
import { aboutPage } from "./about";

//renderHomePage();

const homeBttn = document.querySelector(".home");
const menuBttn = document.querySelector(".menu");
const aboutBtnn = document.querySelector(".about");

homeBttn.addEventListener("click", () => renderHomePage());
menuBttn.addEventListener("click", () => renderMenu());
aboutBtnn.addEventListener("click", () => aboutPage());
