"use client";

import { Provider } from "react-redux";
import { makeStore } from "./store";
import { NextUIProvider } from '@nextui-org/react';

const Providers = ({ children }: { children: React.ReactNode; }) => {
  return (
    <Provider store={makeStore}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </Provider>);
};

export default Providers;