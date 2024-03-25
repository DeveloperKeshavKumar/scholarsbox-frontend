import {  useEffect } from "react";
import { MdNotifications } from "react-icons/md";
import {  NavLink} from "react-router-dom";
import SearchBar from "./SearchBar";
import imgPath from '../assets/icon.png'
// import { apiConnector } from "../services/apiConnector";
import { useSelector } from "react-redux";

export const Navbar = () => {
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    // const location = useLocation();

    // const { notifications } = useSelector((state) => state.notifications);

    // const [loading, setLoading] = useState(false);
    useEffect(() => {
        // setLoading(true);
    }, [])


    return (
        <>
            { token === null ?(
                    <div className="mt-4 flex justify-evenly flex-wrap ">
                        <div className="flex justify-center items-center mr-6 ">
                            <img src={imgPath} alt="App Logo" className="w-[3rem]" />
                            <p className="font-bold text-xl ">ScholarsBox</p>
                        </div>

                        <div className="lg:w-[80%] w-full gap-y-4 flex lg:flex-row lg:justify-between lg:items-center  flex-col">

                            <SearchBar />
                            <div className="inline-flex justify-center md:justify-normal rounded-sm lg:rounded-md shadow-sm" role="group">
                                { (
                                    <NavLink to="/auth/login">
                                        <div type="button" className="px-2 py-1 md:py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-600 focus:z-10 focus:ring-1 focus:ring-blue-600 focus:text-blue-600 ">
                                            Sign In
                                        </div>
                                    </NavLink>
                                )}

                                { (
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
                    <div className="mt-4 flex justify-between mx-14 flex-wrap mb-10">
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
                                    <NavLink to="/projects">Projects</NavLink>
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
                                {/* ${user.username}  to the user route*/}
                                <li><NavLink to={'/user/'+user._id}>
                                    <img src={user.image} alt="profile pic" className=" w-[2rem] bg-blue-600 rounded-full  " />
                                </NavLink></li>
                            </ul>
                        </div>

                    </div>
                )
            }


        </>
    )
}
