import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { House } from 'lucide-react'
import { FaClipboardCheck, FaDatabase, FaHtml5, FaParagraph, FaVoicemail } from 'react-icons/fa'
import { SiExpress, SiTailwindcss } from 'react-icons/si'

function Project() {
  return (
    <div id='project' className='bg-black w-full pb-10 flex flex-col gap-8 px-4 md:p-20'>
      <p className='text-white   text-2xl md:text-4xl font-semibold'>Projects</p>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 items-center justify-center'>


            <div class="max-w-sm bg-[#1C1C1C] rounded-3xl text-white">
              <a href="#">
                  <img class="rounded-t-lg" src="/Home.png" alt="" />
              </a>
              <div class="py-5 px-4">
                  <a href="#">
                      <h5 class="md:mb-2  text-xl md:text-2xl font-bold tracking-tight text-white dark:text-white">Home Services</h5>
                  </a>
                  <p class="mb-3 font-normal text-white dark:text-gray-400">Technologies Used</p>
                  <div className='grid grid-cols-3 md:grids-cols-3 gap-2  items-center justify-center'>
                    <div className='flex items-center justify-center gap-1 bg-red-600 rounded-full px-3 py-2'>
                        <FaHtml5 className='text-sm' />
                        <p>React</p> 
                    </div>
                    <div className='flex items-center justify-center gap-1 bg-green-600 rounded-full px-3 py-2'>
                        <SiExpress className='text-sm' />
                        <p>Express</p> 
                    </div>
                    <div className='flex items-center justify-center gap-1 bg-blue-600 rounded-full px-3 py-2'>
                        <FaParagraph className='text-sm' />
                        <p>Hygraph</p> 
                    </div>
                    <div className='flex items-center justify-center gap-1 bg-yellow-600 rounded-full px-3 py-2'>
                        <FaClipboardCheck className='text-sm' />
                        <p>Clerk</p> 
                    </div>
                    <div className='flex items-center justify-center gap-1 bg-purple-600 rounded-full px-3 py-2'>
                        <SiTailwindcss className='text-sm' />
                        <p>Tailwind</p> 
                    </div>
                  </div>
                  <a href="https://home-services-app.vercel.app/" class="inline-flex items-center px-3 mt-6 py-2 text-sm font-medium text-center text-black bg-white
                   rounded-lg hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600
                    dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Visit
                      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
              </div>
            </div>


            <div class="max-w-sm bg-[#1C1C1C] rounded-3xl text-white">
              <a href="#">
                  <img class="rounded-t-lg" src="/FileFlow.png" alt="" />
              </a>
              <div class="py-5 px-4">
                  <a href="#">
                      <h5 class="md:mb-2  text-xl md:text-2xl font-bold tracking-tight text-white dark:text-white">Home Services</h5>
                  </a>
                  <p class="mb-3 font-normal text-white dark:text-gray-400">Technologies Used</p>
                  <div className='grid grid-cols-3 md:grids-cols-3 gap-2  items-center justify-center'>
                    <div className='flex items-center justify-center gap-1 bg-red-600 rounded-full px-3 py-2'>
                        <FaHtml5 className='text-lg' />
                        <p>React</p> 
                    </div>
                    <div className='flex items-center justify-center gap-1 bg-green-600 rounded-full px-3 py-2'>
                        <SiExpress className='text-sm' />
                        <p>Express</p> 
                    </div>
                    <div className='flex items-center justify-center gap-1 bg-blue-600 rounded-full px-3 py-2'>
                        <FaParagraph className='text-sm' />
                        <p>Hygraph</p> 
                    </div>
                    <div className='flex items-center justify-center gap-1 bg-yellow-600 rounded-full px-3 py-2'>
                        <FaClipboardCheck className='text-sm' />
                        <p>Clerk</p> 
                    </div>
                    <div className='flex items-center justify-center gap-1 bg-purple-600 rounded-full px-3 py-2'>
                        <SiTailwindcss className='text-sm' />
                        <p>Tailwind</p>
                    </div>
                    <div className='flex items-center justify-center gap-1 bg-pink-600 rounded-full px-3 py-2'>
                        <FaDatabase className='text-sm' />
                        <p>FireBase</p> 
                    </div>
                  </div>
                  <a href="https://file-flow-omega.vercel.app/" class="inline-flex items-center px-3 mt-6 py-2 text-sm font-medium text-center text-black bg-white
                   rounded-lg hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600
                    dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Visit
                      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
              </div>
            </div>  


           

           

        </div>
    </div>
  )
}

export default Project