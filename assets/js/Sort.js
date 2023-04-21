export function sortMenu(listMenu) {
    let monTableau = new Array();
    listMenu.forEach((menu) => {
      menu.forEach((plat) => {
        monTableau.push(plat);
      });
    });
    console.log(monTableau.length);
    monTableau.sort(function (a, b) {
      return a.prix - b.prix;
    });
    return monTableau;
  }