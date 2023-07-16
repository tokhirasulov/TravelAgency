import style from '../../style/Booking.module.css';
import { useEffect, useState } from 'react';
import React from 'react';
import Flight from './bookingEl/Flight';
import Stays from './bookingEl/Stays';
import Cars from './bookingEl/Cars';
import Packages from './bookingEl/Packages';
import ThingsToDo from './bookingEl/ThingsToDo';

const BookingMenu = () => {
    const [active, setActive] = useState("Stays")
    const stays = document.getElementById('stays')
    const flight = document.getElementById('flight')
    const cars = document.getElementById('cars')
    const packages = document.getElementById('packages')
    const things = document.getElementById('thingsToDo')

    function handleChange(e){
        if(e.target.id == 'stays'){
            setActive("Stays")
            stays.classList.add('selected')
            flight.classList.remove('selected')
            cars.classList.remove('selected')
            packages.classList.remove('selected')
            things.classList.remove('selected')
        } else if(e.target.id == 'flight'){
            setActive("Flight")
            flight.classList.add('selected')
            stays.classList.remove('selected')
            cars.classList.remove('selected')
            packages.classList.remove('selected')
            things.classList.remove('selected')
        } else if(e.target.id == 'cars'){
            setActive("Cars")
            cars.classList.add('selected')
            stays.classList.remove('selected')
            flight.classList.remove('selected')
            packages.classList.remove('selected')
            things.classList.remove('selected')
        } else if(e.target.id == 'packages'){
            setActive("Packages")
            packages.classList.add('selected')
            flight.classList.remove('selected')
            cars.classList.remove('selected')
            stays.classList.remove('selected')
            things.classList.remove('selected')
        } else if(e.target.id == 'thingsToDo'){
            setActive("ThingsToDo")
            things.classList.add('selected')
            flight.classList.remove('selected')
            cars.classList.remove('selected')
            packages.classList.remove('selected')
            stays.classList.remove('selected')
    }}

        return(
            <div className={style.booking}>
            <header className={style.header}>
                <nav className={style.navBar}>
                    <ul>
                        <li id='stays' className='selected' onClick={handleChange}>Stays</li>
                        <li id='flight' onClick={handleChange}>Flight</li>
                        <li id='cars' onClick={handleChange}>Cars</li>
                        <li id='packages' onClick={handleChange}>Packages</li>
                        <li id='thingsToDo' onClick={handleChange}>Things to do</li>
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


