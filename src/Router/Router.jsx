import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import User from "../Pages/User/User";
import Admin from "../Pages/Admin/Admin";
import Agent from "../Pages/Agent/Agent";
import Login from "../Pages/Login/Login";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    {
        path: "/user",
        element: <User></User>,
    },
    {
        path: "/admin",
        element: <Admin></Admin>,
    },
    {
        path: "/agent",
        element: <Agent></Agent>,
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
]);