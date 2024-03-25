import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { projectEndpoints } from "../apis"
import {setLoading} from "../../slices/projectSlice"

const { CREATE_PROJECT_API
} = projectEndpoints


export function createProject(projectTitle, projectDescription, projectTags, projectFile, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {
            const formData = new FormData();
            formData.append('projectTitle', projectTitle);
            formData.append('projectDescription', projectDescription);
            formData.append('projectTags', JSON.stringify(projectTags)); // Convert to JSON string
            formData.append('projectFile', projectFile); // Append the file

            const response = await apiConnector("POST", CREATE_PROJECT_API, formData, {
                'Content-Type': 'multipart/form-data', // Set content type for FormData
            });

            console.log("CREATE PROJECT API RESPONSE............", response);

            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast.success("Project created successfully");
            navigate(`/projects/${projectTitle}`);
        } catch (error) {
            console.log("CREATE PROJECT API ERROR............", error);
            toast.error("Project creation failed");
            navigate("/projects");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    };
}
