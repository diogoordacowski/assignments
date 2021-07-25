import React from "react"
import { ThemeConsumer } from "./themeContext"

function Footer() {
    return (
        <ThemeConsumer>
            {context => (
                <div className={`${context.theme}-theme`}>
                    <div className="footer">
                        <h2>This is the {context.theme} footer</h2>
                    </div>
                </div>
            )}
        </ThemeConsumer>

    )
}

export default Footer