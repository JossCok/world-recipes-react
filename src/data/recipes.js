export const cuisines = {
  Italian: [
    {
      name: "Spaghetti Carbonara",
      img: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
      description: "A creamy Roman pasta with eggs, cheese, pancetta, and pepper.",
      ingredients: ["Spaghetti", "Eggs", "Pancetta", "Pecorino Romano", "Black Pepper"],
      steps: [
        "Boil pasta until al dente.",
        "Fry pancetta until crisp.",
        "Whisk eggs with parmesan.",
        "Combine pasta with pancetta, remove from heat.",
        "Quickly stir in egg mixture, season, and serve."
      ]
    },
    {
      name: "Margherita Pizza",
      img: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
      description: "Classic Neapolitan pizza with tomato, mozzarella, and basil.",
      ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella", "Basil"],
      steps: [
        "Preheat oven to the highest temperature.",
        "Stretch pizza dough into a thin round shape.",
        "Spread tomato sauce evenly over the dough.",
        "Add mozzarella slices and fresh basil leaves.",
        "Bake until crust is golden and cheese is melted."
      ]
    }
  ],

  Spanish: [
    {
      name: "Paella",
      img: "https://www.themealdb.com/images/media/meals/1520081754.jpg",
      description: "Traditional Valencian rice dish with seafood, saffron, and vegetables.",
      ingredients: ["Rice", "Shrimp", "Mussels", "Saffron", "Peppers"],
      steps: [
        "Sauté peppers in olive oil.",
        "Add rice and toast lightly.",
        "Pour in broth with saffron and simmer.",
        "Add shrimp and mussels on top.",
        "Cook until rice absorbs liquid and seafood is done."
      ]
    },
    {
      name: "Tortilla Española",
      img: "https://www.themealdb.com/images/media/meals/quuxsx1511476154.jpg",
      description: "Spanish omelette made with potatoes and onions.",
      ingredients: ["Eggs", "Potatoes", "Onions", "Olive oil"],
      steps: [
        "Thinly slice potatoes and onions.",
        "Fry them gently in olive oil until soft.",
        "Beat eggs in a bowl and mix in potatoes and onions.",
        "Pour mixture into a pan and cook on low heat.",
        "Flip the tortilla and cook the other side until firm."
      ]
    }
  ],

  Balkan: [
    {
      name: "Ćevapi",
      img: "https://www.recipesfromeurope.com/wp-content/uploads/2023/04/cropped-balkan-cevapi-recipe-640x853.jpg",
      description: "Grilled minced meat sausages, usually served with flatbread and onions.",
      ingredients: ["Minced beef", "Garlic", "Salt", "Pepper"],
      steps: [
        "Season minced meat with salt, pepper, and garlic.",
        "Shape into small sausage-like pieces.",
        "Grill over medium-high heat until cooked through.",
        "Serve with flatbread and chopped onions."
      ]
    },
    {
      name: "Sarma",
      img: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/sarma.jpg",
      description: "Cabbage rolls stuffed with minced meat and rice.",
      ingredients: ["Cabbage leaves", "Minced meat", "Rice", "Spices"],
      steps: [
        "Blanch cabbage leaves until soft.",
        "Mix minced meat, rice, and spices.",
        "Place filling on each leaf and roll tightly.",
        "Arrange rolls in a pot and cover with water or broth.",
        "Simmer gently until rice and meat are fully cooked."
      ]
    }
  ],
  Mexican: [ 
    { 
      name: "Tacos", 
      img: "https://images.unsplash.com/photo-1601924582971-df6b0f4f6f5b", 
      description: "Soft tortillas filled with seasoned meat and fresh toppings.", 
      ingredients: ["Tortillas", "Beef", "Onions", "Cilantro", "Lime"], 
      steps: [ "Cook seasoned beef.", "Warm tortillas.", "Assemble with toppings.", "Serve with lime."

       ] 
      } 
    ], 
  
  Chinese: [ 
    { 
      name: "Kung Pao Chicken", img: "https://images.unsplash.com/photo-1604908554168-3e4e9d8c12c1", 
        description: "Spicy stir‑fried chicken with peanuts and vegetables.", 
        ingredients: ["Chicken", "Peanuts", "Chili peppers", "Soy sauce", "Garlic"], 
        steps: [ "Stir‑fry chicken.", "Add vegetables and chilies.", "Add sauce and peanuts.", "Serve hot with rice." 

        ]
       } 
      ], 
      French: [
         {
          name: "Ratatouille", 
          img: "https://images.unsplash.com/photo-1604908554168-3e4e9d8c12c1", 
          description: "A Provençal vegetable stew with tomatoes, zucchini, and eggplant.", 
          ingredients: 
          ["Tomatoes", "Zucchini", "Eggplant", "Garlic", "Olive oil"], 
          steps: 
          [ "Slice vegetables.", "Layer in a dish.", "Bake until tender.", "Serve warm."
            
          ]
         }
              ]
};
