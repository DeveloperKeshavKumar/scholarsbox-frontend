import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getProjectByID } from "../services/operations/projectAPI"
import { Spinner } from './Spinner';

export default function UserProjectCard({ projectId }) {
    const token = useSelector((state) => state.auth);
    const [project, setProject] = useState(null); 

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const projectData = await getProjectByID(token, projectId);
                // console.log("RESPONSE CAME FROM API CONNECT GETPROJECTBYID", projectData);
                setProject(projectData);
            } catch (error) {
                console.error("Error fetching project:", error);
            }
        };

        fetchProject();
    }, [projectId, token]);

    // console.log("After assigning project data to project for userProject Card ",project);

    if (!project) {
        return <Spinner/>
    }

    const { title,description, createdAt,files } = project;
    console.log(title, description, createdAt, files)
    const createdAtDate = new Date(createdAt);
    const formattedDate = `${createdAtDate.getFullYear()}-${(createdAtDate.getMonth() + 1).toString().padStart(2, '0')}-${createdAtDate.getDate().toString().padStart(2, '0')}`;
    console.log(formattedDate);
    const imgPath =  files[0];


    return (
        <div className="mb-3 ml-5">
            <div className="flex gap-x-4 items-end flex-wrap">
                <img src={imgPath} alt="project" className="w-[50px] rounded bg-yellow-300 " />
                <div className="flex flex-col">
                    <h2 className="text-left font-medium">{title}</h2> {/* Assuming project has a title */}
                    <p className="text-left text-gray-500">{}</p> {/* Assuming project has a date */}
                </div>
            </div>
        </div>
    )
}
