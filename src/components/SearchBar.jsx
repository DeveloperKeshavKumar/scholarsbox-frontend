import React from 'react'
import { MdSearch } from 'react-icons/md'

export default function SearchBar() {
    return (
        <div className="lg:w-[80%] w-full gap-y-4 flex lg:flex-row lg:justify-between lg:items-center  flex-col">
            <div className="lg:w-[250px] lg:block flex flex-col">
                <form className="">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <MdSearch fontSize={23} />
                        </div>
                        <input type="search" id="default-search" className="block w-full p-2 py-2 ps-10 text-sm text-black border border-white-300 rounded-lg bg-white-50  " placeholder="Search projects" />
                        <button type="submit" className="text-white absolute end-2.5 bottom-[4.5px] bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-1 ">Search</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
