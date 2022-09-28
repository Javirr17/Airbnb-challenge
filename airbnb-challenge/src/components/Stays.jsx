import {React, useEffect} from "react";
import "../stylesheets/stays/Stays.css"
import Footer from './Footer.jsx';
import IndividualStay from "./IndividualStay.jsx";

function Stays({locationText, totalGuests, updateStays, stays, numStays}) {

    useEffect(() => {
        updateStays();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className="main-wrapper">
            <div className="general-stays-info">
                <p id="stays-title">Stays in {locationText}</p>
                <p id="stays-number">{numStays} stays</p>
            </div>
            <div className="stays-wrapper">

            {stays.map(stay =>{
                return (<IndividualStay photo={stay.photo}
                                    title={stay.title}
                                    type={stay.type}
                                    beds={stay.beds}
                                    rating={stay.rating}
                                    superHost={stay.superHost}/>);
            })}
            
            </div>
            <div className="footer-wrapper">
                <Footer />
            </div>
        </div>
    );
}

export default Stays;