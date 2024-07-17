import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import User from "../Pages/User/User";
import Login from "../Pages/Login/Login";
import AllUser from "../Components/Admin/AllUser";
import AllTransactions from "../Components/Admin/AllTransactions";
import AgentRequest from "../Components/Admin/AgentRequest";
import UserRequest from "../Components/Admin/UserRequest";
import AdminPage from "../Deshboard/AdminPage";
import Agent from "../Pages/Agent/Agent";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    // login && Resistration 
    {
        path: "/user",
        element: <User></User>,
    },
    {
        path: "/agent",
        element: <Agent></Agent>,
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    //  Deshboard page
    {
        path: "/adminPage",
        element: <AdminPage></AdminPage>,
        children: [
            {
                path: "allUser",
                element: <AllUser></AllUser>
            },
            {
                path: "transactions",
                element: <AllTransactions></AllTransactions>
            },
            {
                path: "agentRequest",
                element: <AgentRequest></AgentRequest>
            },
            {
                path: "userRequest",
                element: <UserRequest></UserRequest>
            }
        ]
    },
    
]);