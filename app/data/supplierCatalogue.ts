export type CatalogueItem = {
  id?: string;
  ingredient: string;
  supplier: string;
  supplierProduct: string;
  unit: string;
  fallbackPrice: number | null;
  preferred?: boolean;
};

export const supplierCatalogue: CatalogueItem[] = [
  // =========================================================
  // FIN AND FLOUNDER
  // =========================================================

  {
    ingredient: "Trout",
    supplier: "Fin and Flounder",
    supplierProduct: "Trout Chalk Stream - 2.5/3kg - Whole No Prep",
    unit: "kg",
    fallbackPrice: 12.5,
  },
  {
    ingredient: "Cod",
    supplier: "Fin and Flounder",
    supplierProduct: "Cod Fillet",
    unit: "kg",
    fallbackPrice: 24.95,
    preferred: true,
  },
  {
    ingredient: "Cod whole",
    supplier: "Fin and Flounder",
    supplierProduct: "Cod Whole - 4/7kg Filleted",
    unit: "kg",
    fallbackPrice: 11.95,
  },
  {
    ingredient: "Hake",
    supplier: "Fin and Flounder",
    supplierProduct: "Hake - 3/4kg - Descale Fillet",
    unit: "kg",
    fallbackPrice: 13.95,
  },
  {
    ingredient: "Black cod",
    supplier: "Fin and Flounder",
    supplierProduct: "Frozen Black Cod - 2 to 3kg - Head Off",
    unit: "kg",
    fallbackPrice: 25.9,
    preferred: true,
  },
  {
    ingredient: "King prawn",
    supplier: "Fin and Flounder",
    supplierProduct: "King Prawn - 10/20 pieces per kg",
    unit: "kg",
    fallbackPrice: 15.5,
  },
  {
    ingredient: "Stonebass",
    supplier: "Fin and Flounder",
    supplierProduct: "Stone Bass - Fillet",
    unit: "kg",
    fallbackPrice: 13.8,
    preferred: true,
  },
  {
    ingredient: "26/30 prawn",
    supplier: "Fin and Flounder",
    supplierProduct:
      "Frozen Raw Peel Deveined Prawn - 26/30 Pieces Per Kg (1kg Bag)",
    unit: "kg",
    fallbackPrice: 10.5,
    preferred: true,
  },
  {
    ingredient: "Tuna loin",
    supplier: "Fin and Flounder",
    supplierProduct: "Tuna Loin - AAA - Line Caught",
    unit: "kg",
    fallbackPrice: 32.5,
    preferred: true,
  },
  {
    ingredient: "Bluefin tuna loin",
    supplier: "Fin and Flounder",
    supplierProduct: "Blue Fin Tuna Loin",
    unit: "kg",
    fallbackPrice: 34.95,
  },
  {
    ingredient: "Squid",
    supplier: "Fin and Flounder",
    supplierProduct: "Squid - 300/500g - Cleaned",
    unit: "kg",
    fallbackPrice: 16.5,
  },
  {
    ingredient: "Baby squid",
    supplier: "Fin and Flounder",
    supplierProduct: "Frozen Chiperoni Baby Squid",
    unit: "kg",
    fallbackPrice: null,
  },
  {
    ingredient: "Octopus",
    supplier: "Fin and Flounder",
    supplierProduct: "Frozen Octopus - 3 to 4kg",
    unit: "kg",
    fallbackPrice: null,
  },
  {
    ingredient: "Sea bass whole",
    supplier: "Fin and Flounder",
    supplierProduct:
      "Seabass Wild - 500/1000 - Hook + Line - Descale Gutted",
    unit: "kg",
    fallbackPrice: 19.95,
  },

  // =========================================================
  // JAMES KNIGHT OF MAYFAIR
  // Backup fish supplier
  // =========================================================

  {
    ingredient: "Trout",
    supplier: "James Knight of Mayfair",
    supplierProduct: "Chalk Stream Trout XL, Whole",
    unit: "kg",
    fallbackPrice: null,
    preferred: false,
  },
  {
    ingredient: "Cod",
    supplier: "James Knight of Mayfair",
    supplierProduct: "Cod Fillets Large",
    unit: "kg",
    fallbackPrice: null,
    preferred: false,
  },
  {
    ingredient: "16/20 prawn",
    supplier: "James Knight of Mayfair",
    supplierProduct: "Frozen Raw Peeled 16/20 (1kg)",
    unit: "each",
    fallbackPrice: null,
  },
  {
    ingredient: "26/30 prawn",
    supplier: "James Knight of Mayfair",
    supplierProduct: "Frozen Raw Peeled Blocks 26/30",
    unit: "each",
    fallbackPrice: null,
    preferred: false,
  },
  {
    ingredient: "Tiger prawn 16/20",
    supplier: "James Knight of Mayfair",
    supplierProduct: "Frozen Tiger Prawns 16/20 (1kg)",
    unit: "each",
    fallbackPrice: null,
  },
  {
    ingredient: "King prawn",
    supplier: "James Knight of Mayfair",
    supplierProduct: "Frozen Tigers Prawns 10/20",
    unit: "kg",
    fallbackPrice: null,
    preferred: false,
  },
  {
    ingredient: "Stonebass",
    supplier: "James Knight of Mayfair",
    supplierProduct: "Stone Basse Filleted",
    unit: "each",
    fallbackPrice: null,
    preferred: false,
  },
  {
    ingredient: "Tuna loin",
    supplier: "James Knight of Mayfair",
    supplierProduct: "Tuna Loin Fresh Yellowfin",
    unit: "kg",
    fallbackPrice: null,
    preferred: false,
  },
  {
    ingredient: "Tuna sashimi",
    supplier: "James Knight of Mayfair",
    supplierProduct: "Tuna Loin Sashimi",
    unit: "kg",
    fallbackPrice: null,
  },
  {
    ingredient: "Salmon",
    supplier: "James Knight of Mayfair",
    supplierProduct: "Salmon Farmed Fillets",
    unit: "kg",
    fallbackPrice: null,
  },
  {
    ingredient: "Squid tubes",
    supplier: "James Knight of Mayfair",
    supplierProduct: "Frozen Squid Tubes U5 (1kg)",
    unit: "each",
    fallbackPrice: null,
  },
  {
    ingredient: "Mussels",
    supplier: "James Knight of Mayfair",
    supplierProduct: "Scottish Large Mussels (1kg)",
    unit: "kg",
    fallbackPrice: null,
  },

  // =========================================================
  // CRAZY DAN'S HOUSE OF MEAT
  // K&D Meats = Crazy Dan's
  // =========================================================

  {
    ingredient: "Whole chicken",
    supplier: "Crazy Dan's House of Meat",
    supplierProduct: "Whole corn fed chicken",
    unit: "each",
    fallbackPrice: null,
  },
  {
    ingredient: "Chicken thigh",
    supplier: "Crazy Dan's House of Meat",
    supplierProduct: "Skin off boneless chicken thighs",
    unit: "kg",
    fallbackPrice: null,
    preferred: true,
  },
  {
    ingredient: "Chicken thigh skin on",
    supplier: "Crazy Dan's House of Meat",
    supplierProduct: "Chicken thighs skin on",
    unit: "kg",
    fallbackPrice: null,
  },
  {
    ingredient: "Short rib",
    supplier: "Crazy Dan's House of Meat",
    supplierProduct: "Beef Ribs",
    unit: "kg",
    fallbackPrice: 8.5,
    preferred: true,
  },
  {
    ingredient: "Ribeye",
    supplier: "Crazy Dan's House of Meat",
    supplierProduct: "Ribeye steak omugi",
    unit: "kg",
    fallbackPrice: null,
    preferred: true,
  },
  {
    ingredient: "Tomahawk",
    supplier: "Crazy Dan's House of Meat",
    supplierProduct: "Tomahawk Ribeye Large bone 1.2 -1.3 kg",
    unit: "each",
    fallbackPrice: null,
  },
  {
    ingredient: "Beef brisket",
    supplier: "Crazy Dan's House of Meat",
    supplierProduct: "UK Beef brisket",
    unit: "kg",
    fallbackPrice: null,
    preferred: true,
  },
  {
    ingredient: "Ox cheek",
    supplier: "Crazy Dan's House of Meat",
    supplierProduct: "Ox cheeks",
    unit: "kg",
    fallbackPrice: null,
    preferred: true,
  },
  {
    ingredient: "Birria beef",
    supplier: "Crazy Dan's House of Meat",
    supplierProduct: "UK Beef brisket / Ox cheeks",
    unit: "kg",
    fallbackPrice: null,
  },
  {
    ingredient: "Pork belly",
    supplier: "Crazy Dan's House of Meat",
    supplierProduct: "Pork belly no ribs",
    unit: "kg",
    fallbackPrice: 6,
    preferred: true,
  },
  {
    ingredient: "Pork skin",
    supplier: "Crazy Dan's House of Meat",
    supplierProduct: "Pork skin",
    unit: "kg",
    fallbackPrice: 2.2,
  },
  {
    ingredient: "Carnitas pork",
    supplier: "Crazy Dan's House of Meat",
    supplierProduct: "Pork collar 1cm steaks",
    unit: "kg",
    fallbackPrice: null,
  },
  {
    ingredient: "Chorizo",
    supplier: "Crazy Dan's House of Meat",
    supplierProduct: "Chorizo sausages",
    unit: "kg",
    fallbackPrice: null,
  },
  {
    ingredient: "Lamb cutlets",
    supplier: "Crazy Dan's House of Meat",
    supplierProduct: "Lamb Rack Whit Bones",
    unit: "kg",
    fallbackPrice: null,
    preferred: true,
  },
  {
    ingredient: "Beef bones",
    supplier: "Crazy Dan's House of Meat",
    supplierProduct: "Beef bones",
    unit: "kg",
    fallbackPrice: null,
  },
  {
    ingredient: "Chicken wings",
    supplier: "Crazy Dan's House of Meat",
    supplierProduct: "Chicken wings",
    unit: "kg",
    fallbackPrice: null,
  },

  // =========================================================
  // MASAFINA
  // =========================================================

  {
    ingredient: "Masafina tortilla 12cm",
    supplier: "Masafina",
    supplierProduct:
      "Case of 12cm Heirloom Corn Tortillas (5 x 1kg)",
    unit: "case",
    fallbackPrice: 36.95,
    preferred: true,
  },
  {
    ingredient: "Masafina tortilla 10cm",
    supplier: "Masafina",
    supplierProduct:
      "Case of 10cm Yellow Heirloom Corn Tortillas (6 x 750g)",
    unit: "case",
    fallbackPrice: 35.95,
    preferred: true,
  },
  {
    ingredient: "Masafina blue corn tortilla 12cm",
    supplier: "Masafina",
    supplierProduct:
      "Case of 12cm Purple Heirloom Corn Tortillas (5 x 1kg)",
    unit: "case",
    fallbackPrice: 39.95,
    preferred: true,
  },
  {
    ingredient: "Masafina tortilla 15cm",
    supplier: "Masafina",
    supplierProduct:
      "Case of 15cm Heirloom Corn Tortillas (5 x 1kg)",
    unit: "case",
    fallbackPrice: 34.95,
  },

  // =========================================================
  // MEXGROCER
  // =========================================================

  {
    ingredient: "Achiote paste",
    supplier: "Mexgrocer",
    supplierProduct: "El Yucateco - Achiote Paste 1kg",
    unit: "each",
    fallbackPrice: null,
    preferred: true,
  },
  {
    ingredient: "Chipotle in adobo",
    supplier: "Mexgrocer",
    supplierProduct: "La Costena - Chipotle in Adobo 2.8kg",
    unit: "each",
    fallbackPrice: null,
    preferred: true,
  },
  {
    ingredient: "Black beans",
    supplier: "Mexgrocer",
    supplierProduct: "Dried Black Beans 25kg",
    unit: "bag",
    fallbackPrice: null,
    preferred: true,
  },
  {
    ingredient: "Agave syrup",
    supplier: "Mexgrocer",
    supplierProduct: "Organic Agave Syrup 26kg",
    unit: "each",
    fallbackPrice: null,
  },
  {
    ingredient: "Abuelita chocolate",
    supplier: "Mexgrocer",
    supplierProduct: "Abuelita chocolate 540g",
    unit: "each",
    fallbackPrice: 14.4,
  },
  {
    ingredient: "Dulce de leche",
    supplier: "Mexgrocer",
    supplierProduct: "Chatica - Dulce de Leche 450g",
    unit: "each",
    fallbackPrice: null,
  },
  {
    ingredient: "Mole rojo",
    supplier: "Mexgrocer",
    supplierProduct: "Azteca - Mole rojo 5kg",
    unit: "each",
    fallbackPrice: null,
  },
  {
    ingredient: "Ancho chilli",
    supplier: "Mexgrocer",
    supplierProduct: "Ancho chilli",
    unit: "kg",
    fallbackPrice: null,
  },
  {
    ingredient: "Aji Amarillo",
    supplier: "Mexgrocer",
    supplierProduct: "Goya Aji Amarillo Paste",
    unit: "each",
    fallbackPrice: null,
    preferred: true,
  },
  {
    ingredient: "Avocado leaf powder",
    supplier: "Mexgrocer",
    supplierProduct: "Avocado Leaf Powder 1kg",
    unit: "each",
    fallbackPrice: null,
  },
  {
    ingredient: "Morita chilli powder",
    supplier: "Mexgrocer",
    supplierProduct: "Chipotle Morita Powder 100g",
    unit: "each",
    fallbackPrice: null,
  },
  {
    ingredient: "Morita chilli",
    supplier: "Mexgrocer",
    supplierProduct: "Morita Chipotle Whole Dried Chilli 1kg",
    unit: "each",
    fallbackPrice: null,
  },
  {
    ingredient: "Pasilla chilli",
    supplier: "Mexgrocer",
    supplierProduct: "Tajin - Pasilla Chilli 75g",
    unit: "each",
    fallbackPrice: null,
  },
  {
    ingredient: "Arbol chilli",
    supplier: "Mexgrocer",
    supplierProduct: "Arbol chilli",
    unit: "pack",
    fallbackPrice: null,
  },
  {
    ingredient: "Mexican oregano",
    supplier: "Mexgrocer",
    supplierProduct: "Mexican oregano",
    unit: "each",
    fallbackPrice: null,
  },
  {
    ingredient: "Cactus",
    supplier: "Mexgrocer",
    supplierProduct: "La Fonda Cactus Whole Leaves Pouch",
    unit: "kg",
    fallbackPrice: 7,
  },

  // =========================================================
  // WOODS FINE FOODS
  // =========================================================

  {
    ingredient: "Extra virgin olive oil",
    supplier: "Woods Fine Foods",
    supplierProduct: "Core - Extra Virgin Olive Oil 5L",
    unit: "5L",
    fallbackPrice: 60.29,
  },
  {
    ingredient: "Coconut milk",
    supplier: "Woods Fine Foods",
    supplierProduct: "Chakoh - Coconut Milk 6 x 2.9kg",
    unit: "pack",
    fallbackPrice: 11.15,
  },
  {
    ingredient: "Silken tofu",
    supplier: "Woods Fine Foods",
    supplierProduct: "Tofu Silken Yutaka - Ambient 349g",
    unit: "each",
    fallbackPrice: 2.2,
  },
  {
    ingredient: "Eggs",
    supplier: "Woods Fine Foods",
    supplierProduct:
      "Eggs Barn Clarence Court - Burfords 5 Dozen - 60 Eggs",
    unit: "pack",
    fallbackPrice: 31.11,
  },
  {
    ingredient: "Panko gluten free",
    supplier: "Woods Fine Foods",
    supplierProduct:
      "Breadcrumb - Panko Gluten Free Centaur 1kg",
    unit: "kg",
    fallbackPrice: 4.79,
  },
  {
    ingredient: "Table salt",
    supplier: "Woods Fine Foods",
    supplierProduct: "Table Salt - SPL 3kg",
    unit: "3kg",
    fallbackPrice: 4.07,
  },
  {
    ingredient: "Hazelnuts",
    supplier: "Woods Fine Foods",
    supplierProduct: "Hazelnuts Blanched - Afropol 1kg",
    unit: "kg",
    fallbackPrice: 13.24,
  },
  {
    ingredient: "White chocolate",
    supplier: "Woods Fine Foods",
    supplierProduct:
      "Callebaut - 28% White Chocolate Callets 2.5kg",
    unit: "2.5kg",
    fallbackPrice: 30.4,
  },
  {
    ingredient: "Dark chocolate",
    supplier: "Woods Fine Foods",
    supplierProduct:
      "Callebaut - 70.5% Dark Chocolate Callets 2.5kg",
    unit: "2.5kg",
    fallbackPrice: 27.68,
  },
  {
    ingredient: "Black cocoa powder",
    supplier: "Woods Fine Foods",
    supplierProduct:
      "Cacao Barry - Noir Intense Black Cocoa Powder 1kg",
    unit: "kg",
    fallbackPrice: 13.59,
  },
  {
    ingredient: "Caster sugar",
    supplier: "Woods Fine Foods",
    supplierProduct:
      "Caster Sugar Bag - Tate & Lyle 6 x 2kg",
    unit: "pack",
    fallbackPrice: 20.58,
  },
  {
    ingredient: "Light brown sugar",
    supplier: "Woods Fine Foods",
    supplierProduct:
      "Soft Light Brown Sugar - Tate & Lyle 3kg",
    unit: "3kg",
    fallbackPrice: 8.21,
  },
  {
    ingredient: "Glucose syrup",
    supplier: "Woods Fine Foods",
    supplierProduct: "Glucose Syrup Belgogluc - Liquid 1kg",
    unit: "kg",
    fallbackPrice: 3.18,
  },
  {
    ingredient: "Dried yeast",
    supplier: "Woods Fine Foods",
    supplierProduct: "Yeast Dried DCL 500g",
    unit: "500g",
    fallbackPrice: 5.01,
  },
  {
    ingredient: "Plain flour",
    supplier: "Woods Fine Foods",
    supplierProduct: "Flour Plain Heygates - Soft 6 x 1.5kg",
    unit: "pack",
    fallbackPrice: 7.5,
  },
  {
    ingredient: "Self raising flour",
    supplier: "Woods Fine Foods",
    supplierProduct:
      "Flour Self Raising Heygates Ospray 6 x 1.5kg",
    unit: "pack",
    fallbackPrice: 8.52,
  },
  {
    ingredient: "Milk powder",
    supplier: "Woods Fine Foods",
    supplierProduct: "Skimmed Milk Powder - Milfresh 2kg",
    unit: "2kg",
    fallbackPrice: 9.76,
  },
  {
    ingredient: "Tomato paste",
    supplier: "Woods Fine Foods",
    supplierProduct: "Core - Tomato Paste - Puree 800g",
    unit: "800g",
    fallbackPrice: 2.36,
  },
  {
    ingredient: "Sea salt flakes",
    supplier: "Woods Fine Foods",
    supplierProduct: "Sea Salt Flakes - Maldon 1.4kg",
    unit: "1.4kg",
    fallbackPrice: 13.63,
  },
  {
    ingredient: "Togarashi",
    supplier: "Woods Fine Foods",
    supplierProduct: "Shichimi Chilli Powder - Togarashi 300g",
    unit: "300g",
    fallbackPrice: 6.69,
  },
  {
    ingredient: "Cumin seeds",
    supplier: "Woods Fine Foods",
    supplierProduct: "Cumin Seeds - Greenfields 500g",
    unit: "500g",
    fallbackPrice: 9.83,
  },
  {
    ingredient: "Coriander seeds",
    supplier: "Woods Fine Foods",
    supplierProduct: "Coriander Seeds - Greenfields 300g",
    unit: "300g",
    fallbackPrice: 2.94,
  },
  {
    ingredient: "Black peppercorns",
    supplier: "Woods Fine Foods",
    supplierProduct: "Black Peppercorns - Greenfields 500g",
    unit: "500g",
    fallbackPrice: 6.51,
  },
  {
    ingredient: "Red wine vinegar",
    supplier: "Woods Fine Foods",
    supplierProduct: "Core - Red Wine Vinegar 5L",
    unit: "5L",
    fallbackPrice: 4.97,
  },
  {
    ingredient: "Vegan mayo",
    supplier: "Woods Fine Foods",
    supplierProduct: "Hellmann's - Vegan Mayo 5L - 4.74kg",
    unit: "5L",
    fallbackPrice: 34.44,
  },
  {
    ingredient: "Clarified butter",
    supplier: "Woods Fine Foods",
    supplierProduct: "Butter Clarified - Karla 2kg",
    unit: "2kg",
    fallbackPrice: 28.1,
  },
  {
    ingredient: "Soured cream",
    supplier: "Woods Fine Foods",
    supplierProduct: "Soured Cream - BV Dairy 2kg",
    unit: "2kg",
    fallbackPrice: 6.21,
  },
  {
    ingredient: "Creme fraiche",
    supplier: "Woods Fine Foods",
    supplierProduct: "Creme Fraiche - BV Dairy 2kg",
    unit: "2kg",
    fallbackPrice: 8.28,
  },
  {
    ingredient: "Greek yoghurt",
    supplier: "Woods Fine Foods",
    supplierProduct: "Yoghurt Greek - BV Dairy 2kg",
    unit: "2kg",
    fallbackPrice: 5.33,
  },
  {
    ingredient: "Double cream",
    supplier: "Woods Fine Foods",
    supplierProduct: "Double Cream - Wells Farm 2.27L",
    unit: "2.27L",
    fallbackPrice: 8.5,
  },

  // =========================================================
  // ALBION FINE FOODS
  // =========================================================

  {
    ingredient: "Avocado",
    supplier: "Albion Fine Foods",
    supplierProduct: "Avocado Ready to Eat",
    unit: "each",
    fallbackPrice: 0.89,
    preferred: true,
  },
  {
    ingredient: "Pink fur potato",
    supplier: "Albion Fine Foods",
    supplierProduct: "Potatoes - Pink",
    unit: "kg",
    fallbackPrice: 3.39,
  },
  {
    ingredient: "Corn on the cob",
    supplier: "Albion Fine Foods",
    supplierProduct: "Raw Fresh Corn on Cob case of 24",
    unit: "case",
    fallbackPrice: 27.5,
  },
  {
    ingredient: "Hispi cabbage",
    supplier: "Albion Fine Foods",
    supplierProduct: "Cabbage Hispi",
    unit: "each",
    fallbackPrice: 1.81,
  },
  {
    ingredient: "Red amaranth",
    supplier: "Albion Fine Foods",
    supplierProduct: "Micro Red Amaranth Punnet 25g",
    unit: "punnet",
    fallbackPrice: 2.55,
  },
  {
    ingredient: "Lemon balm",
    supplier: "Albion Fine Foods",
    supplierProduct: "Micro Lemon Balm Punnet 30g",
    unit: "punnet",
    fallbackPrice: 2.55,
  },
  {
    ingredient: "Lime",
    supplier: "Albion Fine Foods",
    supplierProduct: "Limes",
    unit: "case",
    fallbackPrice: 3.24,
  },
  {
    ingredient: "Butternut squash",
    supplier: "Albion Fine Foods",
    supplierProduct: "Butternut Squash per/kg",
    unit: "kg",
    fallbackPrice: 1.95,
  },
  {
    ingredient: "Aubergine",
    supplier: "Albion Fine Foods",
    supplierProduct: "Aubergines",
    unit: "case",
    fallbackPrice: 4.7,
  },
  {
    ingredient: "Unsalted butter",
    supplier: "Albion Fine Foods",
    supplierProduct: "RED Lakeland Unsalted Butter 250g",
    unit: "250g",
    fallbackPrice: 1.79,
  },
  {
    ingredient: "Miso",
    supplier: "Albion Fine Foods",
    supplierProduct: "Miso Paste",
    unit: "kg",
    fallbackPrice: null,
  },
  {
    ingredient: "Mirin",
    supplier: "Albion Fine Foods",
    supplierProduct: "Mirin",
    unit: "L",
    fallbackPrice: null,
  },
  {
    ingredient: "Rice vinegar",
    supplier: "Albion Fine Foods",
    supplierProduct: "Rice Vinegar",
    unit: "L",
    fallbackPrice: null,
  },
  {
    ingredient: "Fish sauce",
    supplier: "Albion Fine Foods",
    supplierProduct: "Fish Sauce",
    unit: "L",
    fallbackPrice: null,
  },
  {
    ingredient: "Rapeseed oil",
    supplier: "Albion Fine Foods",
    supplierProduct: "Rapeseed Oil",
    unit: "L",
    fallbackPrice: null,
  },

  // =========================================================
  // OUI CHEF
  // Backup fruit & veg / speciality produce
  // =========================================================

  {
    ingredient: "Granny Smith apple",
    supplier: "Oui Chef",
    supplierProduct: "APPLE GRANNY SMITH",
    unit: "kg",
    fallbackPrice: 1.81,
  },
  {
    ingredient: "Orange",
    supplier: "Oui Chef",
    supplierProduct: "ORANGE LARGE",
    unit: "kg",
    fallbackPrice: 1.76,
  },
  {
    ingredient: "Pineapple",
    supplier: "Oui Chef",
    supplierProduct: "Pineapple Extra Sweet",
    unit: "each",
    fallbackPrice: 3.68,
  },
  {
    ingredient: "Plantain",
    supplier: "Oui Chef",
    supplierProduct: "PLANTAIN RIPE",
    unit: "kg",
    fallbackPrice: 2.93,
  },
  {
    ingredient: "Lime",
    supplier: "Oui Chef",
    supplierProduct: "LIME (54xBox)",
    unit: "box",
    fallbackPrice: 14.03,
    preferred: false,
  },
  {
    ingredient: "Beetroot",
    supplier: "Oui Chef",
    supplierProduct: "Beetroot - Raw",
    unit: "kg",
    fallbackPrice: 1.07,
  },
  {
    ingredient: "Red cabbage",
    supplier: "Oui Chef",
    supplierProduct: "Cabbage Red 25kg",
    unit: "bag",
    fallbackPrice: 17.69,
  },
  {
    ingredient: "Baby carrots",
    supplier: "Oui Chef",
    supplierProduct: "Carrots Baby",
    unit: "bunch",
    fallbackPrice: 2.93,
  },
  {
    ingredient: "Avocado",
    supplier: "Oui Chef",
    supplierProduct: "AVOCADO HASS (20xBox)",
    unit: "box",
    fallbackPrice: 22.57,
    preferred: false,
  },
  {
    ingredient: "Fennel",
    supplier: "Oui Chef",
    supplierProduct: "FENNEL",
    unit: "kg",
    fallbackPrice: 3.49,
  },
  {
    ingredient: "Garlic",
    supplier: "Oui Chef",
    supplierProduct: "GARLIC SPANISH",
    unit: "kg",
    fallbackPrice: 4.24,
  },
  {
    ingredient: "Peeled garlic",
    supplier: "Oui Chef",
    supplierProduct: "GARLIC PEELED KG",
    unit: "kg",
    fallbackPrice: 4.79,
  },
  {
    ingredient: "Red onion",
    supplier: "Oui Chef",
    supplierProduct: "ONION RED",
    unit: "kg",
    fallbackPrice: 1.26,
  },
  {
    ingredient: "White onion",
    supplier: "Oui Chef",
    supplierProduct: "ONION WHITE",
    unit: "kg",
    fallbackPrice: 2.26,
  },
  {
    ingredient: "Spanish onion",
    supplier: "Oui Chef",
    supplierProduct: "ONION SPANISH",
    unit: "kg",
    fallbackPrice: 1.06,
  },
  {
    ingredient: "Jalapeno",
    supplier: "Oui Chef",
    supplierProduct: "PEPPER JALAPENO (2xBox)",
    unit: "box",
    fallbackPrice: null,
  },
  {
    ingredient: "Cherry tomato",
    supplier: "Oui Chef",
    supplierProduct: "Tomatoes Cherry",
    unit: "punnet",
    fallbackPrice: 1.68,
  },
  {
    ingredient: "Maitake mushroom",
    supplier: "Oui Chef",
    supplierProduct: "MUSHROOM MAITAKE",
    unit: "kg",
    fallbackPrice: 28.5,
  },
  {
    ingredient: "King oyster mushroom",
    supplier: "Oui Chef",
    supplierProduct: "MUSHROOM EYRINGHII KG",
    unit: "kg",
    fallbackPrice: 15.69,
  },
  {
    ingredient: "Padron pepper",
    supplier: "Oui Chef",
    supplierProduct: "PEPPERS PADRON KG",
    unit: "kg",
    fallbackPrice: 8.16,
  },
  {
    ingredient: "Sweet potato",
    supplier: "Oui Chef",
    supplierProduct: "POTATOES SWEET",
    unit: "kg",
    fallbackPrice: 2.1,
  },
  {
    ingredient: "Shallot",
    supplier: "Oui Chef",
    supplierProduct: "SHALLOTS BANANA",
    unit: "kg",
    fallbackPrice: 2.36,
  },
  {
    ingredient: "Spring onion",
    supplier: "Oui Chef",
    supplierProduct: "Spring Onion",
    unit: "bunch",
    fallbackPrice: 0.63,
  },
  {
    ingredient: "Squash",
    supplier: "Oui Chef",
    supplierProduct: "SQUASH",
    unit: "kg",
    fallbackPrice: 1.32,
  },
  {
    ingredient: "Green tomato",
    supplier: "Oui Chef",
    supplierProduct: "TOMATOES GREEN",
    unit: "kg",
    fallbackPrice: 5.02,
  },
  {
    ingredient: "Plum tomato",
    supplier: "Oui Chef",
    supplierProduct: "TOMATOES PLUM VINE",
    unit: "kg",
    fallbackPrice: 3.14,
  },
  {
    ingredient: "Hispi cabbage",
    supplier: "Oui Chef",
    supplierProduct: "CABBAGE HISPI",
    unit: "each",
    fallbackPrice: 2.1,
  },
  {
    ingredient: "Carrot",
    supplier: "Oui Chef",
    supplierProduct: "CARROTS",
    unit: "kg",
    fallbackPrice: 0.82,
  },
  {
    ingredient: "Cauliflower",
    supplier: "Oui Chef",
    supplierProduct: "CAULIFLOWER",
    unit: "each",
    fallbackPrice: 2.77,
  },
  {
    ingredient: "Celery",
    supplier: "Oui Chef",
    supplierProduct: "CELERY *ALLERGEN*",
    unit: "each",
    fallbackPrice: 1.01,
  },
  {
    ingredient: "Ginger",
    supplier: "Oui Chef",
    supplierProduct: "GINGER",
    unit: "kg",
    fallbackPrice: 4.52,
  },
  {
    ingredient: "Aubergine",
    supplier: "Oui Chef",
    supplierProduct: "AUBERGINES (5xBox)",
    unit: "box",
    fallbackPrice: null,
  },

  // =========================================================
  // SPITALFIELDS FRUIT & VEG
  // =========================================================

  {
    ingredient: "Double cream",
    supplier: "Spitalfields Fruit & Veg",
    supplierProduct: "Double Cream 1/2 Gallon",
    unit: "each",
    fallbackPrice: 11.85,
  },
  {
    ingredient: "Japanese aubergine",
    supplier: "Spitalfields Fruit & Veg",
    supplierProduct: "Japanese Aubergines",
    unit: "kg",
    fallbackPrice: 4.03,
  },
  {
    ingredient: "Banana",
    supplier: "Spitalfields Fruit & Veg",
    supplierProduct: "Banana",
    unit: "kg",
    fallbackPrice: 1.75,
  },
  {
    ingredient: "Baby corn",
    supplier: "Spitalfields Fruit & Veg",
    supplierProduct: "Baby Corn",
    unit: "pack",
    fallbackPrice: 1.42,
  },
  {
    ingredient: "Spring onion",
    supplier: "Spitalfields Fruit & Veg",
    supplierProduct: "Spring Onions (ENG New-Crop)",
    unit: "each",
    fallbackPrice: 0.45,
  },
  {
    ingredient: "Chives",
    supplier: "Spitalfields Fruit & Veg",
    supplierProduct: "Loose Bunch Chives 50g",
    unit: "bunch",
    fallbackPrice: 1.24,
  },
  {
    ingredient: "Chervil",
    supplier: "Spitalfields Fruit & Veg",
    supplierProduct: "Loose Bunch Chervil 100g",
    unit: "bunch",
    fallbackPrice: 1.01,
  },

  // =========================================================
  // BIG K CHARCOAL
  // =========================================================

  {
    ingredient: "Binchotan charcoal",
    supplier: "Big K Charcoal",
    supplierProduct: "Binchotan Lumpwood Charcoal 10kg",
    unit: "box",
    fallbackPrice: 17,
    preferred: true,
  },
  {
    ingredient: "Charcoal briquettes",
    supplier: "Big K Charcoal",
    supplierProduct: "Restaurant Charcoal Briquette FSC 100% 10kg",
    unit: "bag",
    fallbackPrice: 15.5,
  },
  {
    ingredient: "Restaurant charcoal",
    supplier: "Big K Charcoal",
    supplierProduct: "Restaurant Charcoal 15kg",
    unit: "bag",
    fallbackPrice: 16,
  },

  // =========================================================
  // RAYNOR HYGIENE
  // =========================================================

  {
    ingredient: "Dishwasher detergent",
    supplier: "Raynor Hygiene",
    supplierProduct:
      "Machine Dishwash Detergent - Hard Water (2 x 5L)",
    unit: "pack",
    fallbackPrice: 11.85,
    preferred: true,
  },
  {
    ingredient: "Dishwasher rinse aid",
    supplier: "Raynor Hygiene",
    supplierProduct:
      "Dishmachine Rinse Aid - General Purpose (2 x 5L)",
    unit: "pack",
    fallbackPrice: 10.85,
    preferred: true,
  },
  {
    ingredient: "Glasswasher detergent",
    supplier: "Raynor Hygiene",
    supplierProduct:
      "Machine Glasswash Detergent - Non-Caustic (2 x 5L)",
    unit: "pack",
    fallbackPrice: 11.85,
  },
  {
    ingredient: "Glasswasher rinse aid",
    supplier: "Raynor Hygiene",
    supplierProduct:
      "Glassmachine Rinse Aid (2 x 5L)",
    unit: "pack",
    fallbackPrice: 10.85,
  },
  {
    ingredient: "Dishwasher salt",
    supplier: "Raynor Hygiene",
    supplierProduct: "Salt Tablets (25kg)",
    unit: "25kg",
    fallbackPrice: 12.9,
    preferred: true,
  },
  {
    ingredient: "Granular salt",
    supplier: "Raynor Hygiene",
    supplierProduct: "Salt - Granular (25kg)",
    unit: "25kg",
    fallbackPrice: 11.9,
  },
  {
    ingredient: "Cleaner sanitiser",
    supplier: "Raynor Hygiene",
    supplierProduct:
      "Concentrated Cleaner Sanitiser - En1276 (2 x 5L)",
    unit: "pack",
    fallbackPrice: 29.95,
  },
  {
    ingredient: "Surface sanitiser",
    supplier: "Raynor Hygiene",
    supplierProduct:
      "Surface Sanitiser - En1276 (Sachet 10 x 750ml)",
    unit: "pack",
    fallbackPrice: 9.95,
  },
  {
    ingredient: "Kitchen cleaner",
    supplier: "Raynor Hygiene",
    supplierProduct:
      "Kitchen Multi Purpose Cleaner - Cleans & Degreases",
    unit: "pack",
    fallbackPrice: 14.25,
  },
  {
    ingredient: "Floor degreaser",
    supplier: "Raynor Hygiene",
    supplierProduct:
      "Degreaser Floor Cleaner - One Per Mop Bucket",
    unit: "pack",
    fallbackPrice: 13.95,
  },
  {
    ingredient: "Heavy duty degreaser",
    supplier: "Raynor Hygiene",
    supplierProduct:
      "Heavy Duty Degrease Sachet x10",
    unit: "pack",
    fallbackPrice: 14.95,
  },
  {
    ingredient: "Oven cleaner",
    supplier: "Raynor Hygiene",
    supplierProduct:
      "Oven Cleaner - Powerful HD (2 x 5L)",
    unit: "pack",
    fallbackPrice: 9.65,
  },
  {
    ingredient: "Descaler",
    supplier: "Raynor Hygiene",
    supplierProduct: "Descaler (2 x 5L)",
    unit: "pack",
    fallbackPrice: 18.95,
  },
  {
    ingredient: "Washing up liquid",
    supplier: "Raynor Hygiene",
    supplierProduct:
      "Manual Detergent - Concentrated Washing Up Detergent (2 x 5L)",
    unit: "pack",
    fallbackPrice: 8.95,
  },
  {
    ingredient: "Butane gas",
    supplier: "Raynor Hygiene",
    supplierProduct: "Butane Gas (8oz)",
    unit: "each",
    fallbackPrice: 4.95,
  },
  {
    ingredient: "Food labels",
    supplier: "Raynor Hygiene",
    supplierProduct: "Food Information Labels (1x500)",
    unit: "roll",
    fallbackPrice: 4.85,
  },
  {
    ingredient: "Day dots",
    supplier: "Raynor Hygiene",
    supplierProduct: "Day Dots Monday - Sunday",
    unit: "roll",
    fallbackPrice: 1.35,
  },
  {
    ingredient: "Baking parchment",
    supplier: "Raynor Hygiene",
    supplierProduct:
      "Baking Parchment - 100% Compostable & Biodegradable",
    unit: "box",
    fallbackPrice: 4.9,
  },
  {
    ingredient: "Cling film 18 inch",
    supplier: "Raynor Hygiene",
    supplierProduct: 'Cling Film Cutter Box 18" (450mm)',
    unit: "box",
    fallbackPrice: 5.95,
  },
  {
    ingredient: "Cling film refills",
    supplier: "Raynor Hygiene",
    supplierProduct: "Speedwrap Cling Film Refills (450mm x3)",
    unit: "pack",
    fallbackPrice: 25.95,
  },
  {
    ingredient: "Catering foil",
    supplier: "Raynor Hygiene",
    supplierProduct: 'Catering Foil Cutter 18" (450mm)',
    unit: "box",
    fallbackPrice: 6.85,
  },
  {
    ingredient: "Hand soap",
    supplier: "Raynor Hygiene",
    supplierProduct: "Bactericidal Handsoap (5L)",
    unit: "5L",
    fallbackPrice: 7.45,
  },
  {
    ingredient: "Hand sanitiser",
    supplier: "Raynor Hygiene",
    supplierProduct: "Hand Sanitiser - Alcohol Gel (500ml)",
    unit: "500ml",
    fallbackPrice: 4.95,
  },
  {
    ingredient: "Vacuum pouch 150x200",
    supplier: "Raynor Hygiene",
    supplierProduct: "Vacuum Pouch 150x200 (x1000)",
    unit: "pack",
    fallbackPrice: 37.29,
  },
  {
    ingredient: "Vacuum pouch 200x300",
    supplier: "Raynor Hygiene",
    supplierProduct: "Vacuum Pouch 200x300 x1000",
    unit: "pack",
    fallbackPrice: 66.9,
  },
  {
    ingredient: "Cleaning cloths",
    supplier: "Raynor Hygiene",
    supplierProduct: "General Cleaning Cloths 777",
    unit: "each",
    fallbackPrice: 4.65,
  },
  {
    ingredient: "J cloths",
    supplier: "Raynor Hygiene",
    supplierProduct:
      "J-Cloth - Biodegradable & Compostable Green Microfibre Black (x50)",
    unit: "pack",
    fallbackPrice: 8.89,
  },
  {
    ingredient: "Microfibre cloth black",
    supplier: "Raynor Hygiene",
    supplierProduct:
      "Microfibre Black Cloth - Microfibre (40x40cm) x10",
    unit: "pack",
    fallbackPrice: 6.95,
  },
  {
    ingredient: "Microfibre cloth blue",
    supplier: "Raynor Hygiene",
    supplierProduct: "Microfibre Cloths - Blue x10",
    unit: "pack",
    fallbackPrice: 4.95,
  },
  {
    ingredient: "Microfibre cloth green",
    supplier: "Raynor Hygiene",
    supplierProduct: "Microfibre Cloths - Green x10",
    unit: "pack",
    fallbackPrice: 4.95,
  },
  {
    ingredient: "Microfibre cloth yellow",
    supplier: "Raynor Hygiene",
    supplierProduct: "Microfibre Cloths - Yellow x10",
    unit: "pack",
    fallbackPrice: 4.95,
  },
  {
    ingredient: "Microfibre cloth red",
    supplier: "Raynor Hygiene",
    supplierProduct: "Microfibre Cloths - Red x10",
    unit: "pack",
    fallbackPrice: 4.95,
  },

  // =========================================================
  // ASCOT WHOLESALE
  // Keep supplier visible until we add its actual regular list
  // =========================================================

  {
    ingredient: "Ascot Wholesale catalogue",
    supplier: "Ascot Wholesale",
    supplierProduct: "Regular products pending",
    unit: "each",
    fallbackPrice: null,
  },
];
