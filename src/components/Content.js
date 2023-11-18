import React from "react"

import Cards from "./Cards"

export default function Content() {

    const [userInput, setUserInput] = React.useState("")
    const [recipeData, setRecipeData] = React.useState([])
    const [submitted, setSubmitted] = React.useState(false);

    const APIKey = "0bbacea6a81b27ea27071eceb0d7471a"
    const APIId = "3afbd549"

    const APIreq = `https://api.edamam.com/search?q=${userInput}&app_id=${APIId}&app_key=${APIKey}&from=0&to=20`

    function handleChange(event) {
        setUserInput(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setSubmitted(true);
        console.log(userInput)
    }

    React.useEffect(() => {
        if (submitted) {
            fetch(APIreq)
                .then(res => res.json())
                .then(data => setRecipeData(data.hits))
            setSubmitted(false);
        }
    }, [submitted,APIreq])

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
            <div className="container">
                {recipeData.map((recipe, index) => (
                <Cards 
                    key={index}
                    recipeId={index+1}
                    label={recipe.recipe.label}
                    calories={Math.floor(recipe.recipe.calories)}
                    image={recipe.recipe.image}
                    ingredients = {recipe.recipe.ingredients.length}
                    source= {recipe.recipe.source}
                    url= {recipe.recipe.url}
                />
                ))}
      </div>
        
        </div>
    )

}