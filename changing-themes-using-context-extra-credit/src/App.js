import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import { withTheme } from "./withTheme"

function App(props) {

    return (
        <div>
            <Header
                theme={props.lightModeOn ? "light-theme" : "dark-theme"} chosen= {props.chosen}/>

            <Main
                theme={props.lightModeOn ? "light-theme" : "dark-theme"}
                changeTheme={props.changeTheme}
                chosen={props.chosen}
                changeCustom={props.changeCustom} />

            <Footer
                theme={props.lightModeOn ? "light-theme" : "dark-theme"} chosen= {props.chosen} />
        </div>
    )

}

export default withTheme(App)