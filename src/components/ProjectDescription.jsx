import React, { useEffect, useState } from 'react';
import { FcDocument } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';
import { getProjectByID, likeProject, dislikeProject, getLikes } from '../services/operations/projectAPI';
import { setProjectData } from '../slices/projectSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from "../components/Spinner"
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { Link } from 'react-router-dom';

export default function ProjectDescription() {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth);
    const currentUserID = useSelector((state) => state.profile.user._id);
    const projectId = location.pathname.split('/').slice(-1)[0];
    const [project, setProject] = useState(null);
    const [isLiked, setIsLiked] = useState(null);
    const [likeCount, setLikeCount] = useState(0); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectData = await getProjectByID(token, projectId);
                const { getLike } = await getLikes(token, projectId);
                setProject(projectData);
                setIsLiked(getLike);
                setLikeCount(projectData.likes?.length); 
                dispatch(setProjectData(projectData));
            } catch (err) {
                console.log(err.message)
            }
        };

        fetchData();
    }, [projectId, token, dispatch]);

    const LikeHandler = async () => {
        try {
            if (isLiked) {
                await dislikeProject(token, projectId);
                setLikeCount(prevCount => prevCount - 1); // Decrement like count
            } else {
                await likeProject(token, projectId);
                setLikeCount(prevCount => prevCount + 1); // Increment like count
            }
            // Toggle the like status
            setIsLiked(prevState => !prevState);
        } catch (error) {
            console.error("Error updating like:", error);
        }
    };

    function handleTagFilter(tag) {
        navigate(`/projects?tag=${tag}`);
    }

    if (!project) {
        return <Spinner />;
    }

    console.log(project)

    const { title, description, createdAt, files, _id, createdBy, url } = project;
    const createdAtDate = new Date(createdAt);
    const formattedDate = `${createdAtDate.getFullYear()}-${(createdAtDate.getMonth() + 1).toString().padStart(2, '0')}-${createdAtDate.getDate().toString().padStart(2, '0')}`;
    const imgPath = files[0];

    const renderEditAndDeleteButtons = currentUserID === createdBy && (
        <div className='flex gap-3 items-center'>
            <Link to={{
                pathname: `/projects/${_id}/edit`,
                state: { project: project }
            }} >
                <button className='px-2 py-1 lg:px-4 lg:py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 focus:z-10 focus:ring-1 focus:ring-blue-600 focus:text-blue-600'>
                    Edit Project
                </button>
            </Link>
            <Link to={`/projects/${_id}/delete`}>
                <button className='px-2 py-1 lg:px-4 lg:py-2 text-sm font-medium text-white bg-blue-600 border border-blue-400 rounded-lg hover:bg-red-700 hover:border-red-700 hover:text-white focus:z-10 focus:ring-1 focus:ring-blue-600 focus:text-white-600'>
                    Delete Project
                </button>
            </Link>
        </div>
    );

    return (
        <>
            <div className='w-11/12 max-w-5xl mx-auto mt-9 mb-5'>
                <h1 className='text-4xl text-left font-semibold'>Project : {title}</h1>
                <div className='mt-10 w-11/12 max-w-5xl mx-auto flex gap-y-4 lg:flex-row lg:gap-0 md:gap-0 md:flex-row flex-col items-center justify-between'>
                    <div className='flex items-center flex-col gap-3 md:flex-row lg:flex-row'>
                        <img src={imgPath} alt='profile pic' className='w-[150px] h-[150px] rounded-full bg-red-300 object-cover' />
                        <div className='profileDetails lg:text-left md:text-left ml-3 '>
                            <h2 className='text-[20px] font-semibold'>{title}</h2>
                            <div className='max-w-[250px] text-gray-600 flex items-center justify-center md:justify-normal '>{description.length > 50 ? description.substring(0, 50) + " ....." : description}</div>
                            <p className='max-w-[250px] text-wrap text-gray-600 sm:text-center md:text-left'>Last updated {formattedDate}</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='flex gap-x-2 items-center justify-center'>
                            <button onClick={LikeHandler}>
                                {
                                    !isLiked ? <FcLikePlaceholder fontSize={"2.3rem"} /> : <FcLike fontSize={"2.3rem"} />
                                }
                            </button>
                            <p className='mt-3 bg-red-200 rounded-md border border-red-400 font-semibold px-3 py-1 mr-2 mb-2 text-sm focus:outline-none self-center'>{likeCount}</p>
                        </div>
                        {renderEditAndDeleteButtons}
                    </div>
                </div>
            </div>

            <div className='w-11/12 max-w-5xl mx-auto mt-9 mb-5'>
                <div className='max-w-max flex flex-col mt-10'>
                    <h1 className='text-lg font-bold'>Description</h1>
                </div>
                <div className='mt-5 text-justify ml-10'>
                    {description}
                </div>

                <div className='max-w-max flex flex-col mt-10'>
                    <h1 className='text-lg font-bold'>Documents</h1>
                </div>
                <div className='mt-5 text-left ml-10'>
                    {project.files.map((file, index) => (
                        <a key={index} href={file} target="_blank" rel="noopener noreferrer" className="mb-2 flex items-center">
                            <FcDocument fontSize={"1.5rem"} />  Document {index + 1}
                        </a>
                    ))}
                </div>

                {
                    url && <>
                        <div className='max-w-max flex flex-col mt-10'>
                            <h1 className='text-lg font-bold'>GitHub Repository</h1>
                        </div>
                        <div className='mt-5 text-justify ml-10'>
                            <a href={url} target='_blank' rel="noreferrer noopener" className=" font-semibold underline">{url?.split("/").slice(-1)[0]}</a>
                        </div>
                    </>
                }

                <div className='max-w-max flex flex-col mt-10'>
                    <h1 className='text-lg font-bold'>Tags</h1>
                </div>
                <div className='mt-5 flex ml-10'>
                    {project.tags.map((tag, index) => (
                        <button
                            key={index}
                            className='bg-gray-200 rounded-md border border-blue-400 font-semibold px-3 py-1 mr-2 mb-2 text-sm focus:outline-none hover:bg-gray-600 hover:text-white'
                            onClick={() => handleTagFilter(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <div></div>
            </div>
        </>
    );
}
