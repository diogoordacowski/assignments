import React from "react"
import { ThemeConsumer } from "./themeContext"

function Main(props) {
    return (
        <ThemeConsumer>
            {context => (
                <div className={`${context.theme}-main`}>
                    <h1> Click the button to toggle the {context.theme === "light" ? "Dark" : "Light"} theme </h1>
                    
                    <button onClick={context.toggleTheme} className={`${context.theme}-theme`}> Toggle {context.theme === "light" ? "Dark" : "Light"} theme</button>
                </div>
            )}

        </ThemeConsumer>

    )
}

export default Main