import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import Navigation from './components/Navigations'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <>
      <Navigation />
      <HeroSection />
      <Portfolio />
    </>
  )
}

export default App
