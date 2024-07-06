import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/home";

const PUBLISHABLE_KEY =
  "pk_test_cmVzb2x2ZWQtbW9yYXktMTIuY2xlcmsuYWNjb3VudHMuZGV2JA";
if (!PUBLISHABLE_KEY) {
  console.log("gaurav is great");
  throw new Error("Missing Publishable Key");
}





const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
  },
  {
    path: "/dashboard",
    element:<Home/>,
  }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);

reportWebVitals();
