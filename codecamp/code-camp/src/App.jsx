import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
      <Header />
      <Hero />
      <Courses />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
