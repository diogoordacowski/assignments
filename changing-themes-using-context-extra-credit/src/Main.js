import React from "react"

function Main(props) {
    return (

        <main className={props.theme} id={props.chosen}>
            
            <h1>  Click the button to toggle the theme   </h1>

            <button onClick={props.changeTheme} className={props.theme}>  Toggle theme </button>

            <h1> Use the drop-down selector to choose font colors</h1>


            <label >Choose a theme </label>
            <select onChange={props.changeCustom}>
                <option value="yellow">yellow</option>
                <option value="green">green</option>
                <option value="red">red</option>
            </select>

        
        </main >
    )
}

export default Main