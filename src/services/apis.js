const BASE_URL = "http://localhost:4000/api"

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/sendotp",
  SIGNUP_API: BASE_URL + "/signup",
  LOGIN_API: BASE_URL + "/login",
  RESETPASSTOKEN_API: BASE_URL + "/reset_password_token",
  RESETPASSWORD_API: BASE_URL + "/reset-password",
}

// PROJECT ENDPOINTS
export const projectEndpoints = {
  CREATE_PROJECT_API : BASE_URL + "/projects/create",
  GET_USER_PROJECTS_API: BASE_URL + "/projects"
}
