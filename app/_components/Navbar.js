import { Button } from '@/components/ui/button'
import React from 'react'

function Navbar() {
  return (
   <div className=' w-full fixed  backdrop-blur-3xl  flex items-center text-white justify-center gap-4 md:gap-14 p-2 py-3'>
       <div className='flex gap-4 md:gap-12 items-center justify-center'>
        <a href='#about' className='hover:text-gray-400 text-base md:text-lg  cursor-pointer'>
          About  
          </a>
          <a href='#project' className='hover:text-gray-400 text-base md:text-lg cursor-pointer'>
          Projects  
          </a>
          <a href='#contact' className='hover:text-gray-400 text-base md:text-lg cursor-pointer'>
          Connect  
          </a>
          <a href='/Ritesh-Jadhav_Resume.pdf'  download='Ritesh-Jadhav_Resume.pdf'><Button className='bg-white text-black hover:bg-gray-400 rounded-3xl'>Resume</Button></a>
       </div>
   </div>
  )
}

export default Navbar