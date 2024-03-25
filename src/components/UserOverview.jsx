import UserProjectCard from "./UserProjectCard";
import UserAchievement from "./UserAchievement";
// import { useSelector } from "react-redux";

export default function UserOverview() {
    // const { user } = useSelector((state) => state.profile)
    return (
        <div className="w-11/12 max-w-5xl mx-auto mt-10">
            <div className="max-w-max flex flex-col">
                <h1 className="text-lg font-bold">Overview</h1>
                <div className="h-[3px] w-full rounded-md bg-black mt-1"></div>
            </div>
            <div className="lg:ml-5 md:ml-5">
                <div className="mt-5">
                    <h2 className="text-[20px] font-semibold md:text-left lg:text-left mb-2">Bio</h2>
                    <p className="text-justify lg:ml-5 md:ml-5 text-gray-800">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in hendrerit libero. Morbi id orci eros. Nam ullamcorper maximus metus, in lobortis purus vestibulum id. Vestibulum eu dui euismod, iaculis quam et, pellentesque sem. In congue ac mauris blandit posuere. Nulla ultrices venenatis lorem, vel tempor purus consectetur at. Donec nec nisi imperdiet, efficitur justo vitae, blandit justo. In malesuada tortor sapien, ac porttitor arcu vestibulum sit amet. Vivamus tempor convallis ex, eget volutpat libero laoreet id. Ut vel tempus nulla, in mollis urna. Nunc elementum volutpat dui sed tincidunt.
                    </p>
                </div>
                <div className="mt-5">
                    <h2 className="text-[20px] font-semibold md:text-left lg:text-left mb-2">Goals</h2>
                    <ul className="list-disc text-left lg:ml-9 md:ml-9 text-gray-800 ml-4">
                        <li>Praesent laoreet tortor ac ligula cursus, vitae vestibulum nisl viverra.</li>
                        <li>Fusce porta tortor mollis molestie efficitur.</li>
                        <li>Mauris eleifend mauris a sapien vestibulum porttitor.</li>
                        <li>Duis fermentum ex suscipit iaculis semper.</li>
                        <li>Ut quis nisi sodales, tristique arcu et, tincidunt nisl.</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-max flex flex-col mt-10">
                <h1 className="text-lg font-bold">Projects</h1>
                <div className="h-[3px] w-full rounded-md bg-black mt-1"></div>
            </div>
            <div className="mt-5">
                {/* display project card using map at api data */}
                <UserProjectCard />
                <UserProjectCard />
                <UserProjectCard />
                <UserProjectCard />
            </div>

            <div className="max-w-max flex flex-col mt-10">
                <h1 className="text-lg font-bold">Achievements</h1>
                <div className="h-[3px] w-full rounded-md bg-black mt-1"></div>
            </div>

            <div className="mt-5 ">
                <div className="ml-5">
                    <UserAchievement/>
                    <UserAchievement/>
                    <UserAchievement/>
                    <UserAchievement/>
                </div>
            </div>

            <>
                {/* Social media Handles of user */}
            </>

            <div className="h-1 w-full bg-[#212020d2] rounded mt-8 mb-5"></div>
        </div>
    )
}
