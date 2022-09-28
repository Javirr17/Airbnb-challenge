import React, { useState } from "react";
import RegularNavbar from "./RegularNavbar.jsx";
import SelectedNavbar from "./SelectedNavbar.jsx";


function Navbar({changeLocation, locationText, totalGuests, setTotalGuests, updateStays, navbarSelected, selectNavbar}) {
  const [locationFocus, setLocationFocus] = useState(false);
  const [guestsFocus, setGuestsFocus] = useState(false);
  const [adultGuests, setAdultGuests] = useState(0);
  const [childrenGuests, setChildrenGuests] = useState(0);

  const focusLocation = () => {
    setGuestsFocus(false);
    setLocationFocus(true);
    selectNavbar(true);
  };

  const focusGuests = () => {
    setLocationFocus(false);
    setGuestsFocus(true);
    selectNavbar(true);
  };

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

  const search = () => {
    selectNavbar(false);
    updateStays();
  }

  return (
    <>
      <RegularNavbar 
        navbarSelected={navbarSelected}
        locationText={locationText}
        focusLocation={focusLocation}
        focusGuests={focusGuests}
        totalGuests={totalGuests}
        search={search}/>

      <SelectedNavbar navbarSelected={navbarSelected} locationFocus={locationFocus} focusLocation={focusLocation} locationText={locationText}
                      changeLocation={changeLocation} guestsFocus={guestsFocus} focusGuests={focusGuests} totalGuests={totalGuests}
                      substractGuest={substractGuest} addGuest={addGuest} childrenGuests={childrenGuests} adultGuests={adultGuests}
                      search={search}
        />
    </>
  );
}

export default Navbar;
