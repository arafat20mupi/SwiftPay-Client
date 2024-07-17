import { useState, useEffect } from 'react';
import axios from 'axios';

const UserRequest = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch requests
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/requested');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  const handleUpdateBalance = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/requested/${id}`, {
        balance: 40
      });
      console.log(response);
      alert('Balance updated successfully');
    } catch (error) {
      console.error('Error updating balance:', error);
      alert('Failed to update balance');
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
                <td className="p-3 btn-primary btn">
                  <button onClick={() => handleUpdateBalance(request._id)} >Pending</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserRequest;
