import React from "react"

function Footer(props) {
    return (
        <div className={props.theme} id={props.chosen}>
            <div className="footer">
                <h2>This is the footer</h2>
            </div>
        </div>

    )
}

export default Footer