import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import BookingMenu from "./components/bookingMenu"
import Stays from "./components/bookingEl/Stays"
import Flight from "./components/bookingEl/Flight"
import Cars from "./components/bookingEl/Cars"
import { useEffect, useState } from "react"

function App() {

  return (
    <>
    <div className="container">
        <Header />
        <BookingMenu />
        <Content />
        <Footer />
    </div>
    </>
  )
}

export default App
