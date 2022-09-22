import {React, useEffect, useState} from "react";
import "../stylesheets/stays/Stays.css"
import IndividualStay from "./IndividualStay.jsx";
import data from "../stays.json"

function Stays({locationText, totalGuests}) {

    const [stays, setStays] = useState([]);

    useEffect(() => {
        updateStays();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateStays = () => {
        const actualStays = [];

        for(const stay of data) {
            console.log(stay.city === locationText && totalGuests <= stay.maxGuests)
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
        setStays(actualStays);
    }

    return(
        <div className="main-wrapper">
            <div className="general-stays-info">
                <p id="stays-title">Stays in {locationText}</p>
                <p id="stays-number">12+ stays</p>
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
        </div>
    );
}

export default Stays;