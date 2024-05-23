import React from 'react'
import { projectsData } from '../projectsData.js';

export default function Project() {
  return (
    <div>
        {
            projectsData.map((e)=> {
                return (
                    <div className=''>
                        <div className='text-white grid grid-cols-2 p-2 md:p-4'>
                            <div className='pr-4 pt-3'>
                                <div className='text-sm pb-1 text-center cursor-pointer text-purple-300 font-italic hover:text-base md:text-base'>
                                    <a href={e.url}>Github</a>
                                </div>
                                <a href={e.url}><img src={e.img} alt="" className='w-max h-max shadow-lg shadow-teal-300 border-teal-300 rounded-sm border cursor-pointer hover:scale-110'/></a>
                            </div>
                            <div className='pt-6'>
                                <div className='pb-2 font-bold'>
                                    {e.name}
                                </div>
                                <div className='pb-1 text-sm md:text-lg'>
                                    {e.desc}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
