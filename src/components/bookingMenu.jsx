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



