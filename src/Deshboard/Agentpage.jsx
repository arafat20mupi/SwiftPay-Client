import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Agentpage = () => {
    const {  logOut } = useContext(AuthContext);
    const navigate  = useNavigate()
    const logout = () => {
        logOut()
        alert('Logged Out')
        navigate('/')
    }
    return (
        <div className='w-full flex h-screen  '>
            <div className="flex flex-col space-y-3 w-1/4 p-6 bg-slate-600 h-screen text-lg">
                <NavLink to='/agentpage/sendMoney' className={'btn btn-primary'}>Send Money</NavLink>
                <NavLink to='/agentpage/cashOut' className={'btn btn-primary'}>Cash Out</NavLink>
                <NavLink to='/agentpage/cashInRequest' className={'btn btn-primary'}>Cash In Request</NavLink>
                <NavLink to='/agentpage/History' className={'btn btn-primary'}>History</NavLink>
                <NavLink to='/agentpage/Balance' className={'btn btn-primary'}>Balance</NavLink>
                <button onClick={logout} className="btn  btn-primary">Logout</button>
            </div>
            <div className="w-full  space-y-6">
                <p className='text-center text-3xl font-bold my-6'>Welcome to the Agent Panel</p>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Agentpage;