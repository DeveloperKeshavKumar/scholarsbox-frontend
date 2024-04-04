import React, { useEffect, useState } from 'react';
import Milestone from './Milestone';
import ProjectParticipants from './ProjectParticipants';
import { useLocation } from 'react-router-dom';
import { getProjectByID, likeProject, dislikeProject, getLikes } from '../services/operations/projectAPI';
import { useSelector } from 'react-redux';
import { Spinner } from "../components/Spinner"
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

export default function ProjectDescription() {
    const location = useLocation();
    const token = useSelector((state) => state.auth);
    const user = useSelector((state)=> state.profile)
    const projectId = location.pathname.split('/').slice(-1)[0];
    const [project, setProject] = useState(null);
    const [isLiked, setIsLiked] = useState(null);

    function LikeHandler() {
        const fetchLiked = async () => {
            if (isLiked) {
                dislikeProject(token, projectId);
            } else {
                likeProject(token, projectId);
            }
            setIsLiked(prevState => !prevState);
        };

        fetchLiked();
        // also add or remove following from the database
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectData = await getProjectByID(token, projectId);
                const getLike = await getLikes(token, projectId)
                setProject(projectData);
                setIsLiked(getLike)
            } catch (err) {
                // Handle errors here
                console.log(err.message)
            }
        };

        fetchData();
    }, [projectId, token, user]);

    if (!project) {
        return <Spinner />;
    }

    const { title, description, createdAt, files } = project;
    const createdAtDate = new Date(createdAt);
    const formattedDate = `${createdAtDate.getFullYear()}-${(createdAtDate.getMonth() + 1).toString().padStart(2, '0')}-${createdAtDate.getDate().toString().padStart(2, '0')}`;
    // console.log(formattedDate);
    const imgPath = files[0];

    return (
        <>
            {/* Data to be fetched from API */}
            <div className='w-11/12 max-w-5xl mx-auto mt-9 mb-5'>
                <h1 className='text-4xl text-left font-semibold'>Project : {title}</h1>
                <div className='mt-10 w-11/12 max-w-5xl mx-auto flex gap-y-4 lg:flex-row lg:gap-0 md:gap-0 md:flex-row flex-col items-center justify-between'>
                    <div className='flex items-center flex-col gap-3 md:flex-row lg:flex-row'>
                        <img src={imgPath} alt='profile pic' className='w-[150px] h-[150px] rounded-full bg-red-300 object-scale-down' />
                        <div className='profileDetails lg:text-left md:text-left ml-3 '>
                            {/* Fetched from API later */}
                            <h2 className='text-[20px] font-semibold'>{title}</h2>
                            <div className='max-w-[250px] text-gray-600 flex items-center justify-center md:justify-normal '>{description.length > 50 ? description.substring(0, 50) + " ....." : description}</div>
                            <p className='max-w-[250px] text-wrap text-gray-600 sm:text-center md:text-left'>Last updated {formattedDate}</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <button onClick={LikeHandler}>
                            {
                                !isLiked ? <FcLikePlaceholder fontSize={"2.3rem"} /> : <FcLike fontSize={"2.3rem"} />
                            }
                        </button>
                        <button className='px-2 py-1 lg:px-4 lg:py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 focus:z-10 focus:ring-1 focus:ring-blue-600 focus:text-blue-600'>
                            Edit Project
                        </button>
                        <button className='px-2 py-1 lg:px-4 lg:py-2 text-sm font-medium text-white bg-blue-600 border border-blue-400 rounded-lg hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-1 focus:ring-blue-600 focus:text-white-600'>
                            Leave Project
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-11/12 max-w-5xl mx-auto mt-9 mb-5'>
                <div className='max-w-max flex flex-col mt-10'>
                    <h1 className='text-lg font-bold'>Milestones</h1>
                </div>
                <div className='mt-5'>
                    <Milestone />
                </div>

                <div className='max-w-max flex flex-col mt-10'>
                    <h1 className='text-lg font-bold'>Documents</h1>
                </div>
                <div className='mt-5'>
                    <Milestone />
                </div>

                <div className='max-w-max flex flex-col mt-10'>
                    <h1 className='text-lg font-bold'>Participants</h1>
                </div>
                <div className='mt-5'>
                    <ProjectParticipants />
                </div>

                <div></div>
            </div>
        </>
    );
}
