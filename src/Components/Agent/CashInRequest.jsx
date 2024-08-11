import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Provider/AuthProvider';

const CashInRequest = () => {
    const [requests, setRequests] = useState([]);
    const { user } = useContext(AuthContext)
    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.get('https://swift-pay-server-seven.vercel.app/api/requestCashIn', { withCredentials: true });
                setRequests(response.data);
            } catch (error) {
                console.error('Error fetching cash-in requests:', error);
            }
        };

        fetchRequests();
    }, []);

    const handleApprove = async (requestId) => {
        try {
            const agentEmail = user.email // Replace with the actual agent's email
            const response = await axios.put(`https://swift-pay-server-seven.vercel.app/api/approveCashIn/${requestId}`, { agentEmail }, { withCredentials: true });
            if (response.status === 200) {
                setRequests(requests.map(request =>
                    request._id === requestId ? { ...request, status: 'approved' } : request
                ));
            } else {
                console.error('Failed to approve cash-in request');
            }
        } catch (error) {
            console.error('Error approving cash-in request:', error);
        }
    };

    return (
        <div className="container p-2 mx-auto sm:p-4">
            <h2 className="mb-4 text-2xl font-semibold text-center leading-tight">Cash-In Requests</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <thead>
                        <tr className="text-left">
                            <th className="p-3">User Email</th>
                            <th className="p-3">Agent Email</th>
                            <th className="p-3">Amount</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request) => (
                            
                            <tr key={request._id} className="border-b text-lg border-opacity-20">
                                <td className="p-3 text-left">{request.userEmail}</td>
                                <td className="p-3 text-left">{request.agentEmail}</td>
                                <td className="p-3 text-left">{request.amount}</td>
                                <td className="p-3 text-left">{request.status}</td>
                                <td className="p-3 text-left">
                                    {request.status === 'pending' ?  (
                                        <button
                                            className="btn btn-secondary"
                                            onClick={() => handleApprove(request._id)}
                                        >
                                            Pending
                                        </button>
                                    ) : <button className="btn btn-primary">Approve</button> }
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CashInRequest;
