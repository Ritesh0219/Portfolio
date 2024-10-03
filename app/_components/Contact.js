import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { SiInstagram, SiLinkedin } from 'react-icons/si'

function Contact() {
  return (
    <div id='contact' className=' flex gap-3 md:gap-7 items-center mb-20rounded-full   md:mb-10 justify-center pb-8 md:pb-0'>
      <h2 className='text-white font-semibold text-2xl'>Connect</h2>
       <a href='https://www.instagram.com/__riteshjadhav__/'> <SiInstagram className='cursor-pointer text-2xl md:text-4xl text-pink-500'/></a>
       <a href='https://www.linkedin.com/in/ritesh-jadhav-4079071b9/'>  <SiLinkedin className='cursor-pointer text-2xl md:text-4xl text-blue-600'/></a>
       <a href='https://github.com/Ritesh0219'> <FaGithub className='cursor-pointer text-2xl md:text-4xl text-gray-400'/></a>
    </div>
  )
}

export default Contact