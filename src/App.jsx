import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import BookingMenu from "./components/bookingMenu"

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
