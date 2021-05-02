import React from "react"


function Header(props) {

    return (
        
        <div className="header-container">
            <nav>
                <a href="https://www.google.com">Start Bootstrap</a>
                <button className="nav-menu-btn">Menu ☰</button>
            </nav>
            <div className="background"></div>
            <div className="overlay"></div>
            <div className="header-title">
                <h1>Clean Blog</h1>
                <h2>A Blog Theme by Start Bootstrap </h2>
            </div>

        </div>
 
    )
}

export default Header