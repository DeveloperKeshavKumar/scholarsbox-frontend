import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  editProject: false,
  projectData: {
    title: "",
    description: "",
    tags: [],
    url: '',
    projectFiles: null // Store file reference
  },
  allProjects: localStorage.getItem("allprojects") ? JSON.parse(localStorage.getItem("allprojects")) : null,
};

const projectSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setProjectData: (state, action) => {
      const { title, description, tags, url, projectFiles } = action.payload;
      state.projectData = {
        title,
        description,
        tags,
        url,
        projectFiles: projectFiles ? projectFiles.name : null // Store file name as reference
      };
    },
    setEditProject: (state, action) => {
      state.editProject = action.payload;
    },
    resetProjectState: (state) => {
      state.loading = false;
      state.projectData = initialState.projectData;
      state.editProject = false;
    },
    setAllProjects: (state, action) => {
      state.allProjects = action.payload;
    }
  },
});

export const {
  setLoading,
  setProjectData,
  setEditProject,
  resetProjectState,
  setAllProjects,
} = projectSlice.actions;

export default projectSlice.reducer;
