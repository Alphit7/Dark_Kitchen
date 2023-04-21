import { listerPlat } from "./listerPlat.js";
import { ajoutPanier } from "./Panier.js";
export function affichageHtml(listMenu) {
    listMenu.forEach((menu) => {
      let catmenu = menu[0].categorie[0];
      let sectionParent = document.createElement("section");
      sectionParent.setAttribute("class", catmenu);
      sectionParent.innerHTML = `<div class ="${catmenu}" ></div><h3>${catmenu}</h3>  `;
      menu.forEach((plat) => {
        sectionParent.append(listerPlat(plat));
        document.querySelector("main").append(sectionParent);
      });
    });
    ajoutPanier();
  }