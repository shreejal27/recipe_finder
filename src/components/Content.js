import React from "react"

import Cards from "./Cards"
import CardDetails from "./CardDetails"

export default function Content() {

    const [userInput, setUserInput] = React.useState("")
    const [recipeData, setRecipeData] = React.useState([])
    const [submitted, setSubmitted] = React.useState(false);
    const [selectedRecipe, setSelectedRecipe] = React.useState(null)

    const APIKey = "0bbacea6a81b27ea27071eceb0d7471a"
    const APIId = "3afbd549"

    const APIreq = `https://api.edamam.com/search?q=${userInput}&app_id=${APIId}&app_key=${APIKey}&from=0&to=20`

    function handleChange(event) {
        setUserInput(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setSubmitted(true);
        setSelectedRecipe(null)
        console.log(userInput)
    }

    function handleCardClick(recipe) {
        setSelectedRecipe(recipe)
        console.log(recipe)
    }

    React.useEffect(() => {
        if (submitted) {
            fetch(APIreq)
                .then(res => res.json())
                .then(data => setRecipeData(data.hits))
            setSubmitted(false);
        }
    }, [submitted, APIreq])

    return (
        <div id="content">
            <div class="row">
                <form id="form" onSubmit={handleSubmit}>
                    <input type="text"
                        id="input"
                        placeholder="Search Recipes"
                        onChange={handleChange}
                        value={userInput}
                    />
                    <button className="button" type="submit"> <i class="fa fa-search"></i> </button>
                </form>
            </div>
            {!selectedRecipe &&
                <div className="container">
                    {recipeData.map((recipe, index) => (
                        <Cards
                            key={index}
                            recipeId={index}
                            label={recipe.recipe.label}
                            calories={Math.floor(recipe.recipe.calories)}
                            image={recipe.recipe.image}
                            ingredients={recipe.recipe.ingredients.length}
                            source={recipe.recipe.source}
                            url={recipe.recipe.url}
                            onCardClick={() => handleCardClick(recipe.recipe)}
                        />
                    ))}
                </div>
            }
            {selectedRecipe &&
                <div className="specificRecipes">
                    <CardDetails recipe={selectedRecipe}/>
                </div>
            }

        </div>
    )

}