import React from "react"
import PropTypes from "prop-types"

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

FunctionalCard.propTypes = {
    backgroundColor: PropTypes.oneOf(["blue","red"]), 
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired

}

FunctionalCard.defaultProps = {
    backgroundColor: "black", 
    height: 150,
    width: 300 
}

export default FunctionalCard