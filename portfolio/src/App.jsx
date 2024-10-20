import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'

function App() {
  return (
   <div className=''>
    <Navbar/>
    <About/>
    <hr className='mt-6 text-darkBlue'/>
    <Skills/>
    <hr className='mt-6 text-darkBlue'/>
    <Projects/>
    <hr className='mt-6 text-darkBlue'/>
    <Experience/>
   </div>
  )
}

export default App
