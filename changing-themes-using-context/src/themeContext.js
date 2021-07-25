import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class ThemeProvider extends Component {
    state = {
        theme: "dark"
    }

    changeTheme = () => {
      this.setState(prevState => {
          return {
            theme: prevState.theme === "dark" ? "light" : "dark"
          }  
      })
      console.log("Change Theme Button Pushed " + this.state.theme)
    }

    render() {
        return(
            <Provider value= {{theme:this.state.theme, toggleTheme: this.changeTheme}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeProvider, Consumer as ThemeConsumer}