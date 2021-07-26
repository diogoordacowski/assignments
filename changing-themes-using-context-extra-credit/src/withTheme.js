import React, {Component} from "react"

class ThemeProvider extends Component {
    state = {
        lightModeOn: true,
        chosenTheme: ""
    }

    changeTheme = () => {
      this.setState(prevState => {
          return {
            lightModeOn: !prevState.lightModeOn
          }  
      })
    }

    changeCustom = (e) =>  {
        console.log(`you chose ${e.target.value}`)
        this.setState({
            chosenTheme: e.target.value
        })
    }

    render() {
        const NewComponent = this.props.component
        return(
            <NewComponent 
                lightModeOn = {this.state.lightModeOn} 
                changeTheme = {this.changeTheme} 
                chosen = {this.state.chosenTheme}
                changeCustom = {this.changeCustom}  />
        )
    }
}

export function withTheme (component) {
    return function (props) {
        return (
            <ThemeProvider component={component} {...props} />
        )
    }
}