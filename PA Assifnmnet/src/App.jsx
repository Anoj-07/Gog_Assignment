import { Route, Routes } from "react-router-dom"
import Navbar from "./assets/Components/Navbar"
import Home from "./Pages/Home"
import Footer from "./assets/Components/Footer"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Login from "./assets/Components/Login"
import Register from "./assets/Components/Register"


function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
    {/* navbar section */}
    <Navbar/>
      {/* used router dom for routing */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Register/>}/>
      </Routes>

      {/* footer section */}
    <Footer/>
    </div>
  )
}

export default App
