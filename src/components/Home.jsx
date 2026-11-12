import React from 'react'
import {Dot} from 'lucide-react'
import PillButton from './PillButton'
const Home = () => {
  return (
   <section id='home' className='min-h-screen  pt-45 px-30'>
       <div className='fade-up flex justify-between'>
        
        <div>
          <h1 className='text-3xl mb-3 text-animate  '> i'm Taba Zanish !</h1>
          <h2 className='text-5xl text-[#FFC900] font-bold'>Front-end <br/>
Web Developer </h2>
          <p className='w-110 mt-5'>BSIT student from Grw, blending clean React interfaces with solid backend fundamentals to build fast, reliable web products.</p>
          <div className='flex gap-8 mt-10'>
      <PillButton href="\resume\resume.pdf" target="_blank" rel="noopener noreferrer">
        View My CV
      </PillButton>
      <a href='https://www.linkedin.com/in/zanish-nasir-00446741b/' target='_blank' > 
      <img src='li.png' className='h-9 w-9 rounded-full grayscale opacity-40 hover:grayscale-50 hover:opacity-50 transition-all duration-300 active:scale-95'/>
      </a>
      <a href='https://github.com/zanish27' target='_blank' > 
      <img src='gi.png' className='h-9 w-9 rounded-full grayscale opacity-40 hover:grayscale-50 hover:opacity-100 transition-all duration-300 active:scale-95'/>
      </a>
      </div>
    </div>
        <div className='h-70 w-120 border-blink border-[#FFC900] border-2 rounded-2xl mr-10 hover:-translate-y-2 p-4 px-8 '>
          <p className='flex  text-sm items-center '><Dot size={16} strokeWidth={13}  /> <Dot size={16} strokeWidth={13} /> <Dot size={16} strokeWidth={13} />  zanish@dev ~ %</p>
          <p className='mt-2'>$ whoami</p>
          <h1 className='mt-2'>Zanish — BSIT student, Grw</h1>
          <p className='mt-2'>$ status</p>
          <h1 className='mt-2 '>→ open to Web Developer internships</h1>
          <p className='mt-2'>$ stack --list</p>
          <h1 className='mt-2'>React · Tailwind · Node.js</h1>
          <p className='mt-2'>$</p>
        
      
        </div>
        
       </div>
   </section>
  )
}

export default Home
