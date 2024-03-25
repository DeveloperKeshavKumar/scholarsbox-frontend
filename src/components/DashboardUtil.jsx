import React from 'react'
import SearchBar from '../components/SearchBar'
import RecentCard from './RecentCard'
import { Project } from './Project'
import imgPath from '../assets/hero.jpg'
import { useSelector } from 'react-redux'
import { Spinner } from './Spinner'

export const DashboardUtil = () => {
    const { loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)


  if(profileLoading || authLoading){
    return <Spinner/>
  }
    return (
        <div className='w-11/12 max-w-5xl mx-auto mt-9 mb-5'>

        {

        }
            <div className=" md:text-left bg-cover mb-8 bg-center bg-no-repeat h-[500px] border rounded-lg flex flex-col justify-end pb-[2.5rem] pl-5" style={{ backgroundImage: `url(${imgPath})` }}>
                {/* to be fetched from DB API */}
                <h1 className='text-4xl font-extrabold mb-2 text-white'>Hi,Keshav</h1>
                <p className='text-[14px] font-medium text-gray-500 mb-7'>Welcome to ScholarsBox, Here are your projects and recent activity.</p>
                <SearchBar />
            </div>

            <div className='text-left mb-9'>
                <h2 className='text-xl font-bold'>Recent Activity</h2>
                {/* to be fetched from backend API */}
                <RecentCard />
                <RecentCard />
                <RecentCard />
                <RecentCard />
            </div>

            <div className='text-left  mb-9'>
                <h2 className='text-xl font-bold mb-4'>Projects</h2>
                <div className='flex text-center'>
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
        </div>
    )
}
