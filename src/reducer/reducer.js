import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice";
import projectReducer from "../slices/projectSlice";
// import cartReducer from "../slices/cartSlice"
// import courseReducer from "../slices/courseSlice"
// import viewCourseReducer from "../slices/viewCourseSlice"

const rootReducer  = combineReducers({
    auth: authReducer,
    profile:profileReducer,
    project:projectReducer,
    // cart:cartReducer,
    // course:courseReducer,
    // viewCourse:viewCourseReducer,
})

export default rootReducer