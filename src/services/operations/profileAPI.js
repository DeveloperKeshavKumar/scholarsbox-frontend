import { toast } from "react-hot-toast"

import { setLoading, setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiConnector"
import { endpoints } from "../apis"
import { logout } from "./authAPI"

const { GET_USER_DETAILS_API, USER_API } = endpoints

export function getUserDetails(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
        Authorization: `Bearer ${token}`,
      })
      console.log("GET_USER_DETAILS API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      const userImage = response.data.data.image
        ? response.data.data.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`
      dispatch(setUser({ ...response.data.data, image: userImage }))
    } catch (error) {
      dispatch(logout(navigate))
      console.log("GET_USER_DETAILS API ERROR............", error)
      toast.error("Could Not Get User Details")
    }
    toast.dismiss(toastId)
    dispatch(setLoading(false))
  }
}

export async function getUser(token, userId) {
  try {
    const response = await apiConnector("GET", USER_API + "/" + userId, null, {
      Authorization: `Bearer ${token}`
    });

    return response.data.user;
  } catch (err) {
    console.log(err);
    toast.error("Error while fetching user");
  }
}

export function editProfile(token, userData, userId, navigate) {
  return async (dispatch) => {
    dispatch(setLoading(true)); // Set loading to true initially
    const toastId = toast.loading("Loading...");
    try {
      console.log(userData.goals);
      const formData = new FormData();
      for (const key in userData) {
        if (Object.hasOwnProperty.call(userData, key)) {
          console.log("Key: ",key+" Value: ",userData[key])
          formData.append(key, userData[key]);
        }
      }
      let response = await apiConnector("PUT", `${USER_API}/${userId}/edit`, formData, {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      });
      console.log(response)
      toast.success("Profile updated successfully");
      response = await apiConnector("GET", USER_API, null, {
        Authorization: `Bearer ${token}`
      });
      localStorage.setItem("user", JSON.stringify(response.data.user))
      dispatch(setUser({ ...response.data.user }))
      navigate(`/user/${userId}`);
    } catch (error) {
      console.log(error)
      toast.error("Profile couldn't be updated. Please Try again later!");
      navigate("/user/" + userId);
    } finally {
      dispatch(setLoading(false)); // Set loading to false after completion
      toast.dismiss(toastId);
    }
  };
}