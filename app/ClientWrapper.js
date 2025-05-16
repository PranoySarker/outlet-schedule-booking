"use client";

import ReduxProvider from "@/redux/provider";
import { Toaster } from "react-hot-toast";

export default function ClientWrapper({ children }) {
  return (
    <>
      <ReduxProvider>
        {children}
        <Toaster position="top-right" />
      </ReduxProvider>
    </>
  );
}
