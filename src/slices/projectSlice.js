import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  editProject: false,
  projectData: {
    title: "",
    description: "",
    tags: [],
    projectFiles: null // Store file reference
  }
};

const projectSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setProjectData: (state, action) => {
      const { title, description, tags, projectFiles } = action.payload;
      state.projectData = {
        title,
        description,
        tags,
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
    }
  },
});

export const {
  setLoading,
  setProjectData,
  setEditProject,
  resetProjectState
} = projectSlice.actions;

export default projectSlice.reducer;
