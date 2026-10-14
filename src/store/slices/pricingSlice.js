
import { createSlice } from "@reduxjs/toolkit";
import pricing from "../../data/pricing";

const pricingSlice = createSlice({
  name: "pricing",
  initialState: {
    items: pricing,
  },
  reducers: {},
});

export default pricingSlice.reducer;
