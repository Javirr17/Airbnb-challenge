import React from "react";
import "../stylesheets/Navbar.css"

function Navbar() {
    return (
        <div className="wrapper">
            <div>
                <img src={require("../images/logo.png")} alt="logo" />
            </div>
            <div className="select-container">
                <p>Helsinki, Finland</p>
                <div className="separator"></div>
                <p className="no-selection">Add guests</p>
                <div className="separator"></div>
                <span class="material-symbols-outlined">search</span>
            </div>
        </div>
    )
}

export default Navbar;