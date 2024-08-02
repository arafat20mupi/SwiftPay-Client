import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UserPage = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate()
    const logout = () => {
        logOut()
        alert('Logged Out')
        navigate('/')
    }
    return (
        <div className='w-full flex h-screen  '>
            <div className="flex flex-col space-y-3 w-1/4 p-6 bg-slate-600 h-screen text-lg">
                <NavLink to='/userPage/sendMoney' className={'btn btn-primary'}>Send Money</NavLink>
                <NavLink to='/userPage/cashOut' className={'btn btn-primary'}>Cash Out</NavLink>
                <NavLink to='/userPage/cashIn' className={'btn btn-primary'}>Cash In</NavLink>
                <NavLink to='/userPage/History' className={'btn btn-primary'}>History</NavLink>
                <NavLink to='/userPage/Balance' className={'btn btn-primary'}>Balance</NavLink>
                <button onClick={logout} className="btn  btn-primary">Logout</button>
            </div>
            <div className="w-full justify-center flex flex-col items-center  h-screen space-y-6">
                <p className='text-center text-3xl font-bold '>Welcome to the User Panel</p>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default UserPage;