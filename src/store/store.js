import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "./slices/servicesSlice";
import projectsReducer from "./slices/projectSlice";
import pricingReducer from "./slices/pricingSlice";

const store = configureStore({
  reducer: {
    services: servicesReducer,
    projects: projectsReducer,
    pricing: pricingReducer,
  },
});

export default store;
