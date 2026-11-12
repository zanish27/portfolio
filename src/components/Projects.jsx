import {X, ArrowUpLeft } from 'lucide-react'
import React from 'react'

const Projects = (props) => {
  return (
    <section id='projects' className='min-h-screen pt-35 px-30 '>
      <h1 className='text-7xl font-bold text-[#FFC900] text-center mb-6'>Projects:</h1>
      <p className='text-center mb-30 text-lg'>A few things I've built while learning to ship real products</p>

      <div className='flex'>


        <div
        onClick={()=>{props.setSelected(0)}}
         className='card cursor-pointer hover:scale-90 transition-transform duration-300 h-100 w-145   -rotate-6 bg-[linear-gradient(191deg,rgba(245,243,239,1)_7%,rgba(255,201,0,1)_50%,rgba(245,243,239,1)_93%)] text-black rounded-xl'>
            <h1 className='text-3xl font-bold px-10 py-4'>Buffer Project</h1>
            <img src='buf.png' className='h-70 w-140 p-6 -rotate-2'/>
            <div className='flex justify-between px-10 mt-2'>
              <div className='flex  gap-4'>

            <a href='https://github.com/zanish27/buffer-project'  onClick={(e)=>{e.stopPropagation()}}><img src='gi.png' className='h-8 w-8 rounded-full transition-all duration-300 active:scale-125'/></a>
            <a href='' onClick={(e)=>{e.stopPropagation()}}><img src='verc.svg' className='h-8 w-8 rounded-full transition-all duration-300 active:scale-125' /></a>
              </div>
              <div>
                <ArrowUpLeft/>
              </div>
            </div>
            
        </div>



        <div 
         onClick={()=>{props.setSelected(1)}}
        className='card cursor-pointer hover:scale-90 transition-transform duration-300 h-100 w-145 -rotate-6  bg-[linear-gradient(191deg,rgba(245,243,239,1)_7%,rgba(255,201,0,1)_50%,rgba(245,243,239,1)_93%)] text-black rounded-xl'>
            <h1 className='text-3xl font-bold px-17 py-2'>Notes App</h1>
            <img src='not.png' className='h-70 w-140 p-6 -rotate-2'/>
            <div className='flex justify-between px-10 mt-5'>
              <div className='flex  gap-4'>
            <a href='https://github.com/zanish27/react-yt/tree/main/notes-app'  onClick={(e)=>{e.stopPropagation()}}><img src='gi.png' className='h-8 w-8 rounded-full transition-all duration-300 active:scale-125'/></a>
            <a href='' onClick={(e)=>{e.stopPropagation()}}><img src='verc.svg' className='h-8 w-8 rounded-full transition-all duration-300 active:scale-125' /></a>
              </div>
              <div>
                <ArrowUpLeft/>
              </div>
            </div>
        </div>



        <div
         onClick={()=>{props.setSelected(2)}}
        className=' card cursor-pointer hover:scale-90 transition-transform duration-300 h-100 w-145  -rotate-6 bg-[linear-gradient(191deg,rgba(245,243,239,1)_7%,rgba(255,201,0,1)_50%,rgba(245,243,239,1)_93%)] text-black rounded-xl'>
            <h1 className='text-3xl font-bold px-17 py-2 '>UI Design</h1>
            <img src='ui.png' className='h-70 w-140 p-6 -rotate-2'/>
            <div className='flex justify-between px-10 mt-5'>
              <div className='flex  gap-4'>
            <a href='' onClick={(e)=>{e.stopPropagation()}}><img src='gi.png' className='h-8 w-8 rounded-full transition-all duration-300 active:scale-125'/></a>
            <a href='' onClick={(e)=>{e.stopPropagation()}}><img src='verc.svg' className='h-8 w-8 rounded-full transition-all duration-300 active:scale-125' /></a>
              </div>
              <div>
                <ArrowUpLeft/>
              </div>
            </div>
        </div>




        <div
         onClick={()=>{props.setSelected(3)}}
        className='card cursor-pointer hover:scale-90 transition-transform duration-300 h-100 w-145 -rotate-6 bg-[linear-gradient(191deg,rgba(245,243,239,1)_7%,rgba(255,201,0,1)_50%,rgba(245,243,239,1)_93%)] text-black rounded-xl'>
            <h1 className='text-3xl font-bold px-11 py-2'>Gallery Project</h1>
            <img src='gal.png' className='h-70 w-140 p-6 -rotate-2'/>
            <div className='flex justify-between px-10 mt-5'>
              <div className='flex  gap-4'>
            <a href='' onClick={(e)=>{e.stopPropagation()}} ><img src='gi.png' className='h-8 w-8 rounded-full transition-all duration-300 active:scale-125'/></a>
            <a href='' onClick={(e)=>{e.stopPropagation()}}><img src='verc.svg' className='h-8 w-8 rounded-full transition-all duration-300 active:scale-125' /></a>
              </div>
              <div>
                <ArrowUpLeft/>
              </div>
            </div>
        </div>




      </div>



    {
      props.selected !== null && (
        <div onClick={()=>{props.setSelected(null)}} className='fixed inset-0 bg-black/60 flex items-center justify-center z-50'>
            <div onClick={(e)=>{e.stopPropagation()}} className='bg-white text-black w-96 h-70 rounded-xl p-8 relative'>
              <X onClick={()=>{props.setSelected(null)}} className='absolute top-4 right-4 cursor-pointer'></X>
              <h1 className='text-3xl font-bold mb-4'>{props.projects[props.selected].title}</h1>
              <p className='text-lg'>{props.projects[props.selected].description}</p>
              <p className='text-sm font-bold mt-4 border-1 rounded-2xl p-2 w-70 px-6 '>{props.projects[props.selected].stack}</p>

            </div>
        </div>
      )
    }
   </section>
  )
}

export default Projects
