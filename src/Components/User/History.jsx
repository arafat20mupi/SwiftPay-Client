import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Provider/AuthProvider';

const History = () => {
  const [transactions, setTransactions] = useState([]);
  const { user } = useContext(AuthContext); // Assuming you have a user context

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/transactions/${user.email}`, { withCredentials: true });
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    if (user) {
      fetchTransactions();
    }
  }, [user]);

  return (
    <div className="container p-2 mx-auto sm:p-4">
      <h2 className="mb-4 text-2xl font-semibold text-center leading-tight">Transaction History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <thead>
            <tr className="text-left">
              <th className="p-3">Date</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Type</th>
              <th className="p-3">Description</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction._id} className="border-b text-lg border-opacity-20">
                <td className="p-3 text-left">{new Date(transaction.date).toLocaleString()}</td>
                <td className="p-3 text-left">{transaction.amount}</td>
                <td className="p-3 text-left">{transaction.type}</td>
                <td className="p-3 text-left">{transaction.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
