import React from 'react'
import imgPath from '../assets/icon.png'
import Milestone from './Milestone'
import ProjectParticipants from './ProjectParticipants'

export default function ProjectDescription() {

    return (
        <>
            {/* Data to be fetched from API */}
            <div className='w-11/12 max-w-5xl mx-auto mt-9 mb-5'>
                <h1 className='text-4xl text-left font-semibold'>Project : Acade Minds</h1>
                <div className="mt-10 w-11/12 max-w-5xl mx-auto flex gap-y-4 lg:flex-row lg:gap-0 md:gap-0 md:flex-row flex-col items-center justify-between">
                    <div className="flex items-center flex-col gap-3 md:flex-row lg:flex-row">
                        <img src={imgPath} alt="profile pic" className="w-[150px] rounded-full bg-red-300" />
                        <div className="profileDetails lg:text-left md:text-left ml-3 ">
                            {/* Fetched from API later */}
                            <h2 className="text-[20px] font-semibold">Acade Minds</h2>
                            <div className=" text-gray-600 flex items-center justify-center md:justify-normal ">A short description of the project</div>
                            <p className="max-w-[250px] text-wrap text-gray-600">Last updated 2 days ago</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-2 py-1 lg:px-4 lg:py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100  focus:z-10 focus:ring-1 focus:ring-blue-600 focus:text-blue-600 " >Edit Project</button>
                        <button className="px-2 py-1 lg:px-4 lg:py-2 text-sm font-medium text-white bg-blue-600 border border-blue-400 rounded-lg hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-1 focus:ring-blue-600 focus:text-white-600  ">Leave Project</button>
                    </div>
                </div>
            </div>

            <div className='w-11/12 max-w-5xl mx-auto mt-9 mb-5'>
                <div className="max-w-max flex flex-col mt-10">
                    <h1 className="text-lg font-bold">Milestones</h1>
                    <div className="h-[3px] w-full rounded-md bg-black mt-1"></div>
                </div>
                <div className="mt-5">
                    <Milestone/>
                </div>

                <div className="max-w-max flex flex-col mt-10">
                    <h1 className="text-lg font-bold">Documents</h1>
                    <div className="h-[3px] w-full rounded-md bg-black mt-1"></div>
                </div>
                <div className="mt-5">
                    <Milestone/>
                </div>

                <div className="max-w-max flex flex-col mt-10">
                    <h1 className="text-lg font-bold">Participants</h1>
                    <div className="h-[3px] w-full rounded-md bg-black mt-1"></div>
                </div>
                <div className="mt-5">
                    <ProjectParticipants/>
                </div>

                <div>

                </div>
            </div>


        </>
    )
}
