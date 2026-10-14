
import { createSlice } from "@reduxjs/toolkit";
import projects from "../../data/projects";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    items: projects,
  },
  reducers: {},
});

export default projectsSlice.reducer;
