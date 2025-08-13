import { IProduct } from "@features/eurekashop/types";

export const STATIC_PRODUCTS_MAP: Record<string, IProduct> = {
  "prod-papier-toilette-01": {
    id: "prod-papier-toilette-01",
    name: "Papier toilette (10 rouleaux)",
    price: 5.99,
    qtyMin: 1,
    qtyMax: 5,
    shortDescription: "Double épaisseur, doux et résistant",
    feature: "100% recyclé",
    imageUrl: "https://m.media-amazon.com/images/I/91E6+8yq8VL._AC_UF1000,1000_QL80_.jpg",
    category: 'hygiene'
  },
  "prod-huile-vegetale-02": {
    id: "prod-huile-vegetale-02",
    name: "Huile végétale (1L)",
    price: 3.49,
    qtyMin: 1,
    qtyMax: 10,
    shortDescription: "Huile de tournesol raffinée",
    feature: "Sans cholestérol",
    imageUrl: "https://www.ocado.com/productImages/209/20904011_0_640x640.jpg",
    category: 'alimentation'
  },
  "prod-riz-basmati-03": {
    id: "prod-riz-basmati-03",
    name: "Riz basmati (5kg)",
    price: 8.99,
    qtyMin: 1,
    qtyMax: 3,
    shortDescription: "Riz long grain parfumé",
    feature: "Temps de cuisson réduit",
    imageUrl: "https://www.tilda.com/pub/media/catalog/product/cache/4a2a98a5d8ff1b9e5a1aef0d8a2a9e87/b/a/basmati-rice-5kg.jpg",
    category: 'alimentation'
  },
  "prod-sucre-04": {
    id: "prod-sucre-04",
    name: "Sucre en poudre (1kg)",
    price: 1.49,
    qtyMin: 1,
    qtyMax: 20,
    shortDescription: "Sucre blanc raffiné",
    feature: "Idéal pour pâtisseries",
    imageUrl: "https://www.ikea.com/gb/en/images/products/stralsmon-sugar-white__0711553_pe728208_s5.jpg",
    category: 'alimentation'
  },
  "prod-sel-iode-05": {
    id: "prod-sel-iode-05",
    name: "Sel iodé (500g)",
    price: 0.99,
    qtyMin: 1,
    qtyMax: 15,
    shortDescription: "Sel de mer enrichi en iode",
    feature: "Conservation optimale",
    imageUrl: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Iodized-Salt_shutterstock_668847520.jpg",
    category: 'alimentation'
  },
  "prod-lait-uht-06": {
    id: "prod-lait-uht-06",
    name: "Lait UHT (1L)",
    price: 1.29,
    qtyMin: 1,
    qtyMax: 12,
    shortDescription: "Lait entier stérilisé",
    feature: "Riche en calcium",
    imageUrl: "https://www.lidl.co.uk/assets/productImages/styles/zoom/960589_1.jpg",
    category: 'alimentation'
  },
  "prod-bidon-eau-07": {
    id: "prod-bidon-eau-07",
    name: "Bidon d'eau (5L)",
    price: 1.19,
    qtyMin: 1,
    qtyMax: 4,
    shortDescription: "Eau minérale naturelle",
    feature: "Bouchon sécurisé",
    imageUrl: "https://www.office-h2o.com/Images/Products/5-Gallon-Water-Bottle-1.jpg",
    category: 'alimentation'
  },
  "prod-gaz-12kg-08": {
    id: "prod-gaz-12kg-08",
    name: "Bouteille de gaz (12kg)",
    price: 24.99,
    qtyMin: 1,
    qtyMax: 1,
    shortDescription: "Gaz butane pour cuisson",
    feature: "Recharge standard",
    imageUrl: "https://www.elgas.com.au/wp-content/uploads/2020/09/45kg-LPG-gas-bottle-1.jpg",
    category: 'fournitures'
  },
  "prod-oeufs-12-09": {
    id: "prod-oeufs-12-09",
    name: "Œufs (alvéole de 12)",
    price: 2.99,
    qtyMin: 1,
    qtyMax: 5,
    shortDescription: "Œufs frais de poules élevées en plein air",
    feature: "Calibre moyen",
    imageUrl: "https://www.australianeggs.org.au/assets/Uploads/Eggs-in-carton.jpg",
    category: 'alimentation'
  },
  "prod-spaghetti-10": {
    id: "prod-spaghetti-10",
    name: "Spaghetti (500g)",
    price: 1.79,
    qtyMin: 1,
    qtyMax: 10,
    shortDescription: "Pâtes italiennes de qualité supérieure",
    feature: "Cuisson al dente",
    imageUrl: "https://www.barilla.com/-/media/Project/Barilla/Barilla-Global/Barilla-US/Products/Spaghetti/Barilla-Spaghetti-Product-Cutout.png",
    category: 'alimentation'
  },
  "prod-poulet-11": {
    id: "prod-poulet-11",
    name: "Poulet entier (1,5kg)",
    price: 7.49,
    qtyMin: 1,
    qtyMax: 2,
    shortDescription: "Poulet fermier frais",
    feature: "Prêt à cuisiner",
    imageUrl: "https://www.foodandwine.com/thmb/8YAIANQTZnGpF4_0SHBCXXNwNaQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/whole-roasted-chicken-FT-RECIPE0321-3a042b10cac94c0d91835a5a128c4c41.jpg",
    category: 'alimentation'
  },
  "prod-oignons-12": {
    id: "prod-oignons-12",
    name: "Oignons (filet 1kg)",
    price: 1.09,
    qtyMin: 1,
    qtyMax: 5,
    shortDescription: "Oignons jaunes frais",
    feature: "Conservation longue",
    imageUrl: "https://www.fruits-legumes.qc.ca/wp-content/uploads/2020/06/oignon-jaune.jpg",
    category: 'alimentation'
  },
  "prod-epices-13": {
    id: "prod-epices-13",
    name: "Épices mélangées (50g)",
    price: 2.49,
    qtyMin: 1,
    qtyMax: 8,
    shortDescription: "Mélange pour viandes et poissons",
    feature: "Sans additifs",
    imageUrl: "https://www.mccormick.com/-/media/project/oneweb/mccormick-us/mccormick/products/mccormick-gourmet/1000x1000/mccormick-gourmet-all-purpose-seasoning-blend-18-oz.jpg",
    category: 'alimentation'
  },
  "prod-cookies-14": {
    id: "prod-cookies-14",
    name: "Cookies (paquet de 6)",
    price: 3.29,
    qtyMin: 1,
    qtyMax: 4,
    shortDescription: "Biscuits aux pépites de chocolat",
    feature: "Moins sucré",
    imageUrl: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/7a202a5e-6dc4-4c0e-a5e9-9aae5a7e9a0b/Derivates/3a6b3f0b-5a5a-42f3-8f3e-30c8a96c9c5e.jpg",
    category: 'alimentation'
  },
  "prod-plantains-15": {
    id: "prod-plantains-15",
    name: "Plantains (régime)",
    price: 4.99,
    qtyMin: 1,
    qtyMax: 2,
    shortDescription: "Plantains mûrs à point",
    feature: "Origine locale",
    imageUrl: "https://www.africanbites.com/wp-content/uploads/2013/07/IMG_1690.jpg",
    category: 'alimentation'
  },
  "prod-tomates-16": {
    id: "prod-tomates-16",
    name: "Tomates (500g)",
    price: 1.79,
    qtyMin: 1,
    qtyMax: 5,
    shortDescription: "Tomates rondes fraîches",
    feature: "Parfaites pour les sauces",
    imageUrl: "https://www.producemarketguide.com/sites/default/files/Red%20round%20tomatoes_variety-page.png",
    category: 'alimentation'
  },
  "prod-sardines-17": {
    id: "prod-sardines-17",
    name: "Sardines à l'huile (boîte)",
    price: 1.99,
    qtyMin: 1,
    qtyMax: 12,
    shortDescription: "Sardines à l'huile d'olive",
    feature: "Riche en oméga-3",
    imageUrl: "https://www.kingoscar.com/wp-content/uploads/2020/08/evoo-3d-sardines.png",
    category: 'alimentation'
  },
  "prod-mayo-18": {
    id: "prod-mayo-18",
    name: "Mayonnaise (250ml)",
    price: 2.19,
    qtyMin: 1,
    qtyMax: 6,
    shortDescription: "Mayonnaise onctueuse",
    feature: "Sans gluten",
    imageUrl: "https://www.hellmanns.com/content/dam/unilever/hellmann_s_world/global/general_image_updated/hellmanns_real_mayonnaise-16425586-png.png",
    category: 'alimentation'
  },
  "prod-lait-poudre-19": {
    id: "prod-lait-poudre-19",
    name: "Lait en poudre (400g)",
    price: 5.49,
    qtyMin: 1,
    qtyMax: 3,
    shortDescription: "Lait écrémé instantané",
    feature: "Enrichi en vitamines",
    imageUrl: "https://www.nestle-family.com/sites/site.prod.nestle-family.com/files/styles/product/public/2022-08/nido-fortificada-400g.png",
    category: 'alimentation'
  }
};