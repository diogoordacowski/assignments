import React from "react"
import propTypes from "prop-types"

function RoundedImg(props) {
    return (
        <img 
            src={props.src} 
            style={{borderRadius: props.borderRadius}} 
            className="round-img"
            alt=""
        />
    )
}

RoundedImg.propTypes = {
    src: propTypes.string.isRequired,
    borderRadius: propTypes.oneOfType([propTypes.string, propTypes.number])
    
}

RoundedImg.defaultProps = {
    borderRadius: "50%"
}

export default RoundedImg