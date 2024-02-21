import { createAction } from "@reduxjs/toolkit";

export const setViews = createAction("page", function prepare(text: string) {
  return {
    payload: text
  };
});