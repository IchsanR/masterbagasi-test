import { createSlice } from "@reduxjs/toolkit";
import { setViews } from "../action/viewsAction";

const initialState = {
  pageViews: ""
};

const viewSlices = createSlice({
  name: "views",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setViews, (state, action) => {
      return {
        ...state,
        pageViews: action.payload
      };
    });
  }
});

export default viewSlices.reducer;