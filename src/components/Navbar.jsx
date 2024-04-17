import { MdNotifications } from "react-icons/md";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import imgPath from '../assets/icon.png'
import { useSelector } from "react-redux";
import { useState } from "react";

export const Navbar = () => {
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const [notif, setNotif] = useState(false)

    return (
        <>
            {token === null ? (
                <div className="mt-4 flex justify-evenly flex-wrap ">
                    <NavLink to="/" className="flex justify-center items-center mr-6 ">
                        <img src={imgPath} alt="App Logo" className="w-[3rem] h-[3rem]" />
                        <p className="font-bold text-xl ">ScholarsBox</p>
                    </NavLink>

                    <div className="lg:w-[80%] w-full gap-y-4 flex lg:flex-row lg:justify-between lg:items-center flex-col">

                        <SearchBar />
                        <div className="inline-flex justify-center lg:justify-normal rounded-sm lg:rounded-md border-b-2 pb-3 lg:pb-0 lg:border-0 mb-3 lg:mb-0" role="group">
                            {(
                                <NavLink to="/auth/login">
                                    <div type="button" className="px-2 py-1 md:py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-600 focus:z-10 focus:ring-1 focus:ring-blue-600 focus:text-blue-600 ">
                                        Sign In
                                    </div>
                                </NavLink>
                            )}

                            {(
                                <NavLink to="/auth/signup">
                                    <button type="button" className="px-2 py-1 md:py-2 text-sm font-medium text-white bg-blue-600 border border-blue-400 rounded-e-lg hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-1 focus:ring-blue-600 focus:text-white-600 ">
                                        Get Started
                                    </button>
                                </NavLink>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mt-4 flex sm:flex-row sm:justify-between flex-col items-center mx-14 flex-wrap mb-10 gap-y-5">
                    <NavLink to="/" className="flex justify-center items-center mr-6 ">
                        <img src={imgPath} alt="App Logo" className="w-[3rem]" />
                        <p className="font-bold text-xl ">ScholarsBox</p>
                    </NavLink>

                    <div>
                        <ul className="flex items-center gap-x-4 md:text-[18px]">
                            <li className="relative group transition-all delay-200">
                                <NavLink to="/">Home</NavLink>
                                <div className="absolute rounded-full hidden mt-1 w-full h-1 group-hover:block bg-blue-600"></div>
                            </li>
                            <li className="relative group">
                                <NavLink to="/projects">Projects</NavLink>
                                <div className="absolute rounded-full hidden mt-1 w-full h-1 group-hover:block bg-blue-600"></div>
                            </li>
                            <li className="relative group">
                                <div className=' w-[40px] h-[40px] rounded-full right-2 -bottom-3 grid place-items-center bg-white ' onClick={()=>setNotif(!notif)}>
                                    <NavLink to="/notifications" className='relative'>
                                        <MdNotifications fontSize="1.5rem"  />
                                        {notif && <div className="absolute -top-[3px] -right-[3px] w-[10px] h-[10px] rounded-full bg-[#f76161]"></div>}
                                        {/* Code for the no. of notifications */}
                                    </NavLink>
                                </div>
                            </li>
                            <li><NavLink to={'/user/' + user._id}>
                                <img src={user.image} alt="profile pic" className=" w-[2rem] h-[2rem] bg-blue-600 rounded-full  " />
                            </NavLink></li>
                        </ul>
                    </div>

                </div>
            )
            }
        </>
    )
}
