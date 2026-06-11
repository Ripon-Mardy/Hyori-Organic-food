"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import Cart from "@/components/Cart";

interface ReduxProvidersProps {
  children: ReactNode;
}

const ReduxProviders = ({ children }: ReduxProvidersProps) => {
  return (
    <Provider store={store}>
      {children}
      <Cart />
    </Provider>
  );
};

export default ReduxProviders;
