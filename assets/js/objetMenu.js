/*The Collection Array: contain all cards data*/
let prix = [2, 2, 3.5, 4, 5, 7, 8, 9, 10, 12];

const menuSushi = [
  {
    name: "Sushi Avocat",
    prix: prix[0],
    picture: "./images/sushi-avocat.jpeg",
    categorie: ["sushi", "vege"],
    ingredients: ["Base riz", " avocat"],
  },
  {
    name: "Sushi Crevette",
    prix: prix[3],
    picture:"./images/sushi-crevette.jpeg",
    categorie: ["sushi", "crustace"],
    ingredients: ["Base riz", " crevette"],
  },
  {
    name: "Sushi Daurade",
    prix: prix[3],
    picture:"./images/sushi-daurade.jpeg",
    categorie: ["sushi", "poisson"],
    ingredients: ["Base riz", " daurade"],
  },
  {
    name: "Sushi Oeuf",
    prix: prix[0],
    picture:"./images/sushi-oeufs.jpeg",

    categorie: ["sushi", "oeuf"],
    ingredients: ["Base riz", " oeuf"],
  },
  {
    name: "Sushi Salmon Cheese",
    prix: prix[2],
    picture:"./images/sushi-saumon-fromage.jpeg",
    categorie: ["sushi", "poisson", "lactose"],
    ingredients: ["Base riz", " saumon", " fromage"],
  },
  {
    name: "Sushi Saumon",
    prix: prix[0],
    picture:"./images/sushi-saumon.jpeg",
    categorie: ["sushi", "poisson"],
    ingredients: ["Base riz", " saumon"],
  },

  {
    name: "Sushi Thon",
    prix: prix[2],
    picture:"./images/sushi-thon.jpeg",
    categorie: ["sushi", "poisson"],
    ingredients: ["Base riz", "  thon rouge"],
  },
];

const menuMaki = [
  {
    name: "Maki Avocat",
    prix: prix[0],
    picture:"./images/maki-avocat.jpeg",
    categorie: ["maki", "vege"],
    ingredients: ["Base riz-nori", " avocat"],
  },
  {
    name: "Maki Avocat Wasabi",
    prix: prix[2],
    picture:"./images/maki-avocat-wasabi.jpeg",
    categorie: ["maki", "vege", "piquant"],
    ingredients: ["Base riz-nori", " avocat", " wasabi"],
  },
  {
    name: "Maki Cheese Avocat",
    prix: prix[2],
    picture:"./images/maki-cheese-avocat.jpeg",
    categorie: ["maki", "vege", "lactose"],
    ingredients: ["Base riz-nori", " avocat", " fromage"],
  },
  {
    name: "Maki Concombre",
    prix: prix[0],
    picture:"./images/maki-concombre.jpeg",

    categorie: ["maki", "vege"],
    ingredients: ["Base riz-nori", " concombre"],
  },
  {
    name: "Maki Daurade Kumquat",
    prix: prix[3],
    picture:"./images/maki-daurade-kumquat.jpeg",
    categorie: ["maki", "poisson"],
    ingredients: ["Base riz-nori", " daurade", " kumquat"],
  },
  {
    name: "Maki Saumon",
    prix: prix[0],
    picture:"./images/maki-saumon.jpeg",
    categorie: ["maki", "poisson"],
    ingredients: ["Base riz-nori", " avocat", " saumon"],
  },
  {
    name: "Maki Thon",
    prix: prix[2],
    picture:"./images/maki-thon.jpeg",
    categorie: ["maki", "poisson"],
    ingredients: ["Base riz-nori", " avocat", " thon rouge"],
  },
];

const menuRolls = [
  {
    name: "Cajun Roll",
    prix: prix[2],
    picture:"./images/rolls-cajun.jpeg",
    categorie: ["rolls", "volaille", "oeuf"],
    ingredients: ["Base riz-nori", " poulet", " mayonnaise"],
  },
  {
    name: "California Nordic Roll",
    prix: prix[2],
    picture:"./images/rolls-california-nordic.jpeg",
    categorie: ["rolls", "poisson"],
    ingredients: ["Base riz-nori", " saumon", " sésame"],
  },
  {
    name: "California Pacific",
    prix: prix[0],
    picture:"./images/rolls-california-nordic.jpeg",

    categorie: ["rolls", "poisson"],
    ingredients: ["Base riz-nori", " saumon", " avocat", " ciboulette"],
  },
  {
    name: "California Saumon Avocat",
    prix: prix[2],
    picture:"./images/rolls-california-nordic.jpeg",

    categorie: ["rolls", "poisson", "lactose"],
    ingredients: ["Base riz-nori", " saumon", " avocat"],
  },
  {
    name: "Daurade Wasabi",
    prix: prix[3],
    picture:"./images/rolls-daurade-wasabi.jpeg",

    categorie: ["rolls", "poisson", "piquant"],
    ingredients: ["Base riz-nori", " daurade", " wasabi"],
  },
  {
    name: "Dengaku Roll",
    prix: prix[0],
    picture:"./images/rolls-dengaku.jpeg",

    categorie: ["rolls", "vege", "piquant"],
    ingredients: ["Base riz-nori", " sésame", " wasabi", " aubergine"],
  },
  {
    name: "The upside Down Roll",
    prix: prix[0],
    picture:"./images/rolls-the-upside-down.jpeg",
    categorie: ["rolls", "vege", "oeuf"],
    ingredients: ["Base riz-nori", " chou rouge mariné", " mayonnaise"],
  },
];

const menuSashimi = [
  {
    name: "Sashimi Assortiment",
    prix: prix[7],
    picture:"./images/sashimi-assortiment.jpeg",

    categorie: ["sashimi", "poisson", "vege"],
    ingredients: ["Tranche de saumon, thon et légume", " soja"],
  },
  {
    name: "Sashimi Légume",
    prix: prix[4],
    picture:"./images/sashimi-vegan.jpeg",

    categorie: ["sashimi", "vege"],
    ingredients: ["Tranche de légume", " soja"],
  },
  {
    name: "Sashimi Mixte Thon-Saumon",
    prix: prix[7],
    picture:"./images/sashimi-thon-saumon.jpeg",
    categorie: ["sashimi", "poisson"],
    ingredients: ["Tranche de Thon-Saumon", " soja"],
  },
  {
    name: "Sashimi Thon 5pcs",
    prix: prix[9],
    picture:"./images/sashimi-saumon.jpeg",

    categorie: ["sashimi", "poisson"],
    ingredients: ["Tranche de thon", " soja"],
  },
  {
    name: "Sashimi Thon",
    prix: prix[4],
    picture:"./images/sashimi-saumon.jpeg",
    categorie: ["sashimi", "poisson"],
    ingredients: ["Tranche de thon", " soja"],
  },
  {
    name: "Sashimi Saumon 5pcs",
    prix: prix[9],
    picture:"./images/sashimi-saumon.jpeg",

    categorie: ["sashimi", "poisson"],
    ingredients: ["Tranche de thon", " soja"],
  },
  {
    name: "Sashimi Saumon",
    prix: prix[4],
    picture:"./images/sashimi-saumon.jpeg",
    categorie: ["sashimi", "poisson"],
    ingredients: ["Tranche de thon", " soja"],
  },
];

const menuOnigiri = [
  {
    name: "Onigiri Nature",
    prix: prix[3],
    picture:"./images/onigiri-nature.jpeg",

    categorie: ["onigiri", "vegan"],
    ingredients: ["Boule de riz", " sésame"],
  },
  {
    name: "Onigiri Oeuf",
    prix: prix[0],
    picture:"./images/onigiri-oeuf.jpeg",
    categorie: ["onigiri", "oeuf"],
    ingredients: ["Boule de Riz", " oeuf"],
  },
  {
    name: "Onigiri Saumon",
    prix: prix[3],
    picture:"./images/onogiri-thon.jpeg",

    categorie: ["onigiri", "poisson"],
    ingredients: ["Boule de riz", " saumon"],
  },
  {
    name: "Onigiri Thon",
    prix: prix[2],
    picture:"./images/onogiri-thon.jpeg",

    categorie: ["onigiri", "poisson"],
    ingredients: ["Boule de Riz", " thon rouge"],
  },
  {
    name: "Onigiri Thon Mayonnaise",
    prix: prix[2],
    picture:"",

    categorie: ["onigiri", "poisson", "oeuf"],
    ingredients: ["Boule de Riz", " thon", " mayonnaise"],
  },
];

const menuRamen = [
  {
    name: "Ramen Boeuf",
    prix: prix[6],
    picture:"./images/ramen-boeuf.jpeg",

    categorie: ["ramen", "viande"],
    ingredientss: ["Bouillon de nouille", " boeuf", " soja", " oignon ciboule"],
  },
  {
    name: "Ramen Canard",
    prix: prix[9],
    picture:"./images/ramen-canard.jpeg",

    categorie: ["ramen", "volaille", "crustace"],
    ingredientss: [
      "Bouillon de nouille",
      " canard",
      " oeuf",
      " naruto",
      " soja",
      " oignon ciboule",
    ],
  },
  {
    name: "Ramen Crevette",
    prix: prix[8],
    picture:"./images/ramen-crevette.jpeg",

    categorie: ["ramen", "crustace"],
    ingredientss: [
      "Bouillon de nouille",
      " crevette",
      " soja",
      " oignon ciboule",
    ],
  },
  {
    name: "Ramen Légumes",
    prix: prix[6],
    picture:"./images/ramen-legumes.jpeg",

    categorie: ["ramen", "vege"],
    ingredientss: [
      "Bouillon de nouille",
      " légumes",
      " soja",
      " oignon ciboule",
    ],
  },
  {
    name: "Ramen au poulet",
    prix: prix[0],
    picture:"./images/ramen-poulet.jpeg",

    categorie: ["ramen", "volaille", "crustace"],
    ingredients: [
      "Bouillon de nouille",
      " poulet",
      " naruto",
      " soja",
      " oignon ciboule",
    ],
  },
  {
    name: "Ramen au porc",
    prix: prix[0],
    picture:"./images/ramen-porc.jpeg",

    categorie: ["ramen", "viande", "crustace"],
    ingredientss: [
      "Bouillon de nouille",
      " porc",
      " naruto",
      " soja",
      " oignon ciboule",
    ],
  },
];
const menuBoissons = [
  {
    name: "Spa",
    prix: prix[0],
    picture:"./images/spa.jpeg",
    categorie: ["boisson", "non_petillant", "soft"],
  },
  {
    name: "Chaudfontaine Eau Pétillante",
    prix: prix[0],
    picture:"./images/chaudefontaine.jpeg",
    categorie: ["boisson", "petillant", "soft"],
  },
  {
    name: "Coca Cola",
    prix: prix[0],
    picture:"./images/coca.jpeg",
    categorie: ["boisson", "petillant", "soft"],
  },
  {
    name: "Coca Cola Zero",
    prix: prix[0],
    picture:"./images/coca-zero.jpeg",
    categorie: ["boisson", "petillant", "soft"],
  },
  {
    name: "Bière Asahi",
    prix: prix[0],
    picture:"./images/biere-asahi.jpeg",
    categorie: ["boisson", "petillant", "alcool"],
  },
  {
    name: "Saké Shirakabegura",
    prix: prix[0],
    picture:"./images/sake1.jpeg",
    categorie: ["boisson", "non_petillant", "alcool"],
  },
  {
    name: "Saké Rihaku Le Poète Errant",
    prix: prix[0],
    picture:"./images/sake2.jpeg",
    categorie: ["boisson", "non_petillant", "alcool"],
  },
];

const menuDessert = [
  {
    name: "Cheesecake",
    prix: prix[0],
    picture:"./images/cheesecake.jpeg",
    categorie: ["dessert", "lactose", "vege"],
  },
  {
    name: "Moelleux au Chocolat",
    prix: prix[2],
    picture:"./images/moelleux-chocolat.jpeg",
    categorie: ["dessert", "lactose", "vege"],
  },
  {
    name: "Mousse au Chocolat",
    prix: prix[2],
    picture:"./images/mousse-chocolat.jpeg",

    categorie: ["dessert", "lactose", "vege"],
  },
  {
    name: "Mochi Glacé Mangue",
    prix: prix[4],
    picture:"./images/mochi-mangue.jpeg",

    categorie: ["dessert", "lactose", "vege"],
  },
  {
    name: "Mochi Glacé Coco",
    prix: prix[4],
    picture:"./images/mochi-coco.jpeg",

    categorie: ["dessert", "lactose", "vege"],
  },
  {
    name: "Salade de Fruits du Moment",
    prix: prix[2],
    picture:"./images/salade-fruits.jpeg",

    categorie: ["dessert", "vege"],
  },
  {
    name: "Mangue Fraîche",
    prix: prix[0],
    picture:"./images/mangue.jpeg",

    categorie: ["dessert", "vege"],
  },
];

export const fullMenu = [
  menuSushi,
  menuMaki,
  menuRolls,
  menuSashimi,
  menuOnigiri,
  menuRamen,
  menuBoissons,
  menuDessert,
];
