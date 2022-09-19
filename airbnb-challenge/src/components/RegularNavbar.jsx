import React from "react";
import "../stylesheets/RegularNavbar.css";

function RegularNavbar({ navbarSelected, locationText, focusLocation, focusGuests, totalGuests }) {
    return (
        <div className={`wrapper ${navbarSelected ? "display-none" : ""}`}>
        <div>
          <img src={require("../images/logo.png")} alt="logo" />
        </div>
        <div className="select-container">
          <div className="select-text-container">
            <p onClick={focusLocation}>{locationText}</p>
          </div>
          <div className="separator"></div>
          <div className="select-text-container">
            <p onClick={focusGuests} className={`${totalGuests === 0 ? "no-selection" : ""}`}>{totalGuests === 0 ? "Add guests" : totalGuests}</p>
          </div>
          <div className="separator"></div>
          <div className="select-text-container" style={{width: 50}}>
            <span class="material-symbols-outlined">search</span>
          </div>
        </div>
      </div>
    );
}

export default RegularNavbar;