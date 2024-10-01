
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import TechList from './Skills'

function About() {
  return (
  <div id='about' className='flex flex-col gap-4  bg-black px-4 md:px-20 py-6 '>
    <p className='text-white text-2xl md:text-4xl font-semibold'>About Me</p>
     <div  className='flex flex-col md:flex-row gap-4 md:gap-8     bg-black'>
       <Card className=" bg-[#1C1C1C] text-white border-none w-full">
          <CardHeader>
            <CardTitle className='text-2xl md:text-3xl tracking-tight'>Education</CardTitle>
          </CardHeader>
          <CardContent>
          <div className='flex flex-col gap-2 md:gap-4  md:px-4'>
            <div className='flex flex-col  justify-between '>
                <p className='text-xl md:text-2xl font-bold text-purple-500'>B.E Electronics and Telecommunication Engineering</p>
                <p className='text-md md:text-lg'> 
                  JSPM’s Imperial College of Engineering and Research, Wagholi  2021 - 2025
                </p>
              </div>
              <div className='flex flex-col'>
                <p className='text-xl md:text-2xl font-bold text-purple-500'>HSC</p>
                <p className='text-md md:text-lg'> 
                 Prodigy Public School, Wagholi 2019 - 2021
                </p>
              </div>
              <div className='flex flex-col'>
                <p className='text-xl md:text-2xl font-bold  text-purple-500'>SSC</p>
                <p className='text-md md:text-lg'> 
                 Holy Spirit Convent School, Lonikand 2009 - 2019
                </p>
              </div>
          </div>
          </CardContent>
        </Card>

        <Card className=" bg-[#1C1C1C] text-white grid-flow- border-none w-full">
          <CardHeader>
            <CardTitle className='text-2xl md:text-3xl tracking-tight'>Experience</CardTitle>
          </CardHeader>
          <CardContent>
          <div className='flex flex-col gap-2 md:gap-4  md:px-4'>
            <div className='flex flex-col  justify-between '>
                <div className='flex justify-between items-center'>
                  <p className='text-xl md:text-2xl font-bold  text-yellow-600'>Cloud Technosoft Solutions</p>
                  <p className='text-sm'>Dec 2023 - Feb 2024</p>
                </div>
                <p className=' text-md md:text-lg font-semibold'> 
                  Web Development Intern
                </p>
            </div>
            <div className='flex flex-col  justify-between '>
                <div className='flex items-center justify-between'>
                  <p className='text-xl md:text-2xl font-bold  text-yellow-600'>Developer's Club</p>
                  <p className='text-sm'>Aug 2023 - Present</p>
                </div>
                <p className='text-md md:text-lg font-semibold '> 
                  Development Head
                </p>
            </div>
          </div>
          </CardContent>
        </Card>
        
   </div>
        <Card className="w-full bg-black text-white border-none">
          <CardHeader>
            <CardTitle className='text-2xl md:text-3xl tracking-tight'>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <TechList />
          </CardContent>
        </Card>
  </div>
  )
}

export default About