import { useState } from "react";
import { CiUser } from "react-icons/ci";
import imgPath from '../assets/icon.png';


export default function UserHeader() {
    const [isFollowing, setIsFollowing] = useState(true)
    function clickHandler(){
        setIsFollowing(!isFollowing);
    }
;    return (
        <div className="mt-10 w-11/12 max-w-5xl mx-auto flex gap-y-4 lg:flex-row lg:gap-0 md:gap-0 md:flex-row flex-col items-center justify-between">
            <div className="flex items-center flex-col gap-3 md:flex-row lg:flex-row">
                <img src={imgPath} alt="profile pic" className="w-[150px] rounded-full bg-red-300" />
                <div className="profileDetails lg:text-left md:text-left ml-3 ">
                    {/* Fetched from API later */}
                    <h1 className="text-[20px] font-semibold">Keshav Kumar</h1>
                    <div className=" text-gray-600 flex items-center justify-center md:justify-normal "><CiUser fontSize="1.2rem"/><p className="font-medium">: 211901228</p></div>
                    <p className="max-w-[250px] text-wrap text-gray-600">Computer Science and Engineering, 2021-25</p>
                </div>
            </div>
            <div className="flex gap-3">
                <button className="px-2 py-1 lg:px-4 lg:py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100  focus:z-10 focus:ring-1 focus:ring-blue-600 focus:text-blue-600 ">Message</button>
                <button onClick={clickHandler} className="px-2 py-1 lg:px-4 lg:py-2 text-sm font-medium text-white bg-blue-600 border border-blue-400 rounded-lg hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-1 focus:ring-blue-600 focus:text-white-600  ">{isFollowing?"Following":"Follow"}</button>
            </div>
        </div>
    )
}
