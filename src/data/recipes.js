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
      img: "https://plus.unsplash.com/premium_photo-1679231519649-cc47a75e6d43?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Soft tortillas filled with seasoned meat and fresh toppings.",
      ingredients: ["Tortillas", "Beef", "Onions", "Cilantro", "Lime"],
      steps: [
        "Cook seasoned beef.",
        "Warm tortillas.",
        "Assemble with toppings.",
        "Serve with lime."
      ]
    }
  ],

  Chinese: [
    {
      name: "Kung Pao Chicken",
      img: "https://plus.unsplash.com/premium_photo-1723575734758-97e6e862a670?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Spicy stir‑fried chicken with peanuts and vegetables.",
      ingredients: ["Chicken", "Peanuts", "Chili peppers", "Soy sauce", "Garlic"],
      steps: [
        "Stir‑fry chicken.",
        "Add vegetables and chilies.",
        "Add sauce and peanuts.",
        "Serve hot with rice."
      ]
    }
  ],

  French: [
    {
      name: "Ratatouille",
      img: "https://images.unsplash.com/photo-1630173314503-544080d4dee7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A Provençal vegetable stew with tomatoes, zucchini, and eggplant.",
      ingredients: ["Tomatoes", "Zucchini", "Eggplant", "Garlic", "Olive oil"],
      steps: [
        "Slice vegetables.",
        "Layer in a dish.",
        "Bake until tender.",
        "Serve warm."
      ]
    }
  ],

  Japanese: [
    {
      name: "Sushi",
      img: "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg",
      description: "Traditional Japanese dish with vinegared rice and seafood.",
      ingredients: ["Rice", "Nori", "Fish", "Soy sauce", "Wasabi"],
      steps: [
        "Cook rice and season with vinegar.",
        "Place rice on nori sheet.",
        "Add fish or vegetables.",
        "Roll tightly and slice.",
        "Serve with soy sauce and wasabi."
      ]
    }
  ],

  Indian: [
    {
      name: "Butter Chicken",
      img: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
      description: "Creamy tomato-based curry with tender chicken pieces.",
      ingredients: ["Chicken", "Tomatoes", "Butter", "Cream", "Spices"],
      steps: [
        "Marinate chicken in yogurt and spices.",
        "Cook chicken until browned.",
        "Prepare tomato-based curry sauce.",
        "Add chicken and simmer with cream.",
        "Serve with naan or rice."
      ]
    }
  ],

  Greek: [
    {
      name: "Moussaka",
      img: "https://www.themealdb.com/images/media/meals/ctg8jd1585563097.jpg",
      description: "Layered eggplant and minced meat casserole with béchamel sauce.",
      ingredients: ["Eggplant", "Minced meat", "Tomatoes", "Béchamel sauce"],
      steps: [
        "Slice and fry eggplant.",
        "Cook minced meat with tomatoes.",
        "Layer eggplant and meat in a dish.",
        "Top with béchamel sauce.",
        "Bake until golden."
      ]
    }
  ],

  Thai: [
    {
      name: "Pad Thai",
      img: "https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg",
      description: "Stir-fried rice noodles with shrimp, peanuts, and lime.",
      ingredients: ["Rice noodles", "Shrimp", "Eggs", "Peanuts", "Bean sprouts"],
      steps: [
        "Soak rice noodles.",
        "Stir-fry shrimp and vegetables.",
        "Add noodles and sauce.",
        "Scramble eggs into the mix.",
        "Top with peanuts and lime."
      ]
    }
  ],

  Turkish: [
    {
      name: "Kebab",
      img: "https://www.themealdb.com/images/media/meals/ypxvwv1505333929.jpg",
      description: "Grilled skewered meat served with flatbread and salad.",
      ingredients: ["Lamb", "Onions", "Spices", "Flatbread"],
      steps: [
        "Marinate lamb with spices.",
        "Skewer and grill until cooked.",
        "Serve with bread and salad."
      ]
    }
  ],

  American: [
    {
      name: "Cheeseburger",
      img: "https://images.unsplash.com/photo-1747146132567-e56789e89260?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Classic American burger with beef patty and cheese.",
      ingredients: ["Beef patty", "Cheese", "Bun", "Lettuce", "Tomato"],
      steps: [
        "Grill beef patty.",
        "Place patty on bun with cheese.",
        "Add lettuce and tomato.",
        "Serve with fries."
      ]
    }
  ]
};
