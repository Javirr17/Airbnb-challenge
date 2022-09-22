import {React, useState, useEffect} from "react";
import "../stylesheets/stays/IndividualStay.css"

function IndividualStay({photo, superHost, type, beds, rating, title}) {

    const [areBeds, setAreBeds] = useState(true);

    useEffect(() =>{
        if(beds === null) setAreBeds(false)
    }, [beds])

    return (
        <div className="stay-wrapper">
            <img className="image" src={photo} alt="houseImage"/>
            <div className="info-wrapper">
                <div className={`${superHost ? "superHost" : "display-none"}`}>
                    SUPER HOST
                </div>
                <p className="type">{type}</p>
                <p className={`beds ${areBeds ? "" : "display-none"}`}>{beds} beds</p>
                <div className="rating-wrapper">
                    <span class="material-symbols-outlined">star</span>
                    <p>{rating}</p>
                </div>
            </div>
            <p className="title">{title}</p>
        </div>
    );
}

export default IndividualStay;