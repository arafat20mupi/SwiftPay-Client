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
import UserPage from "../Deshboard/UserPage";
import SendMoney from "../Components/User/SendMoney";
import CashOut from "../Components/User/CashOut";
import CashIn from "../Components/User/CashIn";
import History from "../Components/User/History";
import Balance from "../Components/User/Balance";
import Agentpage from "../Deshboard/Agentpage";
import CashInRequest from "../Components/Agent/CashInRequest";
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
    //  Deshboard 
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
    {
        path: '/userPage',
        element: <UserPage></UserPage>,
        children: [
            {
                path: 'sendMoney',
                element: <SendMoney></SendMoney>
            },
            {
                path: 'cashOut',
                element: <CashOut></CashOut>
            },
            {
                path: 'cashIn',
                element: <CashIn></CashIn>
            },
            {
                path: 'History',
                element: <History></History>
            },
            {
                path: "Balance",
                element: <Balance></Balance>

            }
        ]
    },
    {
        path: "/agentpage",
        element: <Agentpage></Agentpage>,
        children: [
            {
                path: 'sendMoney',
                element: <SendMoney></SendMoney>
            },
            {
                path: 'cashInRequest',
                element: <CashInRequest></CashInRequest>
            },
            {
                path: 'History',
                element: <History></History>
            },
            {
                path: "Balance",
                element: <Balance></Balance>

            }
        ]
    }
    
]);