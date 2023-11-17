import React from "react"
export default function Cards(props) {

    const userInput = props.userInput
    const APIKey = "0bbacea6a81b27ea27071eceb0d7471a"
    const APIId = "3afbd549"

    const APIreq= `https://api.edamam.com/search?q=potato&app_id=${APIId}&app_key=${APIKey}`

    return (
        <div >
            <h1>Title</h1>
            <h2>Calories</h2>
        </div>
    )

}
