import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { SiInstagram, SiLinkedin } from 'react-icons/si'

function Contact() {
  return (
    <div id='contact' className='bg-black flex flex-col items-center  justify-center'>
        <p className='text-4xl font-semibold text-white'>Contact</p>
        <div className='flex gap-8 text-white mt-4 md:mt-6'>
       <a href='https://www.instagram.com/__riteshjadhav__/'> <SiInstagram className='cursor-pointer text-2xl md:text-4xl text-pink-500'/></a>
       <a href='https://www.linkedin.com/in/ritesh-jadhav-4079071b9/'>  <SiLinkedin className='cursor-pointer text-2xl md:text-4xl text-blue-600'/></a>
       <a href='https://github.com/Ritesh0219'> <FaGithub className='cursor-pointer text-2xl md:text-4xl text-gray-400'/></a>
        </div>
        
    </div>
  )
}

export default Contact