import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Textutiles from './Textutiles'
import  About from './components/About'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route  exact  path="/" element={<Textutiles/>} />
      <Route  exact  path="/about" element={<About/>} />
    </Routes>
  </BrowserRouter>
  
  

   
  )
}
