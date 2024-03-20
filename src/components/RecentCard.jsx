import React from 'react'
import imgPath from '../assets/icon.png'




export default function RecentCard() {
  return (
    <div className='w-11/12 w-max-5xl mx-auto flex justify-between items-center mt-3 mb-1'>
        <div className='flex gap-x-3 items-stretch'>
            <img src={imgPath} alt="project logo" className='w-[60px] object-cover rounded bg-emerald-400'/>
            <div className=''>
                <h2 className='font-semibold '>New Website</h2>
                <p className='text-xs text-gray-500 font-normal'>visited a day ago</p>
                <p className='text-sm text-gray-500 font-normal'>An application created by Keshav.</p>
            </div>

        </div>
        <p className='font-medium text-gray-700 hover:underline'>View Here</p>

    </div>
  )
}
