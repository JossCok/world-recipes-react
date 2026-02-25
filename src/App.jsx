import { useState } from "react";
import { cuisines } from "./data/recipes";
import { cuisineImages } from "./data/cuisineImages";

import "./App.css";

function App() {
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="page-center">
      <div className="app-container">

        {/* App header */}
        <header className="app-header">
          <h1 className="header-title">world recipes</h1>
          <nav className="header-nav">
            <button
              className="nav-button"
              onClick={() => {
                setSelectedCuisine(null);
                setSelectedMeal(null);
              }}
            >
              home
            </button>
          </nav>
        </header>

        {/* Search bar */}
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="search meals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Step 1: Choose cuisine */}
        {!selectedCuisine && (
          <div>
            <h2 className="section-title">Select a cuisine</h2>
            <div className="cuisine-buttons">
              {Object.keys(cuisines).map((cuisine) => (
                <button
                  key={cuisine}
                  className="cuisine-button"
                  onClick={() => {
                    setSelectedCuisine(cuisine);
                    setSelectedMeal(null);
                  }}
                >
                  {cuisine}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Show meals */}
        {selectedCuisine && !selectedMeal && (
          <div>
            <button
              className="back-button"
              onClick={() => {
                setSelectedCuisine(null);
                setSelectedMeal(null);
              }}
            >
              ← back to cuisines
            </button>

            <h2 className="section-title">{selectedCuisine} dishes</h2>

            <div className="meals-grid">
              {cuisines[selectedCuisine]
                .filter((meal) =>
                  meal.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((meal) => (
                  <div
                    key={meal.name}
                    className="meal-card"
                    onClick={() => setSelectedMeal(meal)}
                  >
                    <img src={meal.img} alt={meal.name} className="meal-image" />
                    <h3 className="meal-name">{meal.name}</h3>
                    <p className="meal-description">{meal.description}</p>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Step 3: Show meal details */}
        {selectedMeal && (
          <div>
            <button
              className="back-button"
              onClick={() => setSelectedMeal(null)}
            >
              ← back to {selectedCuisine} dishes
            </button>

            <h2 className="section-title">{selectedMeal.name}</h2>

            <div className="meal-detail">
              <img src={selectedMeal.img} alt={selectedMeal.name} />
              <div>
                <p className="meal-description">{selectedMeal.description}</p>
                <h3 className="ingredients-title">Ingredients</h3>
                <ul className="ingredients-list">
                  {selectedMeal.ingredients.map((ing) => (
                    <li key={ing}>{ing}</li>
                  ))}
                </ul>
                {/* Add Steps Here */}
        {selectedMeal.steps && (
  <div className="steps-section">
    <h3 className="steps-title">Steps</h3>
    <ol className="steps-list">
      {selectedMeal.steps.map((step, index) => (
        <li key={index}>{step}</li>
      ))}
    </ol>
  </div>
)}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
