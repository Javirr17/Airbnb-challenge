import React from "react";
import "../stylesheets/SelectedNavbar.css";

function SelectedNavbar({ navbarSelected, locationFocus, focusLocation, locationText, 
                        changeLocation, guestsFocus, focusGuests, totalGuests, 
                        substractGuest, addGuest, childrenGuests, adultGuests }) {

    return (
        <div className={`extended-wrapper ${!navbarSelected ? "display-none" : ""}`}>
        
        <div className="extended-select-container">

          <div className="inner-field-wrapper">

                <div
                    className={`items-wrapper ${locationFocus ? "fieldFocused" : ""}`}
                    onClick={focusLocation}
                >
                <p className="select-title selected-field-text">LOCATION</p>
                <p className="selected-field-text">{locationText}</p>
                </div>

                <div style={{marginTop: "30px"}} className={`${!locationFocus ? "display-none" : ""}`}> 

                    <div className="inner-location-wrapper" onClick={() => changeLocation("Helsinki, Finland")}>
                        <span class="material-symbols-outlined ubi-logo">location_on</span>
                        <p className="inner-location-text">Helsinki, Finland</p>
                    </div>

                    <div className="inner-location-wrapper" onClick={() => changeLocation("Turku, Finland")}>
                        <span class="material-symbols-outlined ubi-logo">location_on</span>
                        <p className="inner-location-text">Turku, Finland</p>
                    </div>

                    <div className="inner-location-wrapper" onClick={() => changeLocation("Oulu, Finland")}>
                        <span class="material-symbols-outlined ubi-logo">location_on</span>
                        <p className="inner-location-text">Oulu, Finland</p>
                    </div>

                    <div className="inner-location-wrapper" onClick={() => changeLocation("Vaasa, Finland")}>
                        <span class="material-symbols-outlined ubi-logo">location_on</span>
                        <p className="inner-location-text">Vaasa, Finland</p>
                    </div>
                
                </div>

          </div>

          <div className="separator"></div>

          <div className="inner-field-wrapper">

            <div
              className={`items-wrapper ${guestsFocus ? "fieldFocused" : ""}`}
              onClick={focusGuests}
            >
              <p className="select-title selected-field-text">GUESTS</p>
              <p className={`selected-field-text ${totalGuests === 0 ? "no-selection" : ""}`}>{totalGuests === 0 ? "Add guests" : totalGuests}</p>
            </div>

            <div style={{marginTop: "45px"}} className={`${!guestsFocus ? "display-none" : ""}`}> 

                    <div>
                        <p className="inner-guests-text">Adults<br></br><span>Age 13 or above</span></p>
                        <div className="guests-div">
                            <div className="add-substract-div" onClick={() => substractGuest("adult")}>-</div>
                            <p className="guests-counter-text">{adultGuests}</p>
                            <div className="add-substract-div" onClick={() => addGuest("adult")}>+</div>
                        </div>
                    </div>

                    <div>
                        <p className="inner-guests-text">Children<br></br><span>Ages 2-12</span></p>
                        <div className="guests-div">
                            <div className="add-substract-div" onClick={() => substractGuest("children")}>-</div>
                            <p className="guests-counter-text">{childrenGuests}</p>
                            <div className="add-substract-div" onClick={() => addGuest("children")}>+</div>
                        </div>
                    </div>
                
                </div>
          
          </div>

          <div className="separator"></div>
          
          <div className="items-wrapper flex" style={{width: 426}}>
            <div className="search-wrapper flex">
              <span class="material-symbols-outlined inversed">search</span>
              <p id="searchText">Search</p>
            </div>
          </div>
        </div>

      </div>
    );

}

export default SelectedNavbar;