import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { projectEndpoints, endpoints } from "../apis"
import { resetProjectState, setLoading } from "../../slices/projectSlice"
import { setUser } from "../../slices/profileSlice"

const { CREATE_PROJECT_API, GET_USER_PROJECTS_API } = projectEndpoints
const { USER_API } = endpoints;


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

            let response = await apiConnector("POST", CREATE_PROJECT_API, formData, {
                'Content-Type': 'multipart/form-data', // Set content type for FormData
                Authorization: `Bearer ${token.token}`,
            });

            console.log("CREATE PROJECT API RESPONSE............", response);
            const projectId = response.data.project._id;

            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast.success("Project created successfully");
            response = await apiConnector("GET", USER_API, null, {
                Authorization: `Bearer ${token.token}`
            });
            localStorage.setItem("user", JSON.stringify(response.data.user))
            dispatch(setUser({ ...response.data.user }))
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
        console.log(GET_USER_PROJECTS_API);
        const response = await apiConnector("GET", GET_USER_PROJECTS_API + "/" + projectID, null, {
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

export async function getLikes(token, projectID) {
    try {
        console.log("GEtting Likes")
        const url = `${GET_USER_PROJECTS_API}/${projectID}/like`;
        const response = await apiConnector("GET", url, null, {
            Authorization: `Bearer ${token.token}`
        });

        console.log("LIKES RESPONSE ", response)

        console.log("likes Came from server")
        return response.data.data;

    } catch (err) {
        console.error(err)

    }
}

export async function likeProject(token, projectID) {
    try {
        const url = `${GET_USER_PROJECTS_API}/${projectID}/like`;
        await apiConnector("POST", url, null, {
            Authorization: `Bearer ${token.token}`
        });
        toast.success("Project Liked Successfully")
    } catch (err) {
        console.log("Error while liking project", err);
        toast.error("Error while liking project");
    }
}

export async function dislikeProject(token, projectID) {
    try {
        const url = `${GET_USER_PROJECTS_API}/${projectID}/dislike`;
        await apiConnector("POST", url, null, {
            Authorization: `Bearer ${token.token}`
        });
        toast.success("Project Disliked Sucessfully")
    } catch (err) {
        toast.error("Error while disliking project");
        console.log("Error while disliking project", err);
    }
}


export async function deleteProject(token, projectID, navigate,dispatch) {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
        const url = `${GET_USER_PROJECTS_API}/${projectID}`;
        let response = await apiConnector("DELETE", url, null, {
            Authorization: `Bearer ${token.token}`
        });
        dispatch(resetProjectState(null))
        toast.success("Project Deleted Successfully");
        response = await apiConnector("GET", USER_API, null, {
            Authorization: `Bearer ${token.token}`
        });
        localStorage.setItem("user", JSON.stringify(response.data.user))
        dispatch(setUser({ ...response.data.user }))
        navigate("/projects/create")
    } catch (err) {
        toast.error("Error while deleting project");
        console.log("Error while deleting project", err);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);

}