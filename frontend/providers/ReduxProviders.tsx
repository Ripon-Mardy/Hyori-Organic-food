"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import Cart from "@/components/Cart";

interface ReduxProvidersProps {
  children: ReactNode;
}

const ReduxProviders = ({ children }: ReduxProvidersProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
      <Cart />
    </Provider>
  );
};

export default ReduxProviders;
