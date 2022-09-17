import React, { useState } from "react";
import "../stylesheets/Navbar.css";

function Navbar() {
  const [navbarSelected, setNavbarSelected] = useState(false);
  const [locationFocus, setLocationFocus] = useState(false);
  const [guestsFocus, setGuestsFocus] = useState(false);
  const [locationText, setLocationText] = useState("Helsinki, Finland");
  const [totalGuests, setTotalGuests] = useState(0);
  const [adultGuests, setAdultGuests] = useState(0);
  const [childrenGuests, setChildrenGuests] = useState(0);

  const focusLocation = () => {
    setGuestsFocus(false);
    setLocationFocus(true);
    selectNavbar();
  };

  const focusGuests = () => {
    setLocationFocus(false);
    setGuestsFocus(true);
    selectNavbar();
  };

  const selectNavbar = () => {
    setNavbarSelected(true);
  };

  const changeLocation = newLocation => {
    setLocationText(newLocation);
  }

  const addGuest = guestType => {

    if(guestType === "adult") setAdultGuests(adultGuests + 1);
    else setChildrenGuests(childrenGuests + 1);

    setTotalGuests(totalGuests + 1);
  }

  const substractGuest = guestType => {

    if(guestType === "adult"){
      if(adultGuests > 0){
        setAdultGuests(adultGuests - 1); 
        if(totalGuests > 0 )
          setTotalGuests(totalGuests - 1);
      }
        
    }
    else {
      if(childrenGuests > 0){
        setChildrenGuests(childrenGuests - 1);
        if(totalGuests > 0 )
          setTotalGuests(totalGuests - 1);     
      }
           
    }


  }

  return (
    <>
      <div className={`wrapper ${navbarSelected ? "display-none" : ""}`}>
        <div>
          <img src={require("../images/logo.png")} alt="logo" />
        </div>
        <div className="select-container">
          <p onClick={focusLocation}>{locationText}</p>
          <div className="separator"></div>
          <p onClick={focusGuests} className={`${totalGuests === 0 ? "no-selection" : ""}`}>{totalGuests === 0 ? "Add guests" : totalGuests}</p>
          <div className="separator"></div>
          <span class="material-symbols-outlined">search</span>
        </div>
      </div>

      {/*extended navbar*/}

      <div
        className={`extended-wrapper ${!navbarSelected ? "display-none" : ""}`}
      >
        <div className="extended-select-container">

          <div>

                <div
                    className={`items-wrapper ${locationFocus ? "fieldFocused" : ""}`}
                    onClick={focusLocation}
                >
                <p className="select-title selected-field-text">LOCATION</p>
                <p className="selected-field-text">{locationText}</p>
                </div>

                <div style={{marginTop: "30px"}} className={`${!locationFocus ? "display-none" : ""}`}> 

                    <div className="inner-location-wrapper" onClick={() => changeLocation("Helsinki, Finland")}>
                        <span class="material-symbols-outlined">location_on</span>
                        <p className="inner-location-text">Helsinki, Finland</p>
                    </div>

                    <div className="inner-location-wrapper" onClick={() => changeLocation("Turku, Finland")}>
                        <span class="material-symbols-outlined">location_on</span>
                        <p className="inner-location-text">Turku, Finland</p>
                    </div>

                    <div className="inner-location-wrapper" onClick={() => changeLocation("Oulu, Finland")}>
                        <span class="material-symbols-outlined">location_on</span>
                        <p className="inner-location-text">Oulu, Finland</p>
                    </div>

                    <div className="inner-location-wrapper" onClick={() => changeLocation("Vaasa, Finland")}>
                        <span class="material-symbols-outlined">location_on</span>
                        <p className="inner-location-text">Vaasa, Finland</p>
                    </div>
                
                </div>

          </div>

          <div className="separator"></div>

          <div>

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
          
          <div className="items-wrapper flex">
            <div className="search-wrapper flex">
              <span class="material-symbols-outlined inversed">search</span>
              <p id="searchText">Search</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Navbar;
