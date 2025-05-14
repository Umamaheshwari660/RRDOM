import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Navbar/Home/Home'
import About from './Components/Navbar/About/About'
import Contact from './Components/Navbar/Contact/Contact'
import { Routes,Route } from 'react-router-dom'
import Products from './Components/Navbar/Products/Products'
 

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Products />} />
      </Routes>
    </div>
  )
}

export default App