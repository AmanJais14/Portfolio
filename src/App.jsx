import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Project from './components/Project'

function App() {
  const [count, setCount] = useState(0)

    return (
      <main className='font-light text-white antialiased selection:bg-lime-300 selection:text-black'>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <Project/>
      </main>
    )
}

export default App
