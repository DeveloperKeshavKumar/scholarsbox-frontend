import { useState } from "react";
import { MdNotifications } from "react-icons/md";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import imgPath from '../assets/icon.png'

export const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useState(() => {
        // setIsLoggedIn(!isLoggedIn);
    }, [isLoggedIn])

    return (
        <>
            {
                !isLoggedIn ? (
                    <div className=" w-11/12 max-w-5xl  m-auto mt-4 flex justify-between flex-wrap ">
                        <div className="flex justify-center items-center mr-6 ">
                            <img src={imgPath} alt="App Logo" className="w-[3rem]" />
                            <p className="font-bold text-xl ">ScholarsBox</p>
                        </div>

                        <div className="lg:w-[80%] w-full gap-y-4 flex lg:flex-row lg:justify-between lg:items-center  flex-col">

                            <SearchBar />
                            <div className="inline-flex justify-center md:justify-normal rounded-sm lg:rounded-md shadow-sm" role="group">
                                <button type="button" className="px-2 py-1 md:py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-600 focus:z-10 focus:ring-1 focus:ring-blue-600 focus:text-blue-600 ">
                                    Sign In
                                </button>
                                <button type="button" className="px-2 py-1 md:py-2 text-sm font-medium text-white bg-blue-600 border border-blue-400 rounded-e-lg hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-1 focus:ring-blue-600 focus:text-white-600 ">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className=" w-11/12 max-w-5xl  m-auto mt-4 flex justify-between flex-wrap ">
                        <div className="flex justify-center items-center mr-6 ">
                            <img src={imgPath} alt="App Logo" className="w-[3rem]" />
                            <p className="font-bold text-xl ">ScholarsBox</p>
                        </div>

                        <div>
                            <ul className="flex items-center gap-x-4 md:text-[18px]">
                                <li className="relative group transition-all delay-200">
                                    <NavLink to="/">Home</NavLink>
                                    <div className="absolute rounded-full hidden mt-1 w-full h-1 group-hover:block bg-blue-600"></div>
                                </li>
                                <li className="relative group">
                                    <NavLink to="/">Projects</NavLink>
                                    <div className="absolute rounded-full hidden mt-1 w-full h-1 group-hover:block bg-blue-600"></div>
                                </li>
                                <li className="relative group">
                                    <div className=' w-[40px] h-[40px] rounded-full right-2 -bottom-3 grid place-items-center bg-white '>
                                        <NavLink to="/notifications">
                                            <MdNotifications fontSize="1.5rem" />
                                            {/* Code for the no. of notifications */}
                                        </NavLink>
                                    </div>
                                </li>
                                <li><NavLink to="/user">
                                    <img src={imgPath} alt="profile pic" className=" w-[2rem] bg-blue-600 rounded-full  " />
                                </NavLink></li>
                            </ul>
                        </div>

                    </div>
                )
            }


        </>
    )
}
