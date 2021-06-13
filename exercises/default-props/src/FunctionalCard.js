import React from "react"

function FunctionalCard (props) {

    const styles = {
        backgroundColor: props.backgroundColor,
        height: props.height,
        width: props.width
    }

    return (
        <div style={styles}></div>
    )
}

FunctionalCard.defaultProps = {
    backgroundColor: "black",
    height: 150,
    width: 300
}

export default FunctionalCard