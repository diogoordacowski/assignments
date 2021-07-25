import React from "react"
import { ThemeConsumer } from "./themeContext"

function Header() {
    return (
        <ThemeConsumer>
            {context => (
                <div className={`${context.theme}-theme`} >
                    <div className="header">
                        <h2>Home</h2>
                        <h2>About</h2>
                        <h2>Contact</h2>
                    </div>
                </div>
            )}
        </ThemeConsumer>


    )
}

export default Header