import { NavLink, Outlet ,useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AdminPage = () => {
    const {  logOut } = useContext(AuthContext);
    const navigate  = useNavigate()
    const logout = () => {
        logOut()
        alert('Logged Out')
        navigate('/')
    }
    return (
        <div className='w-full flex h-screen space-y-6 '>
            <div className="flex flex-col space-y-3 w-1/4 p-6 bg-slate-600 h-screen text-lg">
                <NavLink to='/adminPage/allUser' className={'btn btn-primary'}>All User</NavLink>
                <NavLink to='/adminPage/userRequest' className={'btn btn-primary'}>User Request</NavLink>
                <NavLink to='/adminPage/agentRequest' className={'btn btn-primary'}>Agent Request</NavLink>
                <NavLink to='/adminPage/transactions' className={'btn btn-primary'}>All Transactions </NavLink>
                <button onClick={logout} className="btn  btn-primary">Logout</button>
            </div>
            <div className="w-full  h-screen space-y-6">
                <h1 className='text-center text-3xl font-bold mt-6'>Admin Panel</h1>
                <p className='text-center text-xl font-semibold mt-3'>Welcome to the administrative panel!</p>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminPage;