import React, {Component} from "react"
import Proptype from "prop-types"

class ClassCard extends Component {
    static defaultProps = {
        backgroundColor: "black", 
        height: 150,
        width: 150
    }

    static propTypes = {
        backgroundColor: Proptype.oneOf(["yellow", "orange", "pink"]), 
        height: Proptype.number.isRequired,
        width: Proptype.number.isRequired
    }

    render() {
        const styles = {
            backgroundColor: this.props.backgroundColor,
            height: this.props.height,
            width: this.props.width
        }

        return (
            <div style={styles}></div>
        )
    }
}



export default ClassCard