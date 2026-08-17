export type RecipeIngredient = {
    name: string;
    quantity: number | null;
    unit: string;
  };
  
  export type Recipe = {
    name: string;
    type: "Prep" | "Menu";
    linkedMenuItem?: string;
    yieldAmount?: number | null;
    yieldUnit?: string;
    ingredients: RecipeIngredient[];
    notes?: string;
  };
  
  export function recipeSlug(name: string) {
    return name
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/['’]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }
  
  export const recipes: Recipe[] = [
    {
      name: "Passion Fruit Tiger's Milk",
      type: "Prep",
      yieldAmount: null,
      yieldUnit: "ml",
      ingredients: [
        { name: "Classic tiger's milk", quantity: 1500, unit: "ml" },
        { name: "Passion fruit juice", quantity: 140, unit: "g" },
        { name: "Rapeseed oil", quantity: 140, unit: "g" },
        { name: "Ají amarillo", quantity: 4, unit: "tbsp" },
        { name: "Xanthan gum", quantity: null, unit: "as needed" },
      ],
      notes:
        "Blend tiger's milk, passion fruit juice and ají amarillo. Slowly emulsify with oil. Add xanthan gum as needed.",
    },
  
    {
      name: "Black Bean Dip",
      type: "Prep",
      linkedMenuItem: "Black Bean Dip",
      yieldAmount: null,
      yieldUnit: "g",
      ingredients: [
        { name: "Black beans", quantity: 2500, unit: "g" },
        { name: "Chipotle salt", quantity: 35, unit: "g" },
        { name: "Confit garlic", quantity: 90, unit: "g" },
        { name: "Coriander", quantity: 50, unit: "g" },
        { name: "Black pepper", quantity: 20, unit: "g" },
      ],
    },
  
    {
      name: "Tempura Batter",
      type: "Prep",
      yieldAmount: null,
      yieldUnit: "g",
      ingredients: [
        {
          name: "Rice flour / gluten free flour",
          quantity: 120,
          unit: "g",
        },
        { name: "Potato flour", quantity: 70, unit: "g" },
        { name: "Sparkling water", quantity: null, unit: "ml" },
      ],
      notes: "Mix with sparkling water until smooth.",
    },
  
    {
      name: "Lamb Cutlet Marinade",
      type: "Prep",
      linkedMenuItem: "Lamb Cutlets",
      yieldAmount: null,
      yieldUnit: "ml",
      ingredients: [
        { name: "Kimchi no moto paste", quantity: 450, unit: "ml" },
        { name: "Garlic", quantity: 6, unit: "heads" },
        { name: "Sugar", quantity: 50, unit: "g" },
        { name: "Grapeseed oil", quantity: 200, unit: "ml" },
        { name: "Shiso leaf", quantity: 5, unit: "pieces" },
      ],
    },
  
    {
      name: "Chive Oil",
      type: "Prep",
      yieldAmount: null,
      yieldUnit: "ml",
      ingredients: [
        { name: "Chives", quantity: 200, unit: "g" },
        { name: "Grapeseed oil", quantity: 800, unit: "g" },
      ],
      notes:
        "Blanch the chives in salted boiling water for 10 seconds. Chill immediately, dry completely, blend with oil and strain.",
    },
  
    {
      name: "Chimichurri",
      type: "Prep",
      yieldAmount: null,
      yieldUnit: "g",
      ingredients: [
        { name: "Thai basil", quantity: 22, unit: "g" },
        { name: "Coriander", quantity: 50, unit: "g" },
        { name: "Shallot", quantity: 25, unit: "g" },
        { name: "Lemongrass", quantity: 10, unit: "g" },
        { name: "Lime juice", quantity: 50, unit: "g" },
        { name: "Fish sauce", quantity: 50, unit: "g" },
        { name: "Kaffir lime leaf", quantity: 35, unit: "g" },
        { name: "Garlic", quantity: 20, unit: "g" },
        { name: "Spring onion", quantity: 30, unit: "g" },
        { name: "Pickled jalapeño", quantity: 30, unit: "g" },
        { name: "Grapeseed oil", quantity: 285, unit: "g" },
      ],
    },
  
    {
      name: "Pickle Liquor",
      type: "Prep",
      yieldAmount: null,
      yieldUnit: "ml",
      ingredients: [
        { name: "Shiragiku rice vinegar", quantity: 300, unit: "ml" },
        { name: "Sugar", quantity: 200, unit: "g" },
        { name: "Water", quantity: 100, unit: "ml" },
      ],
    },
  
    {
      name: "Miso Dressing",
      type: "Prep",
      yieldAmount: null,
      yieldUnit: "g",
      ingredients: [
        { name: "Miso", quantity: 2000, unit: "g" },
        { name: "Sugar", quantity: 1150, unit: "g" },
        { name: "Mirin", quantity: 400, unit: "ml" },
        { name: "Sake", quantity: 400, unit: "ml" },
      ],
      notes:
        "Warm sake and burn off alcohol. Add mirin, dissolve sugar, remove from heat, add miso and blend until smooth.",
    },
  
    {
      name: "Panisse",
      type: "Prep",
      linkedMenuItem: "Comte Cubes",
      yieldAmount: null,
      yieldUnit: "g",
      ingredients: [
        { name: "Water", quantity: 2500, unit: "g" },
        { name: "Butter", quantity: 1000, unit: "g" },
        { name: "Water", quantity: 1250, unit: "g" },
        { name: "Gram flour", quantity: 1000, unit: "g" },
        { name: "Salt", quantity: 40, unit: "g" },
        { name: "Comte", quantity: 200, unit: "g" },
        { name: "Caramelised onion", quantity: 400, unit: "g" },
      ],
      notes:
        "Prep recipe for the Comte Cubes menu item. More ingredients may exist below the original screenshot.",
    },
  
    {
      name: "Milk Crumb",
      type: "Prep",
      yieldAmount: 274,
      yieldUnit: "g",
      ingredients: [
        { name: "Powdered whole milk", quantity: 100, unit: "g" },
        { name: "All-purpose flour", quantity: 40, unit: "g" },
        { name: "Cornstarch", quantity: 20, unit: "g" },
        { name: "Sugar", quantity: 35, unit: "g" },
        { name: "Salt", quantity: 4, unit: "g" },
        { name: "Butter", quantity: 75, unit: "g" },
      ],
      notes:
        "Mix together, spread flat on a baking sheet and bake at 150°C until toasted.",
    },
  
    {
      name: "Ribeye Steak 300g",
      type: "Menu",
      linkedMenuItem: "Ribeye Steak 300g",
      yieldAmount: 1,
      yieldUnit: "portion",
      ingredients: [
        { name: "Ribeye", quantity: 300, unit: "g" },
        { name: "Chimichurri", quantity: 35, unit: "g" },
        { name: "10cm Masafina tortilla", quantity: null, unit: "pieces" },
        { name: "Chipotle salt", quantity: null, unit: "g" },
      ],
    },
  
    {
      name: "Longhorn Grass Fed Beef Short Rib",
      type: "Menu",
      linkedMenuItem: "Longhorn Grass Fed Beef Short Rib",
      yieldAmount: 1,
      yieldUnit: "portion",
      ingredients: [
        { name: "Short rib", quantity: null, unit: "g" },
        { name: "Chocolate and pepita mole", quantity: null, unit: "g" },
        { name: "10cm Masafina tortilla", quantity: null, unit: "pieces" },
      ],
    },
  
    {
      name: "Chicken Pastor",
      type: "Menu",
      linkedMenuItem: "Chicken Pastor",
      yieldAmount: 1,
      yieldUnit: "portion",
      ingredients: [
        { name: "Chicken thigh", quantity: null, unit: "g" },
        { name: "Pastor marinade", quantity: null, unit: "g" },
        { name: "Pineapple", quantity: null, unit: "g" },
        { name: "12cm Masafina tortilla", quantity: 2, unit: "pieces" },
      ],
    },
  
    {
      name: "Brisket & Cheek Birria",
      type: "Menu",
      linkedMenuItem: "Brisket & Cheek Birria",
      yieldAmount: 1,
      yieldUnit: "portion",
      ingredients: [
        { name: "Birria beef", quantity: null, unit: "g" },
        { name: "Requeson cheese", quantity: null, unit: "g" },
        { name: "Onion", quantity: null, unit: "g" },
        { name: "Birria dipping stock", quantity: null, unit: "ml" },
        { name: "12cm Masafina tortilla", quantity: 2, unit: "pieces" },
      ],
    },
  
    {
      name: "Smoked Aubergine",
      type: "Menu",
      linkedMenuItem: "Smoked Aubergine",
      yieldAmount: 1,
      yieldUnit: "portion",
      ingredients: [
        { name: "Smoked aubergine", quantity: null, unit: "g" },
        { name: "Butternut squash", quantity: null, unit: "g" },
        { name: "Vegan feta", quantity: null, unit: "g" },
        { name: "Pickled onion", quantity: null, unit: "g" },
        {
          name: "12cm Masafina heritage blue corn tortilla",
          quantity: 2,
          unit: "pieces",
        },
      ],
    },
  
    {
      name: "Pork Carnitas",
      type: "Menu",
      linkedMenuItem: "Pork Carnitas",
      yieldAmount: 1,
      yieldUnit: "portion",
      ingredients: [
        { name: "Carnitas pork", quantity: null, unit: "g" },
        { name: "Salsa verde", quantity: null, unit: "g" },
        { name: "10cm Masafina tortilla", quantity: 5, unit: "pieces" },
      ],
    },
  ];