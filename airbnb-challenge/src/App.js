import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar.jsx"
import Stays from './components/Stays.jsx';
import data from "./stays.json"

function App() {

  const [locationText, setLocationText] = useState("Helsinki");
  const [totalGuests, setTotalGuests] = useState(0);
  const [stays, setStays] = useState([]);
  const [numStays, setNumStays] = useState(0);
  const [navbarSelected, setNavbarSelected] = useState(false);

  const selectNavbar = (value) => {
    setNavbarSelected(value);
  };

  const changeLocation = newLocation => {
    setLocationText(newLocation);
    console.log(locationText)
  }

  const updateStays = () => {
    const actualStays = [];

    for(const stay of data) {
        if(stay.city === locationText && stay.maxGuests >= totalGuests){

            actualStays.push({
                                photo : stay.photo,
                                title : stay.title,
                                type : stay.type,
                                beds : stay.beds,
                                rating : stay.rating, 
                                superHost : stay.superHost
                            });
                            

        }
    }
    setNumStays(actualStays.length);
    setStays(actualStays);
}

  return (
    <div className="App">
      <Navbar changeLocation={changeLocation} locationText={locationText}
              totalGuests={totalGuests} setTotalGuests={setTotalGuests} updateStays={updateStays}
              navbarSelected={navbarSelected} selectNavbar={selectNavbar}/>

      <Stays locationText={locationText}
             totalGuests={totalGuests}
             updateStays={updateStays}
             stays={stays}
             numStays={numStays}/>
             
      <div className={`${navbarSelected ? "shadowDiv" : "display-none"}`}></div>
    </div>
  );
}

export default App;
