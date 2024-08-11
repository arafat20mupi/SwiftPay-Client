import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const useAdmin = () => {
    const { user } = useContext(AuthContext)
   
    // const axiosSecure = useAxiosSecure()
    const axiosCommon = axios.create({
        baseURL: 'https://swift-pay-server-seven.vercel.app/',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const {data:isAdmin,isPending} = useQuery({
        queryKey:['isAdmin',user?.email],
        queryFn:async()=> {
            const {data} = await axiosCommon.get(`/user/${user?.email}`)
            return data?.admin
        }
    })
    console.log(isAdmin , isPending);
    return [isAdmin,isPending]
};

export default useAdmin;