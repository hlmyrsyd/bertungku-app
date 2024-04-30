import { useState } from 'react'
import './App.css'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navigation from './components/Navigations'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <>
      <Navigation />
      <HeroSection />
      <Portfolio />
      <AboutUs />
      <Footer />
    </>
  )
}

export default App
