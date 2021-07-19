import React, { Component } from "react"
import { ThemeContextConsumer } from "./themeContext"

class HeaderClass extends Component {

    render() {
        return (
            <ThemeContextConsumer>
                {context => {
                    return (
                        <header className={`${context.theme}-theme`}>
                            <h2>{context.theme === "light" ? "Light" : "Dark"} Theme | Class Header</h2>
                        </header>
                    )
                }}


            </ThemeContextConsumer>


        )
    }

}

export default HeaderClass
