import React from 'react'

const Navbar = () => {
  return (
    <nav className='fade-up fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-3xl  h-18 flex justify-between px-30 pt-10 pb-6 items-center '>

      <div className=' '>
        <h1 className='border-2 border-blink rounded-full h-11 w-11 text-lg p-2 flex items-center text-[#FFC900] transition duration-300 cursor-pointer'>TZ.</h1>
      </div>

      <div className='border-2 rounded-full w-105 h-12 p-4 flex items-center'>
        <a href='#home' className='hover:text-[#FFC900] transition duration-300 ml-2 mr-8 '>Home</a>
        <a href='#about' className='hover:text-[#FFC900] transition duration-300 mr-8'>About</a>
        <a href='#projects' className='hover:text-[#FFC900] transition duration-300 mr-8'>Projects</a>
        <a href='#skills' className='hover:text-[#FFC900] transition duration-300 mr-8'>Skills</a>
        <a href='#contact' className='hover:text-[#FFC900] transition duration-300 mr-8 '>Contact</a>
      </div>

      <div>
        <a href='#contact'  className=' inline-block px-4 py-2   rounded-full bg-[#FFC900] hover:bg-amber-400 hover:-translate-y-1 transition duration-300 active:scale-95 text-black '>Let's Talk</a>
        
      </div>

    </nav>
  )
}

export default Navbar
