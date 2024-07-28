import axios from "axios";
import { useEffect, useState } from "react";

const AgentRequest = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
      fetchRequests();
    }, []);
  
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/requested/agents');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    const handleUpdateBalance = async (id) => {
        try {
          const response = await axios.get(`http://localhost:5000/requested/${id}`);
          const userDetails = response.data;
          console.log('User details fetched:', userDetails);
    
          const updatedRequest = {
            balance: 40,
            status: 'active',
          };
    
          await axios.put(`http://localhost:5000/requested/${id}`, updatedRequest);
          console.log('User balance updated successfully');
    
          const newUserDetails = {
            ...userDetails,
            balance: updatedRequest.balance,
            status: updatedRequest.status,
          };
    
          await axios.post('http://localhost:5000/user', newUserDetails, {
            withCredentials: true,
          });
          alert('User Aprrove successful!');
          fetchRequests(); // Refresh the list after updating
        } catch (error) {
          alert('User already approved or error updating balance');
          console.error('Error updating balance:', error);
        }
      };
    
    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">User Requests</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <thead className="dark:bg-gray-300">
                        <tr className="text-left">
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Number</th>
                            <th className="p-3">Role</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map(request => (
                            <tr key={request._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                <td className="p-3 text-left">{request.name}</td>
                                <td className="p-3 text-left">{request.email}</td>
                                <td className="p-3 text-left">{request.number}</td>
                                <td className="p-3 text-left">{request.role}</td>
                                <td>
                                    <button
                                        className={`btn ${request.status === 'active' ? 'btn-primary ' : 'btn-secondary'}`}
                                        onClick={() => handleUpdateBalance(request._id)}
                                    >
                                        {request.status === 'active' ? 'Approved' : "Requsted "}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AgentRequest;