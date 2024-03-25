import { React, useState } from 'react';
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { createProject } from '../services/operations/projectAPI';
import { setToken } from '../slices/authSlice';
import { setProjectData } from '../slices/projectSlice';
export default function CreateProjectUtil() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [projectFormData, setProjectFormData] = useState({
        title: "",
        description: "",
        tags: [],
        projectFiles:null
    })

    const { title, description, tags } = projectFormData

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        const newValue = name === 'tags' ? value.split(',').map(tag => tag.trim()) : value;
        setProjectFormData(prevData => ({
            ...prevData,
            [name]: newValue,
        }));
        // console.log(tags)
    }

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setProjectFormData(prevData => ({
            ...prevData,
            [name]: files[0], // Assuming you only want to handle one file selection
        }));
    };


    const clearForm = () => {
        setProjectFormData({
            title: "",
            description: "",
            tags: [],
            projectFiles:null
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        console.log("***************** projectFiles",projectFormData);

        const {projectTitle, projectDescription, projectTags, projectFiles,} = projectFormData

        // Dispatching actions to set project data
        dispatch(setProjectData({
            title,
            description,
            tags,
            projectFiles: projectFiles ? projectFiles.name : null // Store file name as reference
        }));

        // Send data for creation of project
        dispatch(createProject(projectTitle, projectDescription, projectTags, projectFiles, navigate))

        // Reset
        clearForm();
    }

    return (
        <div>
            <div className='w-11/12 max-w-[500px] mx-auto mt-9 mb-5'>
                <h1 className='text-4xl font-semibold'>Create New Project</h1>

                <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4 mt-9">

                    <label className="w-full">
                        <p className="mb-1 text-[0.875rem] text-left leading-[1.375rem] text-richblack-8">
                            Project Title <sup className="text-red-500 font-bold text-sm">*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="title"
                            value={title}
                            onChange={handleOnChange}
                            placeholder="Enter project title"
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-8"
                        />
                    </label>
                    <label className="w-full">
                        <p className="mb-1 text-[0.875rem] text-left leading-[1.375rem] text-richblack-8">
                            Project Description <sup className="text-red-500 font-bold text-sm">*</sup>
                        </p>
                        <textarea
                            required
                            type="text"
                            name="description"
                            value={description}
                            onChange={handleOnChange}
                            placeholder="Enter project description"
                            row="10"
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-8"
                        ></textarea>
                    </label>
                    <label>
                        <p className="mb-1 text-[0.875rem] text-left leading-[1.375rem] text-richblack-8">
                            Project Tags <sup className="text-red-500 font-bold text-sm">*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="tags"
                            value={tags}
                            onChange={handleOnChange}
                            placeholder="Enter comma separated tags"
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-8"
                        />

                    </label>
                    <label>
                        <p className="mb-1 text-[0.875rem] text-left leading-[1.375rem] text-richblack-8">
                            Upload File <sup className="text-red-500 font-bold text-sm">*</sup>
                        </p>
                        <input
                            required
                            type="file"
                            name="projectFiles"
                            onChange={handleFileChange}
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-8"
                        />


                    </label>

                    <div className="flex gap-3 justify-center">
                        <button className="px-2 py-1 lg:px-4 lg:py-2 text-sm font-medium text-blue-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-100  focus:z-10 focus:ring-1 focus:ring-blue-600 focus:text-blue-600 " onClick={clearForm}>Clear</button>
                        <button className="px-2 py-1 lg:px-4 lg:py-2 text-sm font-medium text-white bg-blue-600 border border-blue-400 rounded-lg hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-1 focus:ring-blue-600 focus:text-white-600  ">Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
