import style from '../../style/Booking.module.css';
import { useEffect, useState } from 'react';
import { Select, Space,DatePicker } from 'antd'
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Flight from './bookingEl/Flight';
import Stays from './bookingEl/Stays';
import Cars from './bookingEl/Cars';
import Packages from './bookingEl/Packages';
import ThingsToDo from './bookingEl/ThingsToDo';

const BookingMenu = () => {
    const [active, setActive] = useState("Cars")
    const [data,setData] = useState()
    const url = 'http://test.api.amadeus.com/shopping/flight-offers/oLRcNG7WnGjcmqvWBogMtd80cr8jlxIH'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => setData(result))
    },[])
    console.log(data)
        return(
            <div className={style.booking}>
            <header className={style.header}>
                <nav className={style.navBar}>
                    <ul>
                        <li id='stays' onClick={() => setActive("Stays")}>Stays</li>
                        <li id='flight' onClick={() => setActive("Flight")}>Flight</li>
                        <li id='cars' onClick={() => setActive("Cars")}>Cars</li>
                        <li id='packages' onClick={() => setActive("Packages")}>Packages</li>
                        <li id='thingsToDo' onClick={() => setActive("ThingsToDo")}>Things to do</li>
                    </ul>
                </nav>
                <div className={style.line}></div>
            </header>
            {active === 'Stays' && <Stays  active={active}/>}
            {active ===  'Flight' && <Flight />}
            {active === "Cars" && <Cars />}
            {active === "Packages" && <Packages />}
            {active === "ThingsToDo" && <ThingsToDo />}
            </div>
    )
}

export default BookingMenu




  // useEffect(() => {
    //     const url = `https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/direct/?destination=${toVal}&origin=${fromVal}`;
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-Access-Token': '3302a067ced8bafa9c736d205cbec6ba',
    //             'X-RapidAPI-Key': 'b050454057msh90861deb90fecabp18583ejsnfc21272c8ac1',
	// 	        'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
	//     }
    // };
    // fetch(url, options)
    //     .then(res => res.text())
    //     .then(result => setData(result))
    // },[data])