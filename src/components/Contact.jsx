import React from 'react'
import { CircleLetterC } from 'lucide-react'
const Contact = () => {
  return (
    <section id='contact' className='  pt-35   '>
        <div className='h-70 w-230 border-2  rounded-2xl flex flex-col text-center p-15 ml-75'>
            <h1 className='text-5xl font-semibold '>Let's Build Something Together</h1>
            <p className='mt-8'>Looking for a Web Developer intern? I'd love to hear from you.</p>
            <div className='flex gap-6 mt-10 justify-center'>
              <a href="" className='h-9 w-22 border-2 rounded-2xl py-1 hover:border-[#FFC900] hover:text-[#FFC900]' >Email Me</a>
              <a href='https://www.linkedin.com/in/zanish-nasir-00446741b/' className='h-9 w-22 border-2 rounded-2xl py-1 hover:border-[#FFC900] hover:text-[#FFC900]'>LinkedIn</a>
              <a href='https://github.com/zanish27' className='h-9 w-22 border-2 rounded-2xl py-1 hover:border-[#FFC900] hover:text-[#FFC900] '>GitHub</a>
            </div>
            
        </div>

        <div className='border-t  border-gray-400  mt-25 w-262 ml-55'></div>
        <div className='flex justify-between mt-10 mb-10 ml-54 mr-66 text-sm text-gray-400'>
          <p className='flex items-center'><CircleLetterC size={14} /> 2026 Zanish</p>
          <p>Gujranwala,Pakistan</p>
        </div>
   </section>
  )
}

export default Contact
