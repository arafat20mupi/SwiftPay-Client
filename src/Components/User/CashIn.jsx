import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Provider/AuthProvider';

const RequestCashIn = () => {
    const [agentEmail, setAgentEmail] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const { user } = useContext(AuthContext);

    const handleRequest = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:5000/api/requestCashIn', {
                userEmail: user.email,
                agentEmail,
                amount: Number(amount) // Convert amount to number
            });
            setMessage(response.data.message);
            setAgentEmail(''); // Reset fields
            setAmount('');
        } catch (error) {
            setMessage(error.response?.data?.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full justify-center items-center flex ">
            <div className="flex flex-col max-w-md w-full p-6 rounded-md sm:p-10  shadow-md">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Request Cash-In</h1>
                </div>
                <form
                    onSubmit={handleRequest}
                    noValidate
                    className="space-y-8">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="agentEmail" className="block mb-2 text-sm font-medium">Agent Email</label>
                            <input
                                className="w-full px-3 py-2 border rounded-md"
                                type="email"
                                id="agentEmail"
                                value={agentEmail}
                                onChange={(e) => setAgentEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="amount" className="block mb-2 text-sm font-medium">Amount</label>
                            <input
                                className="w-full px-3 py-2 border rounded-md"
                                type="number"
                                id="amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                required
                                min="0" // Prevent negative values
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-8 py-3 font-semibold rounded-md bg-blue-500 text-white"
                            disabled={loading}
                        >
                            {loading ? 'Processing...' : 'Request Cash-In'}
                        </button>
                        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RequestCashIn;
