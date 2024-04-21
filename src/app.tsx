import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Providers } from "./components/Providers.tsx";
import "@fontsource-variable/montserrat";
import "@fontsource/ubuntu-mono/400.css";
import "@fontsource/ubuntu-mono/700.css";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>
);
