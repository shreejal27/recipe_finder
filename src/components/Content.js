import React from "react"

import Cards from "./Cards"

export default function Content() {

    const [userInput, setUserInput] = React.useState("")
    const [recipeData, setRecipeData] = React.useState([])
    const [submitted, setSubmitted] = React.useState(false);

    const APIKey = "0bbacea6a81b27ea27071eceb0d7471a"
    const APIId = "3afbd549"

    const APIreq = `https://api.edamam.com/search?q=${userInput}&app_id=${APIId}&app_key=${APIKey}`

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
                        placeholder="Enter an ingredient"
                        onChange={handleChange}
                        value={userInput} />
                    <br />
                    <button type="submit"> Search </button>
                </form>
            </div>
            <div className="container">
                {recipeData.map((recipe, index) => (
                <Cards 
                    key={index}
                    label={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients = {recipe.recipe.ingredients.length}

                />
                ))}
      </div>
        
        </div>
    )

}