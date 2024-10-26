import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className=''>
      <Navbar />
      <About />
      <hr className='mt-6 text-darkBlue' />
      <Skills />
      <hr className='mt-6 text-darkBlue' />
      <Projects />
      <hr className='mt-6 text-darkBlue' />
      <Experience />
      <hr className='mt-6 text-darkBlue' />
      <Contact />
    </div>
  )
}

export default App
