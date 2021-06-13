import React, {Component} from "react"

class ClassCard extends Component {
    static defaultProps = {
        backgroundColor: "black",
        height: 150,
        width: 150
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