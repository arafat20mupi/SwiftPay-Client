import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const useUser = () => {
    const { user } = useContext(AuthContext)
   
    // const axiosSecure = useAxiosSecure()
    const axiosCommon = axios.create({
        baseURL: 'http://localhost:5000/',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const {data:isUser,isPending} = useQuery({
        queryKey:['isUser',user?.email],
        queryFn:async()=> {
            const {data} = await axiosCommon.get(`/user/${user?.email}`)
            console.log(data);
            return data?.user
        }
    })
    console.log(isUser);
    return [isUser,isPending]
};

export default useUser;