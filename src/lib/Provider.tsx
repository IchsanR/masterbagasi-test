"use client";

import { Provider } from "react-redux";
import { makeStore } from "./store";

const Providers = ({ children }: { children: React.ReactNode; }) => {
  return <Provider store={makeStore}>{children}</Provider>;
};

export default Providers;