import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { deleteProject, getProjectByID } from '../services/operations/projectAPI';

export default function DeleteProjectForm() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth);
    const projectId = location.pathname.split('/').slice(-2)[0];
    const [isPopUp, setIsPopUp] = useState(false);
    const [value, setValue] = useState('');
    const [project, setProject] = useState(null);
    console.log(project)

    const deleteHandler = () => {
        if (value === `Delete ${project.title}`) {
            deleteProject(token, projectId, navigate, dispatch)
        }
        else {
            toast.error("Phrase doesn't match")
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectData = await getProjectByID(token, projectId);
                setProject(projectData);
            } catch (err) {
                console.log(err.message)
            }
        };

        fetchData();
    }, [projectId, token]);
    console.log(project)
    const modifiedAtDate = project?.updatedAt ? new Date(project.updatedAt) : new Date(project?.createdAt);
    const formattedDate = `${modifiedAtDate.getFullYear()}-${(modifiedAtDate.getMonth() + 1).toString().padStart(2, '0')}-${modifiedAtDate.getDate().toString().padStart(2, '0')}`;


    return (
        <div className='w-11/12 max-w-5xl max-h-min mx-auto mt-9 mb-5 flex flex-col items-center'>
            <h1 className='text-3xl font-bold'>Delete Project</h1>
            <p className=' text-gray-700 text-[18px] mt-4'>Are you sure to delete this project? This action cannot be undone. </p>
            <h2 className='my-4 text-balance text-2xl font-semibold'>Project Details</h2>
            <hr className='w-[50%] mx-auto' />
            <div className='my-2 max-w-max text-[17px] flex items-center justify-start flex-col'>
                <p className='self-start'>Project Name : {project?.title}</p>
                <p className='self-start'>Last Modified : {formattedDate}</p>
            </div>
            <hr className='w-[50%] mx-auto' />
            <button className='mt-4 w-[50%] px-2 py-1 lg:px-4 lg:py-2 text-sm font-medium text-white bg-blue-600 border border-blue-400 rounded-lg hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-1 focus:ring-blue-600 focus:text-white-600' onClick={() => setIsPopUp(true)}>
                Delete Project
            </button>
            {
                isPopUp && <div className='absolute w-[60%] h-[35%] bg-gray-200 rounded-md flex flex-col justify-center items-center'>
                    <p>Re-write the phrase <b className='text-red-500'>Delete {project.title}</b></p>
                    <input className='w-[40%] mt-3 rounded' type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                    <div className='flex gap-2'>
                        <button className='mt-4  px-2 py-1 lg:px-4 lg:py-2 text-sm font-medium text-white bg-blue-600 border border-blue-400 rounded-lg hover:bg-blue-700 hover:border-blue-700 hover:text-white focus:z-10 focus:ring-1 focus:ring-blue-600 focus:text-white-600' onClick={() => setIsPopUp(false)}>Go Back</button>
                        <button className='mt-4 px-2 py-1 lg:px-4 lg:py-2 text-sm font-medium text-white bg-red-600 border border-red-400 rounded-lg hover:bg-red-700 hover:border-red-700 hover:text-white focus:z-10 focus:ring-1 focus:ring-blue-600 focus:text-white-600' onClick={deleteHandler}>Continue</button>
                    </div>
                </div>

            }
        </div>
    )
}
