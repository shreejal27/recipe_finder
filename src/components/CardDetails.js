import React from "react"

import '../CardDetails.css';

export default function CardDetails(props) {
  const { recipe } = props;

  if (!recipe) {
    return (
      <div>
        <h1>Hello</h1>
        <p>This is from CardDetails page</p>
        <p>No recipe selected</p>
      </div>
    );
  }
  return (
    <div className="sContainer">
      <div className="sCard">
        <p className="sTitle"> {recipe.label}</p>
        <div className="sNutrition">
          <p><i class="fa-solid fa-plate-wheat fa-xl"></i> <span id="text"> {Math.floor(recipe.calories)}</span></p>
          <hr/>
          <p><i class="fa-solid fa-fire-burner fa-xl"></i> <span id="text"> {recipe.totalTime ? recipe.totalTime + " mins" : "N/A"} </span></p>
          <hr/>
          <p><i class="fa-solid fa-utensils fa-xl"></i> <span id="text">{recipe.cuisineType}</span></p>
        </div>
        <div className="sContent">
          <div className="sImage" style={{ backgroundImage: `url(${recipe.image})` }} >
            {/* <img className="sImg" src={recipe.image} alt={recipe.label}></img> */}
          </div>
          <div className="sIngredient">
            <p><strong> {recipe.ingredientLines.length} Ingredients</strong></p>
            <ol>
              {recipe.ingredientLines.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
