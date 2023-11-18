import React from "react"

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
        <div>
          <h1>Hello</h1>
          <p>This is from CardDetails page</p>
          <p>Clicked Item: {recipe.label}</p>
    
          {/* Access other properties of the recipe object as needed */}
          <p>Calories: {Math.floor(recipe.calories)}</p>
          <p>Ingredients:</p>
          <ul>
            {recipe.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          {/* Add more details as needed */}
        </div>
      );
}
