import React from 'react'

const About = () => {
  return (
    <section id='about' className='min-h-screen  pt-35 px-30 flex flex-col text-center items-center'>
        <h1 className=' text-6xl font-semibold mb-10 text-[#FFC900]'>About me</h1>
        <p className=' w-190 text-gray-300'>
Hi, I'm Taba Zanish, a final-year BS Information Technology student and an aspiring Full-Stack Developer.
I have a strong interest in web development and enjoy creating modern, responsive, and user-friendly websites.
Currently, I'm expanding my skills in backend development  while also exploring Artificial Intelligence.
</p>
        <h2 className='text-2xl mt-10 font-semibold'>My Approach</h2>
        <div className='mt-10 flex gap-5'>

          <div className='h-18 w-65 rounded-2xl border-2 border-[#FFC900] flex gap-2 p-4'>
            <p className='rounded-full h-7 w-8 border-2 '>01</p>
            <h2>Understand the problem first</h2>
          </div>

          <div className='h-18 w-65 rounded-2xl border-2 border-[#FFC900] flex gap-2 p-4'>
            <p className='rounded-full h-7 w-8 border-2 '>02</p>
            <h2>Build clean, structured UI</h2>
          </div>

          <div className='h-18 w-65 rounded-2xl border-2 border-[#FFC900] flex gap-2 p-4'>
            <p className='rounded-full h-7 w-8 border-2 '>03</p>
            <h2>Ship fast, reliable code</h2>
          </div>

        </div>
          <div className='flex gap-39 mt-14'>
            <div>
            <p className='text-4xl font-semibold'>7th</p>
            <p className='text-lg'>Semester (BSIT)</p>
            </div>

             <div>
            <p className='text-4xl font-semibold'>05+

</p>
            <p className='text-lg'>Projects Built</p>
            </div>

             <div>
            <p className='text-4xl font-semibold'>04+</p>
            <p className='text-lg'>Technologies Used</p>
            </div>

          </div>
   </section>
  )
}

export default About
