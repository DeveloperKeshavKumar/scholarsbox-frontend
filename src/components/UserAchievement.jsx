import React from 'react'
import trophyPath from '../assets/trophy.png'

export default function UserAchievement() {
    return (
        <div className="flex items-center">
            <img src={trophyPath} alt="achievements" className="w-[50px] bg-green-300" />
            <div className="flex flex-col justify-center ml-2">
                <h3 className="text-left font-medium">Event: Hack2Skill</h3>
                <p className="text-left font-normal text-gray-500">June- 2023</p>
            </div>
        </div>
    )
}
