import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { projectEndpoints, endpoints } from "../apis"
import { resetProjectState, setAllProjects, setLoading, setProjectData } from "../../slices/projectSlice"
import { setUser } from "../../slices/profileSlice"

const { CREATE_PROJECT_API, GET_USER_PROJECTS_API } = projectEndpoints
const { USER_API } = endpoints;


export function createProject(projectTitle, projectDescription, projectTags, projectFile, token, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {
            console.log(projectTags)
            const formData = new FormData();
            formData.append('title', projectTitle);
            formData.append('description', projectDescription);
            formData.append('tags', JSON.stringify(projectTags));
            formData.append('projectFiles', projectFile);

            let response = await apiConnector("POST", CREATE_PROJECT_API, formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token.token}`,
            });
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
            toast.error("Project creation failed");
            navigate("/projects");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    };
}

export async function getProjectByID(token, projectID) {
    try {
        const response = await apiConnector("GET", GET_USER_PROJECTS_API + "/" + projectID, null, {
            Authorization: `Bearer ${token.token}`
        });

        return response.data.project;
    } catch (err) {
        toast.error("Error while fetching project")
    }
}

export async function getLikes(token, projectID) {
    try {
        const url = `${GET_USER_PROJECTS_API}/${projectID}/like`;
        const response = await apiConnector("GET", url, null, {
            Authorization: `Bearer ${token.token}`
        });
        console.log("ProjectAPI LikeCount: ", response?.data?.totalLikes);
        return { getLike: response.data.data, totalLikes: response.data.totalLikes };
    } catch (err) {
        console.error(err);
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
    }
}


export async function deleteProject(token, projectID, navigate, dispatch) {
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
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);

}

export function editProject(projectID, title, description, tags, giturl, projectFiles, token, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {
            console.log("TAGS IN EDIT PROJECT API", JSON.stringify(tags))
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('tags', JSON.stringify(tags));
            formData.append('url', giturl);
            if (projectFiles && projectFiles.length > 0) {
                for (let i = 0; i < projectFiles.length; i++) {
                    formData.append(projectFiles[i], projectFiles[i])
                }
            }

            const url = `${GET_USER_PROJECTS_API}/${projectID}`;
            let response = await apiConnector("PUT", url, formData, {
                Authorization: `Bearer ${token.token}`,
                'Content-Type': 'multipart/form-data'
            });
            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            console.log("RESPONSE FROM EDIT PROJECT: \n",response.data.project)
            dispatch(setProjectData(response.data.project))
            toast.success("Project Updated Successfully");
            response = await apiConnector("GET", USER_API, null, {
                Authorization: `Bearer ${token.token}`
            });
            localStorage.setItem("user", JSON.stringify(response.data.user))
            dispatch(setUser({ ...response.data.user }))
        } catch (err) {
            toast.error("Error while updating project");
            console.log("Error while updating project", err);
        }
        navigate(`/projects/${projectID}`);
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    };
}

export function getAllProjects() {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("GET", GET_USER_PROJECTS_API, null, null)

            console.log("GET ALL PROJECTS RESPONSE ....................", response.data.data);

            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            localStorage.setItem('allprojects', JSON.stringify(response.data.data))

            dispatch(setAllProjects({ ...response.data.data }))
        } catch (err) {
            console.log("GET ALL PROJECTS API ERROR ..................", err)
            toast.error("Error fetching all projects")
        }
        toast.dismiss(toastId)
        dispatch(setLoading(false))
    }
}