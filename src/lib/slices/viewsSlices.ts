import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { setViews } from "../action/viewsAction";
import { State } from "../types/types";

const initialState = {
  pageViews: "home"
} as State;

const viewSlices = createSlice({
  name: "views",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<State>): void => {
    builder.addCase(setViews, (state, action) => {
      return {
        ...state,
        pageViews: action.payload
      };
    });
  }
});

export default viewSlices.reducer;