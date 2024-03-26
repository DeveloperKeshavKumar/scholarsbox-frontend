import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { projectEndpoints } from "../apis"
import { setLoading } from "../../slices/projectSlice"

const { CREATE_PROJECT_API, GET_USER_PROJECTS_API } = projectEndpoints


export function createProject(projectTitle, projectDescription, projectTags, projectFile, token, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {
            const formData = new FormData();
            formData.append('title', projectTitle);
            formData.append('description', projectDescription);
            formData.append('tags', JSON.stringify(projectTags)); // Convert to JSON string
            formData.append('projectFiles', projectFile); // Append the file

            const response = await apiConnector("POST", CREATE_PROJECT_API, formData, {
                'Content-Type': 'multipart/form-data', // Set content type for FormData
                Authorization: `Bearer ${token.token}`,
            });

            console.log("CREATE PROJECT API RESPONSE............", response);
            const projectId = response.data.project._id;

            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast.success("Project created successfully");
            navigate(`/projects/${projectId}`);
        } catch (error) {
            console.log("CREATE PROJECT API ERROR............", error);
            toast.error("Project creation failed");
            navigate("/projects");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    };
}

export async function getProjectByID(token, projectID) {
    try {
        console.log(token.token, projectID)
        console.log( GET_USER_PROJECTS_API);
        const response = await apiConnector("GET", GET_USER_PROJECTS_API+"/"+projectID, null, {
            Authorization: `Bearer ${token.token}`
        });

        console.log("********RESPONSE FROM GET PROJECT**********\n", response.data.project);

        // if (!response || !response.project) {
        //     throw new Error("Project not found or response format is incorrect");
        // }

        return response.data.project;
    } catch (err) {
        console.log("Fetching user project error:", err);
        // throw err;
    }
}

export async function likeOrDislike(token, projectID, like) {
    try {
        const url = `${GET_USER_PROJECTS_API}/${projectID}/${like ? 'like' : 'dislike'}`;
        const response = await apiConnector("POST", url, null, {
            Authorization: `Bearer ${token.token}`
        });

        console.log("LIKE DISLIKE RESPONSE ", response);
        
    } catch (err) {
        console.log("Error while Liking or disliking Post \n", err);
    }
}
