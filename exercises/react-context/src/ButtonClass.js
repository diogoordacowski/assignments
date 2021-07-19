import React, {Component} from "react"
import {ThemeContextConsumer} from "./themeContext"

class ButtonClass extends Component{
    render() {
        return (
            <ThemeContextConsumer>
                {context => (
                    <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme w/ Button Class</button>
                )}
            </ThemeContextConsumer>
        )    
    }
   
}

export default ButtonClass
