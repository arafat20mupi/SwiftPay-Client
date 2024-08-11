import axios from "axios";
import { useEffect, useState } from "react";

const AgentRequest = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        try {
            const response = await axios.get('https://swift-pay-server-seven.vercel.app/requested/agents');
            setRequests(response.data);
        } catch (error) {
            console.error('Error fetching requests:', error);
        }
    };

    const handleUpdateBalance = async (id) => {
        try {
            const response = await axios.get(`https://swift-pay-server-seven.vercel.app/requested/${id}`);
            const userDetails = response.data;
            console.log('User details fetched:', userDetails);

            const updatedRequest = {
                balance: 10000,
                status: 'active',
            };

            await axios.put(`https://swift-pay-server-seven.vercel.app/requested/${id}`, updatedRequest);
            console.log('User balance updated successfully');

            const newUserDetails = {
                ...userDetails,
                balance: updatedRequest.balance,
                status: updatedRequest.status,
            };

            await axios.post('https://swift-pay-server-seven.vercel.app/user', newUserDetails, {
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
        <div>
            
            {requests.length === 0 ? (
                <p className="text-center">No Agent requests found.</p>
            ) : (
                <div className="container p-2 mx-auto sm:p-4 ">
                    <h2 className="mb-4 text-2xl font-semibold text-center leading-tight">Agent Requests</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <thead className="">
                                <tr className="text-left">
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Number</th>
                                    <th className="p-3">Role</th>
                                    <th className="p-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {requests.map((request) => (
                                    !request.status && (
                                        <tr key={request._id} className="border-b textlg border-opacity-20 ">
                                            <td className="p-3 text-left">{request.name}</td>
                                            <td className="p-3 text-left">{request.email}</td>
                                            <td className="p-3 text-left">{request.number}</td>
                                            <td className="p-3 text-left">{request.role}</td>
                                            <td>
                                                <button
                                                    className={`btn btn-primary `}
                                                    onClick={() => handleUpdateBalance(request._id)}
                                                >Approve 
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AgentRequest;