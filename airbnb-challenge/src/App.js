import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar.jsx"
import Stays from './components/Stays.jsx';

function App() {

  const [locationText, setLocationText] = useState("Helsinki");
  const [totalGuests, setTotalGuests] = useState(0);

  const changeLocation = newLocation => {
    setLocationText(newLocation);
    console.log(locationText)
  }

  return (
    <div className="App">
      <Navbar changeLocation={changeLocation} locationText={locationText}
              totalGuests={totalGuests} setTotalGuests={setTotalGuests} />
      <Stays locationText={locationText}
             totalGuests={totalGuests}/>
    </div>
  );
}

export default App;
