import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import "./index.css";
import { router } from "./Routes/Routes";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-2xl my-0 mx-auto">
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
// className="max-w-screen-xl my-0 mx-auto p-8"