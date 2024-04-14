import UserProjectCard from "./UserProjectCard";
import UserAchievement from "./UserAchievement";
import { Link } from "react-router-dom";

export default function UserOverview({ user }) {
    const projects = user.projects
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
                        {user?.bio ? user.bio : "Enter your bio in edit profile"}
                    </p>
                </div>
                <div className="mt-5">
                    <h2 className="text-[20px] font-semibold md:text-left lg:text-left mb-2">Goals</h2>
                    <ul className="list-disc text-left lg:ml-9 md:ml-9 text-gray-800 ml-4">
                        {user && user.goals && user.goals.length > 0 ? (
                            <ul>
                                {JSON.parse(user.goals[0]).map((goal, index) => (
                                    <li key={index} className=" list-disc">{goal}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No goals available</p>
                        )}
                    </ul>
                </div>
            </div>

            <div className="max-w-max flex flex-col mt-10">
                <h1 className="text-lg font-bold">Projects</h1>
                <div className="h-[3px] w-full rounded-md bg-black mt-1"></div>
            </div>
            <div className="mt-5">
                {/* display project card using map at api data */}
                {
                    projects.map((projectId, index) => (
                        <Link to={"/projects/" + projectId}>
                            <UserProjectCard key={index} projectId={projectId} />
                        </Link>
                    ))
                }
            </div>

            <div className="max-w-max flex flex-col mt-10">
                <h1 className="text-lg font-bold">Achievements</h1>
                <div className="h-[3px] w-full rounded-md bg-black mt-1"></div>
            </div>

            <div className="mt-5 ">
                <div className="ml-5">
                    <UserAchievement />
                    <UserAchievement />
                    <UserAchievement />
                    <UserAchievement />
                </div>
            </div>

            <>
                {/* Social media Handles of user */}
            </>

            <div className="h-1 w-full bg-[#212020d2] rounded mt-8 mb-5"></div>
        </div>
    )
}
