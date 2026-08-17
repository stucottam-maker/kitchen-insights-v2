export type HistoricalStockItem = {
  category: string;
  storage: string;
  name: string;
  quantity: number | string | null;
  unit: string;
  notes: string;
};

export type HistoricalStockTake = {
  id: string;
  date: string;
  label: string;
  sourceSheet: string;
  items: HistoricalStockItem[];
};

// Imported from AZTECA BOH STOCK TAKE.xlsx.
// Source values are preserved. Only exact duplicate rows were removed.
// Suspicious source units are intentionally not "corrected" automatically.
export const historicalStockTakes: HistoricalStockTake[] = [
  {
    "id": "stock-2026-04-29",
    "date": "2026-04-29",
    "label": "29 Apr 2026",
    "sourceSheet": "294",
    "items": [
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Lamb cutlets",
        "quantity": 2.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Pork belly chicharron",
        "quantity": 6.7,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Half chicken",
        "quantity": 6.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Short rib",
        "quantity": 5.7,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Ribeye",
        "quantity": "12 x 300g / 2.5",
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Tomahawk",
        "quantity": 1.3,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Birria",
        "quantity": 2.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Carnitas service",
        "quantity": 6.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Chicken thigh pastor marinade",
        "quantity": 11,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Tempura prawns",
        "quantity": 3.8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "26/30 prawn",
        "quantity": 2.8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Tuna",
        "quantity": 1.25,
        "unit": "kg",
        "notes": "Sliced"
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Stonebass",
        "quantity": "600g cut + 6.5kg unprepped",
        "unit": "",
        "notes": ""
      },
      {
        "category": "FISH",
        "storage": "Dry/Prep",
        "name": "Katsuoboshi",
        "quantity": 500,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Trout",
        "quantity": 500,
        "unit": "g",
        "notes": "Sliced"
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Black cod",
        "quantity": 867,
        "unit": "g",
        "notes": "pending freezer"
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Cod",
        "quantity": 1.9,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Hispi cabbage cooked",
        "quantity": 4.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Corn on the cob",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Pink fur potatoes cooked",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Edamame pods",
        "quantity": 500,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Edamame beans",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Edible flowers",
        "quantity": 2,
        "unit": "punnet",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Cherry tomato",
        "quantity": 1,
        "unit": "punnet",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Dill",
        "quantity": 1,
        "unit": "bunch",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Prep",
        "name": "Totopos fried",
        "quantity": 6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "OILS",
        "storage": "Dry/Prep",
        "name": "Charcoal oil",
        "quantity": 5,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "OILS",
        "storage": "Dry/Prep",
        "name": "Pepita oil",
        "quantity": 5,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "OILS",
        "storage": "Dry/Prep",
        "name": "Rapeseed Oil",
        "quantity": 200,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "OILS",
        "storage": "Dry/Prep",
        "name": "Extra Virgin Olive",
        "quantity": 2.5,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "OILS",
        "storage": "Dry/Prep",
        "name": "Garlic oil",
        "quantity": 10,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "DAIRY / CHILLED PREP",
        "storage": "Chilled",
        "name": "Gruyere cheese",
        "quantity": 200,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DAIRY / CHILLED PREP",
        "storage": "Chilled",
        "name": "Mozzarella",
        "quantity": 200,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DAIRY / CHILLED PREP",
        "storage": "Chilled",
        "name": "Beef dripping",
        "quantity": 300,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Quesillo",
        "quantity": 2.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Feta cheese",
        "quantity": 620,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Vegan feta",
        "quantity": 1,
        "unit": "packet",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Butter",
        "quantity": "6 packets x 250g",
        "unit": "",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Double cream",
        "quantity": 3,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Whole milk",
        "quantity": 2,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Buttermilk",
        "quantity": 4.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DESSERTS",
        "storage": "Chilled/Frozen",
        "name": "Churros",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DESSERTS",
        "storage": "Chilled",
        "name": "Tres leches cream",
        "quantity": 1.7,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "TORTILLAS / SECTION",
        "storage": "Section",
        "name": "10cm tortillas",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "TORTILLAS / SECTION",
        "storage": "Section",
        "name": "12cm tortillas",
        "quantity": 700,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "TORTILLAS / SECTION",
        "storage": "Section",
        "name": "15cm tortillas",
        "quantity": 1.8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "TORTILLAS / SECTION",
        "storage": "Section",
        "name": "Blue heirloom tortillas",
        "quantity": 300,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "TORTILLAS",
        "storage": "Dry/Chilled",
        "name": "Heirloom blue masafina",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "TORTILLAS",
        "storage": "Dry/Chilled",
        "name": "Blue blanco niño",
        "quantity": 4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "TORTILLAS",
        "storage": "Dry/Chilled",
        "name": "10cm masafina",
        "quantity": 4,
        "unit": "packets",
        "notes": ""
      },
      {
        "category": "TORTILLAS",
        "storage": "Dry/Chilled",
        "name": "15cm la fonda",
        "quantity": 3,
        "unit": "packets",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Plain flour",
        "quantity": 1.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Self raising flour",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Table salt",
        "quantity": 3,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Soft brown sugar",
        "quantity": 3.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Potato starch",
        "quantity": 2.3,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Rice flour",
        "quantity": 1.3,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Milk powder",
        "quantity": 1.3,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Polenta",
        "quantity": 1.4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Maldon salt",
        "quantity": 800,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Rice vinegar",
        "quantity": 1.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Gluten free plain flour",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Black pepper",
        "quantity": 200,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Cumin seeds",
        "quantity": 300,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Caster sugar",
        "quantity": 200,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Sake",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Mirin",
        "quantity": 600,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Fish sauce",
        "quantity": 400,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Cinnamon",
        "quantity": 500,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Aubergine powder",
        "quantity": 100,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Mexican oregano",
        "quantity": 100,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Avocado powder",
        "quantity": 500,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Axiote",
        "quantity": 1.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Oxo cubes",
        "quantity": 200,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "UPSTAIRS DRY STORE",
        "storage": "Dry",
        "name": "Gelcrem hot",
        "quantity": 450,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Mole short rib jus",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Pork belly glaze",
        "quantity": 11,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Birria gravy",
        "quantity": 3,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Birria marinade",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Pork hoisin sauce",
        "quantity": 6.7,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Spring onion cream prep",
        "quantity": 940,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Nacho cheese",
        "quantity": 1.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Mushroom quesadilla mix",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Chipotle mayo",
        "quantity": 5.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Spicy aji mayo",
        "quantity": 3.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Mezcal chilli jam",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Chipotle puree",
        "quantity": 490,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Smoked tigers milk",
        "quantity": 3.7,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Peach habanero",
        "quantity": 2.9,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Salsa verde",
        "quantity": 985,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Salsa macha",
        "quantity": 480,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Salsa negra",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Salsa jalapeño",
        "quantity": 3.18,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "House hot sauce",
        "quantity": 2.6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Tigers milk",
        "quantity": 4.53,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Chilled",
        "name": "Black miso",
        "quantity": 500,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Chilled",
        "name": "White miso",
        "quantity": 8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Panisse / Comté cubes",
        "quantity": 4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Red mole",
        "quantity": 2.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Dry/Prep",
        "name": "Tahini",
        "quantity": 500,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Dry/Prep",
        "name": "Oyster sauce",
        "quantity": 400,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Dry/Prep",
        "name": "Yuzu",
        "quantity": 100,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Chilled",
        "name": "Sweet and sour sauce",
        "quantity": 4,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Chilled",
        "name": "Lime juice",
        "quantity": 6,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Limes",
        "quantity": 4,
        "unit": "box",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Red tomato",
        "quantity": 14,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Green tomato",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Carrots",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Sweet potato",
        "quantity": 4.7,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Rosemary",
        "quantity": 2,
        "unit": "bunches",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Red cabbage, whole",
        "quantity": 5.6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Hispi cabbage raw",
        "quantity": 4.8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Butternut squash raw",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Courgette",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Parsnips",
        "quantity": 1.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Avocado",
        "quantity": 6,
        "unit": "box",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Micro coriander",
        "quantity": 7,
        "unit": "punnets",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Micro lemon balm",
        "quantity": 5,
        "unit": "punnets",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Aubergine",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Spanish onion",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Red onion",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Coriander",
        "quantity": 3,
        "unit": "bunch",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Corn on the cob packet",
        "quantity": 6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Pink fur potatoes",
        "quantity": "1 box / 5",
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Jalapeño fresh",
        "quantity": 2.9,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Turkish chilli",
        "quantity": 4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Daikon whole",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Cucumber",
        "quantity": 4,
        "unit": "each",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Red jalapeño",
        "quantity": 1.8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Cherry tomato",
        "quantity": 415,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Japanese aubergine",
        "quantity": 1.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH VEG",
        "storage": "Chilled",
        "name": "Wild mushroom unprepped",
        "quantity": "1 box / 3.6",
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PICKLES",
        "storage": "Chilled",
        "name": "Pickled cabbage",
        "quantity": 4.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PICKLES",
        "storage": "Chilled",
        "name": "Garlic, peeled",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PICKLES",
        "storage": "Chilled",
        "name": "Pickled red jalapeño",
        "quantity": 4.7,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PICKLES",
        "storage": "Chilled",
        "name": "Chipotle",
        "quantity": 0.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PICKLES",
        "storage": "Chilled",
        "name": "Pickled red onion",
        "quantity": 2.3,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PICKLES",
        "storage": "Chilled",
        "name": "Pickled courgette",
        "quantity": 9.7,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PICKLES",
        "storage": "Chilled",
        "name": "Pickle liquor",
        "quantity": 4.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PICKLES",
        "storage": "Chilled",
        "name": "Kimchi",
        "quantity": "2 packets / 1.4",
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PASTRY",
        "storage": "Frozen/Chilled",
        "name": "Gyoza pastry",
        "quantity": "1 packet / 500",
        "unit": "g",
        "notes": ""
      },
      {
        "category": "PASTRY",
        "storage": "Frozen/Chilled",
        "name": "Filo pastry",
        "quantity": 400,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Abuelita Chocolate",
        "quantity": 540,
        "unit": "gr",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Achiote Paste",
        "quantity": 5,
        "unit": "u",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Goya Aji amarillo",
        "quantity": 8,
        "unit": "u",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Dry Black Beans",
        "quantity": 16,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Chipotle in Adobo",
        "quantity": 3,
        "unit": "can",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Peach Helved",
        "quantity": 3,
        "unit": "can",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Sea Salt Maldon",
        "quantity": 2,
        "unit": "tub",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "White Wine Vinegar",
        "quantity": 2,
        "unit": "L",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Caster Sugar",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Piquillo Pepper",
        "quantity": 3,
        "unit": "can",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Flour Gram ( Chick Pea)",
        "quantity": 4,
        "unit": "Kg",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Polenta",
        "quantity": 3,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Sesame Oil",
        "quantity": 2,
        "unit": "L",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Black Eye beans",
        "quantity": 8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Aimia Milk Powder",
        "quantity": 1.4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Rice Basmati Tilda",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "James Brown Coconut fine",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Agar agar sosa",
        "quantity": 800,
        "unit": "gr",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Gel cream hot",
        "quantity": 450,
        "unit": "gr",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Sushi rice",
        "quantity": 3,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Brown sugar",
        "quantity": 2.9,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Guajillo Chilli",
        "quantity": 2,
        "unit": "u",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Ancho Chilli",
        "quantity": 4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Arbol Chilli",
        "quantity": 3.8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Pasilla Chilli",
        "quantity": 2.8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MAIN DRY STORE",
        "storage": "Dry",
        "name": "Chipotle dry",
        "quantity": 4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "JAPANESE",
        "storage": "Dry",
        "name": "kimchi no moto",
        "quantity": 6,
        "unit": "u",
        "notes": ""
      },
      {
        "category": "JAPANESE",
        "storage": "Dry",
        "name": "Chilli Garlic",
        "quantity": 8,
        "unit": "u",
        "notes": ""
      },
      {
        "category": "JAPANESE",
        "storage": "Dry",
        "name": "katakuriko",
        "quantity": 10,
        "unit": "u",
        "notes": ""
      },
      {
        "category": "JAPANESE",
        "storage": "Dry",
        "name": "Obah Leaf",
        "quantity": 3,
        "unit": "pack",
        "notes": ""
      },
      {
        "category": "JAPANESE",
        "storage": "Dry",
        "name": "Bamboo Leaf",
        "quantity": 12,
        "unit": "pack",
        "notes": ""
      },
      {
        "category": "JAPANESE",
        "storage": "Dry",
        "name": "Sake",
        "quantity": 10,
        "unit": "L",
        "notes": ""
      },
      {
        "category": "JAPANESE",
        "storage": "Dry",
        "name": "Mirin",
        "quantity": 8,
        "unit": "L",
        "notes": ""
      },
      {
        "category": "JAPANESE",
        "storage": "Dry",
        "name": "Rice Vinegar",
        "quantity": 5.5,
        "unit": "L",
        "notes": ""
      },
      {
        "category": "JAPANESE",
        "storage": "Dry",
        "name": "Soy sauce GF",
        "quantity": 10.8,
        "unit": "L",
        "notes": ""
      },
      {
        "category": "JAPANESE",
        "storage": "Dry",
        "name": "Miso Paste",
        "quantity": 10,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DOWNSTAIRS FREEZER",
        "storage": "Frozen",
        "name": "Salmon Portioned",
        "quantity": 600,
        "unit": "gr",
        "notes": ""
      },
      {
        "category": "DOWNSTAIRS FREEZER",
        "storage": "Frozen",
        "name": "Octopus Leg",
        "quantity": 800,
        "unit": "gr",
        "notes": ""
      },
      {
        "category": "DOWNSTAIRS FREEZER",
        "storage": "Frozen",
        "name": "Mochis Tropical",
        "quantity": 5,
        "unit": "Pack",
        "notes": ""
      },
      {
        "category": "DOWNSTAIRS FREEZER",
        "storage": "Frozen",
        "name": "Mochis Strawberry Chessecake",
        "quantity": 4,
        "unit": "Pack",
        "notes": ""
      },
      {
        "category": "DOWNSTAIRS FREEZER",
        "storage": "Frozen",
        "name": "Mochis Coconut",
        "quantity": 3,
        "unit": "Pack",
        "notes": ""
      },
      {
        "category": "DOWNSTAIRS FREEZER",
        "storage": "Frozen",
        "name": "Mochis Matcha",
        "quantity": 7,
        "unit": "Pack",
        "notes": ""
      },
      {
        "category": "DOWNSTAIRS FREEZER",
        "storage": "Frozen",
        "name": "Black cod trims",
        "quantity": 2.7,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DOWNSTAIRS FREEZER",
        "storage": "Frozen",
        "name": "Black Cod",
        "quantity": 2.5,
        "unit": "Kg",
        "notes": ""
      },
      {
        "category": "DOWNSTAIRS FREEZER",
        "storage": "Frozen",
        "name": "Edamame",
        "quantity": 20,
        "unit": "Pack",
        "notes": ""
      },
      {
        "category": "DOWNSTAIRS FREEZER",
        "storage": "Frozen",
        "name": "Beef Fillet for party",
        "quantity": 2.4,
        "unit": "kg",
        "notes": ""
      }
    ]
  },
  {
    "id": "stock-2026-05-29",
    "date": "2026-05-29",
    "label": "29 May 2026",
    "sourceSheet": "295",
    "items": [
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Lamb cutlets",
        "quantity": 4.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Pork belly chicharron",
        "quantity": 24,
        "unit": "kg",
        "notes": "9kg cooked, 15 uncooked"
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Half chicken",
        "quantity": 5.6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Short rib",
        "quantity": 0.6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Ribeye",
        "quantity": 2.4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Tomahawk",
        "quantity": 0,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Birria",
        "quantity": 11,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Carnitas service",
        "quantity": 1.8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Chicken thigh pastor marinade",
        "quantity": 7.4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Tempura prawns",
        "quantity": 1.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "26/30 prawn",
        "quantity": 2.8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Tuna",
        "quantity": 0.25,
        "unit": "kg",
        "notes": "Sliced"
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Stonebass",
        "quantity": 0.25,
        "unit": "",
        "notes": ""
      },
      {
        "category": "FISH",
        "storage": "Dry/Prep",
        "name": "Katsuoboshi",
        "quantity": 450,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Trout",
        "quantity": 0.5,
        "unit": "g",
        "notes": "Sliced"
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Black cod",
        "quantity": 2.4,
        "unit": "g",
        "notes": "pending freezer"
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Cod",
        "quantity": 2.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Hispi cabbage cooked",
        "quantity": 4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Corn on the cob",
        "quantity": 0.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Pink fur potatoes cooked",
        "quantity": 6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Edamame pods",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Edamame beans",
        "quantity": 4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Edible flowers",
        "quantity": 1,
        "unit": "punnet",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Cherry tomato",
        "quantity": 1,
        "unit": "punnet",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Dill",
        "quantity": 1,
        "unit": "bunch",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Prep",
        "name": "Totopos fried",
        "quantity": 4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "OILS",
        "storage": "Dry/Prep",
        "name": "Charcoal oil",
        "quantity": 2.5,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "OILS",
        "storage": "Dry/Prep",
        "name": "Pepita oil",
        "quantity": 2,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "OILS",
        "storage": "Dry/Prep",
        "name": "Rapeseed Oil",
        "quantity": 140,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "OILS",
        "storage": "Dry/Prep",
        "name": "Extra Virgin Olive",
        "quantity": 2.5,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "OILS",
        "storage": "Dry/Prep",
        "name": "Garlic oil",
        "quantity": 8,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "DAIRY / CHILLED PREP",
        "storage": "Chilled",
        "name": "Gruyere cheese",
        "quantity": 200,
        "unit": "g",
        "notes": "SHOP"
      },
      {
        "category": "DAIRY / CHILLED PREP",
        "storage": "Chilled",
        "name": "Mozzarella",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DAIRY / CHILLED PREP",
        "storage": "Chilled",
        "name": "Beef dripping",
        "quantity": 800,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Quesillo",
        "quantity": 4.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Feta cheese",
        "quantity": 620,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Vegan feta",
        "quantity": 4,
        "unit": "packet",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Butter",
        "quantity": 10,
        "unit": "250g",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Double cream",
        "quantity": 2,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Whole milk",
        "quantity": 1,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Full fat soft cheese",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Buttermilk",
        "quantity": 4.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DESSERTS",
        "storage": "Chilled/Frozen",
        "name": "Churros",
        "quantity": 0.4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DESSERTS",
        "storage": "Chilled",
        "name": "Tres leches cream",
        "quantity": 0.4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "TORTILLAS / SECTION",
        "storage": "Section",
        "name": "10cm tortillas",
        "quantity": 20,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "TORTILLAS / SECTION",
        "storage": "Section",
        "name": "12cm tortillas",
        "quantity": 45,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "TORTILLAS / SECTION",
        "storage": "Section",
        "name": "15cm tortillas",
        "quantity": 40,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "TORTILLAS",
        "storage": "Dry/Chilled",
        "name": "Heirloom blue masafina",
        "quantity": 7,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "TORTILLAS",
        "storage": "Dry/Chilled",
        "name": "Blue blanco niño",
        "quantity": 10,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Plain flour",
        "quantity": 21,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Self raising flour",
        "quantity": 0,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Table salt",
        "quantity": 6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Soft brown sugar",
        "quantity": 25,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Potato starch JAPANESE",
        "quantity": 6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Rice flour",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Milk powder",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Polenta",
        "quantity": 2.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Maldon salt",
        "quantity": 1.4,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Rice vinegar",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Gluten free plain flour",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Black pepper",
        "quantity": 100,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Cumin seeds",
        "quantity": 100,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Caster sugar",
        "quantity": 10,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Sake",
        "quantity": 4,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "mirin",
        "quantity": 4,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Fish sauce",
        "quantity": 400,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Cinnamon",
        "quantity": 200,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Aubergine powder",
        "quantity": 100,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Oregano",
        "quantity": 100,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Avocado powder",
        "quantity": 400,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Axiote",
        "quantity": 4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "beef boullion",
        "quantity": 0.3,
        "unit": "tub",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Gelcrem hot",
        "quantity": 450,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "evaporated milk",
        "quantity": 5,
        "unit": "tin",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "kimchi no moto",
        "quantity": 4,
        "unit": "jar",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "lee kum kee chilli garlic",
        "quantity": 2,
        "unit": "jar",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "white wine vinegar",
        "quantity": 5,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "gochujang",
        "quantity": 1,
        "unit": "tub",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "coconut milk",
        "quantity": 1,
        "unit": "tin",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "condensed milk",
        "quantity": 5,
        "unit": "tin",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "",
        "name": "black turtle beans dry",
        "quantity": 15,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "",
        "name": "black eye beans dry",
        "quantity": 6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Mole short rib jus",
        "quantity": 4.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Pork belly glaze",
        "quantity": 8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Birria gravy",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Birria marinade",
        "quantity": 0,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Pork hoisin sauce",
        "quantity": 0,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Spring onion cream prep",
        "quantity": 0.3,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Nacho cheese",
        "quantity": 0,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Mushroom quesadilla mix",
        "quantity": 2.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Chipotle mayo",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Spicy aji mayo",
        "quantity": 4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Mezcal chilli jam",
        "quantity": 0.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Chipotle",
        "quantity": 2,
        "unit": "tin",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Smoked tigers milk",
        "quantity": 1.8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Peach habanero",
        "quantity": 2.9,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Salsa verde",
        "quantity": 985,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Salsa macha",
        "quantity": 480,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Salsa negra",
        "quantity": 1.9,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Salsa jalapeño",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "House hot sauce",
        "quantity": 3.4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Tigers milk",
        "quantity": 3.6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Chilled",
        "name": "Black miso",
        "quantity": 0.5,
        "unit": "pack",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Chilled",
        "name": "White miso",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Panisse / Comté cubes",
        "quantity": 4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Red mole",
        "quantity": 7,
        "unit": "450g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Dry/Prep",
        "name": "Tahini",
        "quantity": 500,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Dry/Prep",
        "name": "Oyster sauce",
        "quantity": 400,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Dry/Prep",
        "name": "Yuzu",
        "quantity": 100,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Red mole",
        "quantity": 2.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Chilled",
        "name": "Miso prep",
        "quantity": 3.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Chilled",
        "name": "Sweet and sour sauce",
        "quantity": 4,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Chilled",
        "name": "Lime juice",
        "quantity": 6,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Limes",
        "quantity": 0.5,
        "unit": "box",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "White Onions",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Shallots",
        "quantity": 0,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Red onions",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Cherry tomatoes",
        "quantity": 1,
        "unit": "punnet",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Coriander",
        "quantity": 3,
        "unit": "bunch",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Courgettes",
        "quantity": 0,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Avocados",
        "quantity": 1.8,
        "unit": "each / tray",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Radish",
        "quantity": 1,
        "unit": "bunch",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Red Cabbage",
        "quantity": 3,
        "unit": "each",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Hispi cabbage",
        "quantity": 0,
        "unit": "each",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Cactus / nopal",
        "quantity": 6,
        "unit": "tin",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Pineapple, prep",
        "quantity": 2.4,
        "unit": "each / kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Aubergines, prep",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Butternut squash,prep",
        "quantity": 1.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Spring onions",
        "quantity": 0,
        "unit": "bunch",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Corn on the cob",
        "quantity": 4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Jalapeños / pickled jalapeños",
        "quantity": 1.2,
        "unit": "kg / tub",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Pink fir potatoes",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Sweet potato / camote",
        "quantity": 0.3,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Garlic",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Fresh chillies",
        "quantity": null,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Thai basil",
        "quantity": 2,
        "unit": "bunch",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Chives",
        "quantity": 0,
        "unit": "bunch",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Dill",
        "quantity": 1,
        "unit": "bunch",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Micro coriander",
        "quantity": 4,
        "unit": "punnet",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Micro red amaranth",
        "quantity": 6,
        "unit": "punnet",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Micro lemon balm",
        "quantity": 4,
        "unit": "punnet",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Shiso leaf",
        "quantity": 2,
        "unit": "punnet / pack",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Lemongrass",
        "quantity": 0.08,
        "unit": "kg / bunch",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "Bamboo leaf",
        "quantity": 11,
        "unit": "pack",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "chile de arbol",
        "quantity": 2.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "ancho chilli",
        "quantity": 2.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "guajillo chilli",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "chipotle chili",
        "quantity": null,
        "unit": "",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "mex chocolate",
        "quantity": 0.8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "mex oregano",
        "quantity": 400,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "japanese big leaf (half chx)",
        "quantity": 2,
        "unit": "pack",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "chipotle powder",
        "quantity": 3,
        "unit": "pack",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "pasilla chili",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "aji amarillo",
        "quantity": 5,
        "unit": "jar",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "charcoal briquettes",
        "quantity": 45,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "shaosing wine",
        "quantity": 0.6,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "bourgon verjus",
        "quantity": 0.75,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "nori sheets",
        "quantity": 1,
        "unit": "pack",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "jasmine rice",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "basmati rice",
        "quantity": 4,
        "unit": "kg",
        "notes": "staff"
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "fusilli pasta",
        "quantity": 1.5,
        "unit": "kg",
        "notes": "staff"
      }
    ]
  },
  {
    "id": "stock-2026-06-30",
    "date": "2026-06-30",
    "label": "30 Jun 2026",
    "sourceSheet": "306",
    "items": [
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Lamb cutlets",
        "quantity": 4.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Pork belly chicharron",
        "quantity": 24,
        "unit": "kg",
        "notes": "9kg cooked, 15 uncooked"
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Half chicken",
        "quantity": 5.6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Short rib",
        "quantity": 0.6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Ribeye",
        "quantity": 2.4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Tomahawk",
        "quantity": 0,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Birria",
        "quantity": 11,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Carnitas service",
        "quantity": 1.8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Chicken thigh pastor marinade",
        "quantity": 7.4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Tempura prawns",
        "quantity": 1.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "26/30 prawn",
        "quantity": 2.8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Tuna",
        "quantity": 0.25,
        "unit": "kg",
        "notes": "Sliced"
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Stonebass",
        "quantity": 0.25,
        "unit": "",
        "notes": ""
      },
      {
        "category": "FISH",
        "storage": "Dry/Prep",
        "name": "Katsuoboshi",
        "quantity": 450,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Trout",
        "quantity": 0.5,
        "unit": "g",
        "notes": "Sliced"
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Black cod",
        "quantity": 2.4,
        "unit": "g",
        "notes": "pending freezer"
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Cod",
        "quantity": 2.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Hispi cabbage cooked",
        "quantity": 4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Corn on the cob",
        "quantity": 0.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Pink fur potatoes cooked",
        "quantity": 6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Edamame pods",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Edamame beans",
        "quantity": 4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Edible flowers",
        "quantity": 1,
        "unit": "punnet",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Cherry tomato",
        "quantity": 1,
        "unit": "punnet",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Dill",
        "quantity": 1,
        "unit": "bunch",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Prep",
        "name": "Totopos fried",
        "quantity": 4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "OILS",
        "storage": "Dry/Prep",
        "name": "Charcoal oil",
        "quantity": 2.5,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "OILS",
        "storage": "Dry/Prep",
        "name": "Pepita oil",
        "quantity": 2,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "OILS",
        "storage": "Dry/Prep",
        "name": "Rapeseed Oil",
        "quantity": 140,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "OILS",
        "storage": "Dry/Prep",
        "name": "Extra Virgin Olive",
        "quantity": 2.5,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "OILS",
        "storage": "Dry/Prep",
        "name": "Garlic oil",
        "quantity": 8,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "DAIRY / CHILLED PREP",
        "storage": "Chilled",
        "name": "Gruyere cheese",
        "quantity": 200,
        "unit": "g",
        "notes": "SHOP"
      },
      {
        "category": "DAIRY / CHILLED PREP",
        "storage": "Chilled",
        "name": "Mozzarella",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DAIRY / CHILLED PREP",
        "storage": "Chilled",
        "name": "Beef dripping",
        "quantity": 800,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Quesillo",
        "quantity": 4.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Feta cheese",
        "quantity": 620,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Vegan feta",
        "quantity": 4,
        "unit": "packet",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Butter",
        "quantity": 10,
        "unit": "250g",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Double cream",
        "quantity": 2,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Whole milk",
        "quantity": 1,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Full fat soft cheese",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Buttermilk",
        "quantity": 4.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DESSERTS",
        "storage": "Chilled/Frozen",
        "name": "Churros",
        "quantity": 0.4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DESSERTS",
        "storage": "Chilled",
        "name": "Tres leches cream",
        "quantity": 0.4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "TORTILLAS / SECTION",
        "storage": "Section",
        "name": "10cm tortillas",
        "quantity": 20,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "TORTILLAS / SECTION",
        "storage": "Section",
        "name": "12cm tortillas",
        "quantity": 45,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "TORTILLAS / SECTION",
        "storage": "Section",
        "name": "15cm tortillas",
        "quantity": 40,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "TORTILLAS",
        "storage": "Dry/Chilled",
        "name": "Heirloom blue masafina",
        "quantity": 7,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "TORTILLAS",
        "storage": "Dry/Chilled",
        "name": "Blue blanco niño",
        "quantity": 10,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Plain flour",
        "quantity": 21,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Self raising flour",
        "quantity": 0,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Table salt",
        "quantity": 6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Soft brown sugar",
        "quantity": 25,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Potato starch JAPANESE",
        "quantity": 6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Rice flour",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Milk powder",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Polenta",
        "quantity": 2.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Maldon salt",
        "quantity": 1.4,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Rice vinegar",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Gluten free plain flour",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Black pepper",
        "quantity": 100,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Cumin seeds",
        "quantity": 100,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Caster sugar",
        "quantity": 10,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Sake",
        "quantity": 4,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "mirin",
        "quantity": 4,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Fish sauce",
        "quantity": 400,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Cinnamon",
        "quantity": 200,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Aubergine powder",
        "quantity": 100,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Oregano",
        "quantity": 100,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Avocado powder",
        "quantity": 400,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Axiote",
        "quantity": 4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "beef boullion",
        "quantity": 0.3,
        "unit": "tub",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Gelcrem hot",
        "quantity": 450,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "evaporated milk",
        "quantity": 5,
        "unit": "tin",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "kimchi no moto",
        "quantity": 4,
        "unit": "jar",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "lee kum kee chilli garlic",
        "quantity": 2,
        "unit": "jar",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "white wine vinegar",
        "quantity": 5,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "gochujang",
        "quantity": 1,
        "unit": "tub",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "coconut milk",
        "quantity": 1,
        "unit": "tin",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "condensed milk",
        "quantity": 5,
        "unit": "tin",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "",
        "name": "black turtle beans dry",
        "quantity": 15,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "",
        "name": "black eye beans dry",
        "quantity": 6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Mole short rib jus",
        "quantity": 4.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Pork belly glaze",
        "quantity": 8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Birria gravy",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Birria marinade",
        "quantity": 0,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Pork hoisin sauce",
        "quantity": 0,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Spring onion cream prep",
        "quantity": 0.3,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Nacho cheese",
        "quantity": 0,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Mushroom quesadilla mix",
        "quantity": 2.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Chipotle mayo",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Spicy aji mayo",
        "quantity": 4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Mezcal chilli jam",
        "quantity": 0.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Chipotle",
        "quantity": 2,
        "unit": "tin",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Smoked tigers milk",
        "quantity": 1.8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Peach habanero",
        "quantity": 2.9,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Salsa verde",
        "quantity": 985,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Salsa macha",
        "quantity": 480,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Salsa negra",
        "quantity": 1.9,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Salsa jalapeño",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "House hot sauce",
        "quantity": 3.4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Tigers milk",
        "quantity": 3.6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Chilled",
        "name": "Black miso",
        "quantity": 0.5,
        "unit": "pack",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Chilled",
        "name": "White miso",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Panisse / Comté cubes",
        "quantity": 4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Red mole",
        "quantity": 7,
        "unit": "450g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Dry/Prep",
        "name": "Tahini",
        "quantity": 500,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Dry/Prep",
        "name": "Oyster sauce",
        "quantity": 400,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Dry/Prep",
        "name": "Yuzu",
        "quantity": 100,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Red mole",
        "quantity": 2.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Chilled",
        "name": "Miso prep",
        "quantity": 3.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Chilled",
        "name": "Sweet and sour sauce",
        "quantity": 4,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Chilled",
        "name": "Lime juice",
        "quantity": 6,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Limes",
        "quantity": 0.5,
        "unit": "box",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "White Onions",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Shallots",
        "quantity": 0,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Red onions",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Cherry tomatoes",
        "quantity": 1,
        "unit": "punnet",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Coriander",
        "quantity": 3,
        "unit": "bunch",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Courgettes",
        "quantity": 0,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Avocados",
        "quantity": 1.8,
        "unit": "each / tray",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Radish",
        "quantity": 1,
        "unit": "bunch",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Red Cabbage",
        "quantity": 3,
        "unit": "each",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Hispi cabbage",
        "quantity": 0,
        "unit": "each",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Cactus / nopal",
        "quantity": 6,
        "unit": "tin",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Pineapple, prep",
        "quantity": 2.4,
        "unit": "each / kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Aubergines, prep",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Butternut squash,prep",
        "quantity": 1.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Spring onions",
        "quantity": 0,
        "unit": "bunch",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Corn on the cob",
        "quantity": 4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Jalapeños / pickled jalapeños",
        "quantity": 1.2,
        "unit": "kg / tub",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Pink fir potatoes",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Sweet potato / camote",
        "quantity": 0.3,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Garlic",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Fresh chillies",
        "quantity": null,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Thai basil",
        "quantity": 2,
        "unit": "bunch",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Chives",
        "quantity": 0,
        "unit": "bunch",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Dill",
        "quantity": 1,
        "unit": "bunch",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Micro coriander",
        "quantity": 4,
        "unit": "punnet",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Micro red amaranth",
        "quantity": 6,
        "unit": "punnet",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Micro lemon balm",
        "quantity": 4,
        "unit": "punnet",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Shiso leaf",
        "quantity": 2,
        "unit": "punnet / pack",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "Chilled",
        "name": "Lemongrass",
        "quantity": 0.08,
        "unit": "kg / bunch",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "Bamboo leaf",
        "quantity": 11,
        "unit": "pack",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "chile de arbol",
        "quantity": 2.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "ancho chilli",
        "quantity": 2.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "guajillo chilli",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "chipotle chili",
        "quantity": null,
        "unit": "",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "mex chocolate",
        "quantity": 0.8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "mex oregano",
        "quantity": 400,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "japanese big leaf (half chx)",
        "quantity": 2,
        "unit": "pack",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "chipotle powder",
        "quantity": 3,
        "unit": "pack",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "pasilla chili",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "aji amarillo",
        "quantity": 5,
        "unit": "jar",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "charcoal briquettes",
        "quantity": 45,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "shaosing wine",
        "quantity": 0.6,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "bourgon verjus",
        "quantity": 0.75,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "nori sheets",
        "quantity": 1,
        "unit": "pack",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "jasmine rice",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "basmati rice",
        "quantity": 4,
        "unit": "kg",
        "notes": "staff"
      },
      {
        "category": "Fresh produce",
        "storage": "",
        "name": "fusilli pasta",
        "quantity": 1.5,
        "unit": "kg",
        "notes": "staff"
      }
    ]
  },
  {
    "id": "stock-2026-07-31",
    "date": "2026-07-31",
    "label": "31 Jul 2026",
    "sourceSheet": "317",
    "items": [
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Lamb cutlets",
        "quantity": 2.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Pork belly chicharron",
        "quantity": 10,
        "unit": "kg",
        "notes": "9kg cooked, 15 uncooked"
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Half chicken",
        "quantity": 4.7,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Short rib",
        "quantity": 8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Ribeye",
        "quantity": 34.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Tomahawk",
        "quantity": 1.225,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Birria",
        "quantity": 2.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Carnitas service",
        "quantity": 6.7,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "Chilled",
        "name": "Chicken thigh pastor marinade",
        "quantity": 8.6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "MEAT",
        "storage": "",
        "name": "Pork belly skin",
        "quantity": 5,
        "unit": "",
        "notes": ""
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Tempura prawns",
        "quantity": 0.54,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "26/30 prawn",
        "quantity": 6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Tuna",
        "quantity": 0.4,
        "unit": "kg",
        "notes": "Sliced"
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Stonebass",
        "quantity": 3.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FISH",
        "storage": "Dry / Prep",
        "name": "Katsuoboshi",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Trout",
        "quantity": 1.6,
        "unit": "kg",
        "notes": "Sliced"
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Black cod",
        "quantity": 2.4,
        "unit": "g",
        "notes": "pending freezer"
      },
      {
        "category": "FISH",
        "storage": "Chilled",
        "name": "Cod",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Hispi cabbage cooked",
        "quantity": 4.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Corn on the cob",
        "quantity": 1.8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Pink fur potatoes cooked",
        "quantity": 4.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Edamame pods",
        "quantity": 8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Edamame beans",
        "quantity": 3,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Edible flowers",
        "quantity": 2,
        "unit": "punnet",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Cherry tomato",
        "quantity": 1,
        "unit": "punnet",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Chilled",
        "name": "Dill",
        "quantity": 1,
        "unit": "bunch",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Prep",
        "name": "Totopos fried",
        "quantity": 3,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Prep",
        "name": "Black-eyed bean purée",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Prep",
        "name": "Aubergine prep",
        "quantity": 0.4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "PREPPED VEG / SECTION",
        "storage": "Prep",
        "name": "Pico de gallo",
        "quantity": 2.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "OILS",
        "storage": "Dry / Prep",
        "name": "Charcoal oil",
        "quantity": 10,
        "unit": "L",
        "notes": ""
      },
      {
        "category": "OILS",
        "storage": "Dry / Prep",
        "name": "Pepita oil",
        "quantity": 5,
        "unit": "L",
        "notes": ""
      },
      {
        "category": "OILS",
        "storage": "Dry / Prep",
        "name": "Rapeseed oil",
        "quantity": 200,
        "unit": "L",
        "notes": ""
      },
      {
        "category": "OILS",
        "storage": "Dry / Prep",
        "name": "Extra virgin olive oil",
        "quantity": 2.5,
        "unit": "L",
        "notes": ""
      },
      {
        "category": "OILS",
        "storage": "Dry / Prep",
        "name": "Garlic oil",
        "quantity": 7,
        "unit": "L",
        "notes": ""
      },
      {
        "category": "DAIRY / CHILLED PREP",
        "storage": "Chilled",
        "name": "Gruyere cheese",
        "quantity": 0.1,
        "unit": "g",
        "notes": "SHOP"
      },
      {
        "category": "DAIRY / CHILLED PREP",
        "storage": "Chilled",
        "name": "Mozzarella",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DAIRY / CHILLED PREP",
        "storage": "Chilled",
        "name": "Beef dripping",
        "quantity": 0.85,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Quesillo",
        "quantity": 2.4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Feta cheese",
        "quantity": 0.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Vegan feta",
        "quantity": 3,
        "unit": "packet",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Butter",
        "quantity": 4,
        "unit": "250g",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Double cream",
        "quantity": 1,
        "unit": "L",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Whole milk",
        "quantity": 0.25,
        "unit": "L",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Full-fat soft cheese",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DAIRY",
        "storage": "Chilled",
        "name": "Buttermilk",
        "quantity": null,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DESSERTS",
        "storage": "Chilled / Frozen",
        "name": "Churros",
        "quantity": 2.6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DESSERTS",
        "storage": "Chilled",
        "name": "Tres leches cream",
        "quantity": 0.12,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "TORTILLAS / SECTION",
        "storage": "Section",
        "name": "10cm tortillas",
        "quantity": 36,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "TORTILLAS / SECTION",
        "storage": "Section",
        "name": "12cm tortillas",
        "quantity": 25,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "TORTILLAS / SECTION",
        "storage": "Section",
        "name": "15cm tortillas",
        "quantity": 10,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "TORTILLAS",
        "storage": "Dry / Chilled",
        "name": "Heirloom blue masafina",
        "quantity": 0.485,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "TORTILLAS",
        "storage": "Dry / Chilled",
        "name": "Blue blanco niño",
        "quantity": 10,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Plain flour",
        "quantity": 21,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Self-raising flour",
        "quantity": 0,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Table salt",
        "quantity": 6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Soft brown sugar",
        "quantity": 25,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Japanese potato starch",
        "quantity": 6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Rice flour",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Milk powder",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Polenta",
        "quantity": 2.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Maldon salt",
        "quantity": 1.4,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Rice vinegar",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Gluten free plain flour",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Black pepper",
        "quantity": 100,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Cumin seeds",
        "quantity": 100,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Caster sugar",
        "quantity": 10,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Sake",
        "quantity": 4,
        "unit": "L",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Mirin",
        "quantity": 4,
        "unit": "L",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Fish sauce",
        "quantity": 400,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Cinnamon",
        "quantity": 200,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Aubergine powder",
        "quantity": 100,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Oregano",
        "quantity": 100,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Avocado powder",
        "quantity": 400,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Achiote",
        "quantity": 4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Beef bouillon",
        "quantity": 0.3,
        "unit": "tub",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Gelcrem hot",
        "quantity": 450,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Evaporated milk",
        "quantity": 5,
        "unit": "tin",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Kimchi no moto",
        "quantity": 4,
        "unit": "jar",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Lee Kum Kee chilli garlic sauce",
        "quantity": 2,
        "unit": "jar",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "White wine vinegar",
        "quantity": 5,
        "unit": "L",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Gochujang",
        "quantity": 1,
        "unit": "tub",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Coconut milk",
        "quantity": 0,
        "unit": "tin",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Condensed milk",
        "quantity": 2,
        "unit": "tin",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Dried black turtle beans",
        "quantity": 10,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Dried black-eyed beans",
        "quantity": 6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "DRY STORE",
        "storage": "Dry",
        "name": "Kimchi",
        "quantity": 0.7,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Mole short rib jus",
        "quantity": null,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Pork belly glaze",
        "quantity": 7.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Birria gravy",
        "quantity": 7,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Birria marinade",
        "quantity": 0,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Pork hoisin sauce",
        "quantity": 0,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Spring onion cream prep",
        "quantity": 0.5,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Nacho cheese",
        "quantity": 0,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Mushroom quesadilla mix",
        "quantity": 6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Chipotle mayo",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Spicy aji mayo",
        "quantity": 3,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Chimichurri",
        "quantity": 0.885,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Mezcal chilli jam",
        "quantity": 0.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Chipotle",
        "quantity": 2,
        "unit": "tin",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Smoked tiger's milk",
        "quantity": 2.3,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Peach habanero",
        "quantity": 1.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Salsa verde",
        "quantity": 1.8,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Salsa macha",
        "quantity": 0.2,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Salsa negra",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Salsa jalapeño",
        "quantity": 43.8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "House hot sauce",
        "quantity": 3.8,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "",
        "name": "Diablo hot sauce",
        "quantity": 0.6,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "",
        "name": "Habanero paste",
        "quantity": 3,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Tiger's milk",
        "quantity": 0.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Chilled",
        "name": "Black miso",
        "quantity": 0.5,
        "unit": "pack",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Chilled",
        "name": "White miso",
        "quantity": 3,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Panisse / Comté cubes",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Dry / Prep",
        "name": "Tahini",
        "quantity": 500,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Dry / Prep",
        "name": "Oyster sauce",
        "quantity": 400,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Dry / Prep",
        "name": "Yuzu",
        "quantity": 100,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Red mole",
        "quantity": 5,
        "unit": "jar",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Chilled",
        "name": "Miso prep",
        "quantity": 3.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Chilled",
        "name": "Miso pastor",
        "quantity": 0.46,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Prep",
        "name": "Panisse / Comté cubes",
        "quantity": 4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "SAUCES / PREP",
        "storage": "Chilled",
        "name": "Lime juice",
        "quantity": 5,
        "unit": "L",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Limes",
        "quantity": null,
        "unit": "box",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "White onions",
        "quantity": 5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Shallots",
        "quantity": 0,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Red onions",
        "quantity": 10,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Cherry tomatoes",
        "quantity": 1,
        "unit": "punnet",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Coriander",
        "quantity": 10,
        "unit": "bunch",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Courgettes",
        "quantity": 0,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Avocados",
        "quantity": 3.75,
        "unit": "box",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Radish",
        "quantity": 3,
        "unit": "bunch",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Daikon",
        "quantity": 1,
        "unit": "each",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Grapefruit",
        "quantity": 8,
        "unit": "each",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Iceberg lettuce",
        "quantity": 1,
        "unit": "each",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Red cabbage",
        "quantity": 4,
        "unit": "each",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Hispi cabbage",
        "quantity": 17,
        "unit": "each",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Cactus / nopal",
        "quantity": 6,
        "unit": "tin",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Pineapple, fresh",
        "quantity": 2,
        "unit": "each",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Pineapple, prep",
        "quantity": 0.7,
        "unit": "each / kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Aubergines, prep",
        "quantity": 0.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Butternut squash, prep",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Spring onions",
        "quantity": 0,
        "unit": "bunch",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Corn on the cob",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Jalapeño, fresh",
        "quantity": 1,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Jalapeños / pickled jalapeños",
        "quantity": 4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Sweet potato / camote",
        "quantity": 4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Pickled red cabbage",
        "quantity": 3.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Pickled onion",
        "quantity": null,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Pickled red jalapeño",
        "quantity": 3,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Pickled courgette",
        "quantity": 1.2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Confit garlic",
        "quantity": 1.3,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Pink fir potatoes",
        "quantity": 2.5,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Sweet potato / camote",
        "quantity": null,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Garlic",
        "quantity": 0.4,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Fresh chillies",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Thai basil",
        "quantity": 2,
        "unit": "bunch",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Chives",
        "quantity": 0,
        "unit": "bunch",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Dill",
        "quantity": 1,
        "unit": "bunch",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Micro coriander",
        "quantity": 2,
        "unit": "punnet",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Micro red amaranth",
        "quantity": 4,
        "unit": "punnet",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Micro lemon balm",
        "quantity": 4,
        "unit": "punnet",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Shiso leaf",
        "quantity": 2,
        "unit": "punnet / pack",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "Chilled",
        "name": "Lemongrass",
        "quantity": 0.08,
        "unit": "kg / bunch",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Bamboo leaf",
        "quantity": 11,
        "unit": "pack",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Chile de árbol",
        "quantity": 3,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Ancho chilli",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Guajillo chilli",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Chipotle chilli",
        "quantity": 2,
        "unit": "",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Pasilla chilli",
        "quantity": 2,
        "unit": "",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Mexican chocolate",
        "quantity": 0,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Mexican oregano",
        "quantity": 400,
        "unit": "g",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Japanese big leaf (half chicken)",
        "quantity": 2,
        "unit": "pack",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Chipotle powder",
        "quantity": 0,
        "unit": "pack",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Aji amarillo",
        "quantity": 11,
        "unit": "jar",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Charcoal briquettes",
        "quantity": 45,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Shaoxing wine",
        "quantity": 0.6,
        "unit": "L",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Bourgoin verjus",
        "quantity": 0.75,
        "unit": "L",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Nori sheets",
        "quantity": 1,
        "unit": "pack",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Jasmine rice",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Basmati rice",
        "quantity": 4,
        "unit": "kg",
        "notes": "staff"
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Fusilli pasta",
        "quantity": 1.5,
        "unit": "kg",
        "notes": "staff"
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Tamari soy",
        "quantity": 7.5,
        "unit": "L",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Sake",
        "quantity": 3,
        "unit": "L",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "Mirin",
        "quantity": 8,
        "unit": "L",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "charcoal briquettes",
        "quantity": 45,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "shaosing wine",
        "quantity": 0.6,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "bourgon verjus",
        "quantity": 0.75,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "nori sheets",
        "quantity": 1,
        "unit": "pack",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "jasmine rice",
        "quantity": 2,
        "unit": "kg",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "basmati rice",
        "quantity": 4,
        "unit": "kg",
        "notes": "staff"
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "fusilli pasta",
        "quantity": 1.5,
        "unit": "kg",
        "notes": "staff"
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "tamari soy",
        "quantity": 7.5,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "sake",
        "quantity": 3,
        "unit": "l",
        "notes": ""
      },
      {
        "category": "FRESH PRODUCE",
        "storage": "",
        "name": "mirin",
        "quantity": 8,
        "unit": "l",
        "notes": ""
      }
    ]
  }
];

export const latestHistoricalStockTake =
  historicalStockTakes[historicalStockTakes.length - 1];
