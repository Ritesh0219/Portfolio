import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
   <div className='bg-black md:h-[91.4vh] flex  gap-16 items-center justify-center w-full pt-8 md:p-20 '>
      <div className='flex flex-col md:flex-row gap-16 items-center bg-black rounded-3xl justify-center p-10'>
          <Image src='/Unifor.jpg' width={400} height={400} className='rounded-3xl hidden md:block'/>
          <textdiv className='flex flex-col gap-5  justify-center rounded-3xl p-4'>
              <text className='text-white text-6xl md:text-8xl font-bold tracking-tight  font-lato'>
                  Welcome to my portfolio
              </text>
              <text className='text-white text-lg font-lato'>
                Hi, I'm <span className=' text-3xl  font-semibold'> Ritesh Jadhav</span> , Final-Year Engineering Student and Aspiring Software Engineer
              </text>
          </textdiv>   
      </div>
      
   </div>
  )
}

export default Hero