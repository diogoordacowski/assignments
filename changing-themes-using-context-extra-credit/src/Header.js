import React from "react"

function Header(props) {
    return (
        <div className={props.theme} id={props.chosen} >
            <div className="header">
                <h2>Home</h2>
                <h2>About</h2>
                <h2>Contact</h2>
            </div>
        </div>
    )
}

export default Header