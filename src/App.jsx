
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import useAdmin from "./Hooks/useAdmin";
import useAgent from "./Hooks/useAgent";
import useUser from "./Hooks/useUser";
import Agentpage from "./Deshboard/Agentpage";
import AdminPage from "./Deshboard/AdminPage";
import UserPage from "./Deshboard/UserPage";
function App() {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin()
  const [isAgent] = useAgent()
  const [isUser] = useUser()
  return (
    <>
      {/* Admin */}
      {
        user && isAdmin ? <AdminPage></AdminPage> : ''
      }
      {/* Agent */}
      {
        user && isAgent ? <Agentpage></Agentpage> : ''
      }
      {/* Normal User */}
      {
        user && isUser ? <UserPage></UserPage> : ''
      }
      {/* panding */}
      {
        user && !isAdmin && !isAgent && !isUser ? <section className="py-6 h-screen bg-gray-100 text-gray-900">
          <div className="container mx-auto flex flex-col items-center  justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
            <h1 className="text-5xl font-bold leading-none text-center">SwiftPay</h1>
            <p className="text-xl font-medium text-center"> Please Sign up Role </p>
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
              <NavLink to={'/user'} className={''}><button className="px-8 bg-primary py-3 text-lg font-semibold rounded  text-gray-50">User</button></NavLink>
              <NavLink to={'/agent'} className={''}><button className="px-8 bg-primary py-3 text-lg font-semibold rounded  text-gray-50">Agent</button></NavLink>
              <NavLink to={'/login'} className={''}> <button className="px-8 py-3 bg-primary text-lg font-normal border rounded  text-gray-50 border-gray-700">login</button></NavLink>
            </div>
          </div>
        </section> : ""
      }
      {/* WithOut login */}
      {
        !user && <section className="py-6 h-screen bg-gray-100 text-gray-900">
          <div className="container mx-auto flex flex-col items-center  justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
            <h1 className="text-5xl font-bold leading-none text-center">SwiftPay</h1>
            <p className="text-xl font-medium text-center"> Please Sign up Role </p>
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
              <NavLink to={'/user'} className={''}><button className="px-8 bg-primary py-3 text-lg font-semibold rounded  text-gray-50">User</button></NavLink>
              <NavLink to={'/agent'} className={''}><button className="px-8 bg-primary py-3 text-lg font-semibold rounded  text-gray-50">Agent</button></NavLink>
              <NavLink to={'/login'} className={''}> <button className="px-8 py-3 bg-primary text-lg font-normal border rounded  text-gray-50 border-gray-700">login</button></NavLink>
            </div>
          </div>
        </section>
      }
    </>
  )
}

export default App
