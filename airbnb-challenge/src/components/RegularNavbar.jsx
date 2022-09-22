import React from "react";
import "../stylesheets/navbar/RegularNavbar.css";

function RegularNavbar({ navbarSelected, locationText, focusLocation, focusGuests, totalGuests, search }) {
    return (
        <div className={`wrapper ${navbarSelected ? "display-none" : ""}`}>
        <div>
          <img src={require("../images/logo.png")} alt="logo" />
        </div>
        <div className="select-container">
          <div className="select-text-container" style={{width:148}}>
            <p onClick={focusLocation}>{locationText}, Finland</p>
          </div>
          <div className="separator"></div>
          <div className="select-text-container" style={{width:113}}>
            <p onClick={focusGuests} className={`${totalGuests === 0 ? "no-selection" : ""}`}>{totalGuests === 0 ? "Add" : totalGuests} guests</p>
          </div>
          <div className="separator"></div>
          <div className="select-text-container" style={{width: 50}}>
            <span class="material-symbols-outlined" onClick={search}>search</span>
          </div>
        </div>
      </div>
    );
}

export default RegularNavbar;