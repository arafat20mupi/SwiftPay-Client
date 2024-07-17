import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const useAgent = () => {
    const { user } = useContext(AuthContext)
   
    // const axiosSecure = useAxiosSecure()
    const axiosCommon = axios.create({
        baseURL: 'http://localhost:5000/',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const {data:isAgent,isPending} = useQuery({
        queryKey:['isAgent',user?.email],
        queryFn:async()=> {
            const {data} = await axiosCommon.get(`/user/${user?.email}`)
            return data?.agent
        }
    })
    console.log(isAgent);
    return [isAgent,isPending]
};

export default useAgent;