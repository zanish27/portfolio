import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Cursor from './components/Cursor'


const App = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 })
const [down, setDown] = useState(false)

useEffect(() => {
  const moveHandler = (e) => {
    setPos({ x: e.clientX, y: e.clientY })
  }
  const downHandler = () => {
    setDown(true)
  }
  const upHandler = () => {
    setDown(false)
  }
  window.addEventListener('mousemove', moveHandler)
  window.addEventListener('mousedown', downHandler)
  window.addEventListener('mouseup', upHandler)
  return () => {
    window.removeEventListener('mousemove', moveHandler)
    window.removeEventListener('mousedown', downHandler)
    window.removeEventListener('mouseup', upHandler)
  }
}, [])




useEffect(() => {
  const obs = new IntersectionObserver(([e]) => {
    document.querySelectorAll('.card').forEach((c, i) => {
      c.classList.toggle('show', e.isIntersecting);
      c.style.animationDelay = `${i * 1.2}s`;
    });
  }, { threshold: 0.2 });

  obs.observe(document.querySelector('#projects'));
  return () => obs.disconnect();
}, []);



const [selected, setSelected] = useState(null)
const projects = [
  {
    title: 'Buffer Project',
    description: 'Buffer is an all-in-one social media management platform designed for creators and engage with content across multiple channels',
    stack: 'React, Tailwind CSS, useState'
  },
  {
    title: 'Notes App',
    description: 'A simple notes app where you can add, view and delete notes. Each note has a title and details, and everything updates instantly on the screen.',
    stack: 'React, Tailwind CSS, useState'
  },
  {
    title: 'UI Design',
    description: 'A clean UI design practice project with cards, a colour palette, typography and spacing. I made it to improve my layout and styling skills.',
    stack: 'React, Tailwind CSS'
  },
  {
    title: 'Gallery Project',
    description: 'An image gallery with a neat grid layout and an add button for new pictures. It focuses on responsive design and smooth hover effects.',
    stack: 'React, Tailwind CSS, lucide-react'
  },
]

  return (
    <div>
      <Cursor pos={pos} down={down} />
      <Navbar/>
      
      <Home/>
      <About/>
      <Projects selected={selected} setSelected={setSelected } projects={projects}/>
      <Skills/>  
      <Contact/>

      
    </div>
  )
}

export default App
