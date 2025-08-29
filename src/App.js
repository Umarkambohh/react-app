// src/App.jsx
import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index";
import "./css/index.css";
import "./scss/style.scss";

export default function App() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
