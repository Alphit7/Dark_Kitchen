import { fullMenu } from "./objetMenu.js";
import { darkMode } from "./DarkMode.js";
import { filterMenu } from "./Filter.js";
import { sortMenu } from "./Sort.js";
import { ajoutPanier, displayedcart } from "./Panier.js";
import { affichageHtml } from "./affichageHTML.js";
import { listerPlat } from "./listerPlat.js";
import { cleanHTML } from "./CleanHTML.js";
import { listertrier } from "./listertrier.js";

const checkout = document.querySelector("#checkout");
checkout.addEventListener("click", () => {
  displayedcart();
});

const listTri = document.querySelector(".listTri");
for (const iterator of listTri.children) {
  console.log(iterator);
  iterator.setAttribute("class", iterator.innerHTML.valueOf());
}
const bouton = document.body.querySelector("#darkmode");
const body = document.querySelector("body");
const main = document.querySelector("main");
const aside = document.querySelector("aside");
const cards = document.getElementsByClassName("card");
let cartItems = [];
let total = 0;

darkMode();
affichageHtml(fullMenu);
listertrier();

//affichageHtml([sortMenu(fullMenu)]);
//affichageHtml([filterMenu(fullMenu, ["poisson", ""])]);


