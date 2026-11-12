import React from 'react'

const Skills = () => {
  return (
    <section id='skills' className='pt-35 px-30 pb-20 mt-20'>
  <div className='flex justify-between items-start'>

    {/* LEFT: heading fix rehti hai */}
    <div className='sticky top-28'>
      <h1 className='text-8xl  text-[#FFC900] font-semibold text-animate'>Skills :</h1>
    </div>

    {/* RIGHT: groups scroll hote hain */}
    <div className='w-190 border-t border-white'>

      <div className='reveal border-b border-white py-16'>
        <h1 className='text-6xl font-semibold'>Frontend</h1>
        <div className='flex gap-4 mt-6'>
          <p className='border-2 h-8 w-17 rounded-xl text-center '>React</p>
          <p className='border-2 h-8 w-22 rounded-xl px-2'>Tailwind</p>
          <p className='border-2 h-8 w-17 rounded-xl px-2'>HTML</p>
          <p className='border-2 h-8 w-15 rounded-xl px-3'>CSS</p>
          <p className='border-2 h-8 w-15 rounded-xl px-2'>Axios</p>
          <p className='border-2 h-8 w-27 rounded-xl px-2'>UseContext</p>
          <p className='border-2 h-8 w-24 rounded-xl px-2 text-center'>JavaScript</p>
        </div>
      </div>


      <div className='reveal border-b border-white py-16'>
        <div className='flex gap-6 items-center'>
          <h1 className='text-6xl font-semibold'>Backend</h1>
          <span className='bg-red-700 text-white h-6 w-25 px-2 rounded-2xl'> . Learning</span>
        </div>
        <div className='flex gap-4 mt-6'>
          <p className='border border-dashed border-red-700 h-7 w-18 rounded text-center'>Node.js</p>
          <p className='border border-dashed border-red-700 h-7 w-22 px-1 rounded'>Express.js</p>
          <p className='border border-dashed border-red-700 h-7 w-22 px-1 rounded'>MongoDb</p>
        </div>
      </div>


      <div className='reveal border-b border-white py-16'>
        <h1 className='text-6xl font-semibold'>Other</h1>
        <div className='flex gap-4 mt-6'>
          <p className='border-2 h-8 w-30 rounded-xl text-center'>SM Handling</p>
          <p className='border-2 h-8 w-24 rounded-xl px-2'>MS Office</p>
          <p className='border-2 h-8 w-20 rounded-xl px-2'>Editing</p>
          <p className='border-2 h-8 w-25 rounded-xl px-2'>WordPress</p>
        </div>
      </div>

      <div className='reveal border-b border-white py-16'>
        <h1 className='text-6xl font-semibold'>Tools</h1>
        <div className='flex gap-4 mt-6'>
          <p className='border-2 h-8 w-30 rounded-xl text-center'>VS Code</p>
          <p className='border-2 h-8 w-24 rounded-xl px-2'>GitHub</p>
          <p className='border-2 h-8 w-20 rounded-xl px-2'>Docker</p>
          <p className='border-2 h-8 w-25 rounded-xl px-2'>Mongo</p>
        </div>
      </div>

    </div>
  </div>
</section>
  )
}

export default Skills
