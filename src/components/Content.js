import React from "react"
export default function Content() {
    const handleSubmit = (event) => {
        event.preventDefault()
        alert("value: " + document.getElementById("input").value);
    }
    return (
        <div id="content">
            <div class="row">
                <form id="form" onSubmit={handleSubmit}>
                    <input type="text" id="input" />
                    <input type="submit" id="button" value="Submit" />
                </form>
            </div>
        </div>
    )

}