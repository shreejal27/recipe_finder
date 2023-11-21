import React from "react"

import '../CardDetails.css';

export default function CardDetails(props) {
  const { recipe } = props;

  // if (!recipe) {
  //   return (
  //     <div>
  //       <h1>Hello</h1>
  //       <p>This is from CardDetails page</p>
  //       <p>No recipe selected</p>
  //     </div>
  //   );
  // }
  return (
    <div className="sContainer">
      <div className="sCard">
        <p className="sTitle"> {recipe.label}</p>
        <p className="sDiet"><i class="fa-solid fa-cookie-bite fa-xl"></i> Diet:<span id="text">{recipe.dietLabels.length > 0 ? recipe.dietLabels.join(", ") : "N/A"}</span></p>
        <div className="sNutrition">
          <p><i class="fa-solid fa-fire fa-xl"></i> Calories: <span id="text">{recipe.calories? Math.floor(recipe.calories)+ " kcal" : "N/A"} </span></p>
          <hr />
          <p><i class="fa-solid fa-stopwatch fa-xl"></i> CookTime: <span id="text"> {recipe.totalTime ? recipe.totalTime + " mins" : "N/A"} </span></p>
          <hr />
          <p><i className="fa-solid fa-utensils fa-xl"></i> Cuisine: <span id="text">{recipe.cuisineType ? recipe.cuisineType : "N/A"}</span></p>
        </div>

        <div className="sNutrition">
          <p><i class="fa-solid fa-bowl-food fa-xl"></i> Servings:<span id="text"> {recipe.yield? recipe.yield : "N/A"} </span></p>
          <hr />
          <p><i class="fa-solid fa-kitchen-set fa-xl"></i> DishType: <span id="text">{recipe.dishType ? recipe.dishType : "N/A"}</span></p>
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
                <p>
                  <strong> Preparation</strong> 
                  <br/>
                    Instructions on <a href={recipe.url}  target="_blank" rel="noreferrer"> {recipe.source} </a> 
                </p>
          </div>
        </div>
      </div>
    </div>
  );
}
