import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar '
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Publication from './Components/Publication';
import PhotoGallery from './Components/PhotoGallery';

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <PhotoGallery></PhotoGallery>
      <About></About>
      <Projects></Projects>
      <Publication></Publication>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
