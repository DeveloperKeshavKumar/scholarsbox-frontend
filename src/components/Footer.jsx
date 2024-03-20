import { FaYoutube, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { NavLink } from "react-router-dom"


export default function Footer () {
    const date = new Date();
    return (
        <div className=" bg-blue-600 text-white pt-24">
            <div className=" flex flex-wrap text-left justify-evenly gap-y-5 items-center pb-24">
                <div className="ml-[10px] lg:ml-0">
                    <h1 className="text-3xl font-bold mb-2">ScholarsBox</h1>
                    <p className="text-[15px]"><b>Subscribe to our developer newsletter</b> <br />
                        Get tips, technical guides, and best practices. Twice a month. Right in your inbox.</p>
                    <button className="border-2  text-white font-semibold px-4 py-2 mt-4 rounded-md hover:bg-gray-200 hover:text-blue-600 hover:border-blue-600 transition-all delay-100">Subscribe</button>
                </div>
                <div className="">
                    <ul className="flex flex-col">
                        <li><NavLink to="/">Product</NavLink></li>
                        <li><NavLink to="/">Features</NavLink></li>
                        <li><NavLink to="/">Security</NavLink></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><NavLink to="/">Motto</NavLink></li>
                        <li><NavLink to="/">Partners</NavLink></li>
                        <li><NavLink to="/">Support</NavLink></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><NavLink to="/">About</NavLink></li>
                        <li><NavLink to="/">Students Stories</NavLink></li>
                        <li><NavLink to="/">Blogs</NavLink></li>
                    </ul>
                </div>

            </div>

            <div className="w-full m-auto mt-5 bg-blue-800 flex justify-around items-center py-2 border-t border-white">
                <div className="ml-6 flex flex-wrap  text-white gap-x-5 lg:gap-x-10 ">
                    <p>&copy; {date.getFullYear()} ScholarsBox, Inc.</p>
                    <ul className="flex flex-wrap gap-x-2 lg:gap-x-5">
                        <li><NavLink to="/">Terms</NavLink></li>
                        <li><NavLink to="/">Privacy</NavLink></li>
                        <li><NavLink to="/">Manage Cookies</NavLink></li>
                    </ul>
                </div>
                <ul className="flex gap-x-1 lg:gap-x-4 mr-2">
                    <li><NavLink to="/"><FaYoutube fontSize={25} color="white" /></NavLink></li>
                    <li><NavLink to="/"><FaXTwitter fontSize={25} color="white" /></NavLink></li>
                    <li><NavLink to="/"><FaFacebookSquare fontSize={25} color="white" /></NavLink></li>
                    <li><NavLink to="/"><FaLinkedinIn fontSize={25} color="white" /></NavLink></li>
                </ul>
            </div>
        </div>
    )
}
