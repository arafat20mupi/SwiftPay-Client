import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Provider/AuthProvider';

const CashOut = () => {
    const [amount, setAmount] = useState('');
    const [agent, setAgent] = useState('');
    const { user } = useContext(AuthContext);
    const [error, setError] = useState(null);
    
    const [loading, setLoading] = useState(false);

    const handleCashOut = async (event) => {
        event.preventDefault();
        if (!amount || !agent) {
            setError('Please fill in all fields.');
            return;
        }
    
        try {
            const pin = prompt("Enter your PIN:");
            if (!pin) {
                setError('PIN is required.');
                setLoading(false);
                return;
            }
    
            const response = await axios.post('https://swift-pay-server-seven.vercel.app/api/cashOut', {
                agent,
                amount,
                pin,
                userEmail : user.email
            }, {
                withCredentials: true // Ensure cookies are sent with the request
            });
    
            if (response.status === 200) {
                alert(response.data.message);
                setAmount('');
                setAgent('');
                setError(null); // Clear error on successful submission
            }
        } catch (error) {
            console.error('Error cashing out:', error);
            if (error.response) {
                setError(error.response.data.message || 'Error cashing out');
            } else {
                setError('Network Error');
            }
        }
    };
    if (!user) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    return (
        <div className='w-full justify-center items-center flex'>
            <div className="flex flex-col max-w-md w-full p-6 shadow-md rounded-md sm:p-10">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Cash Out</h1>
                </div>
                <form noValidate="" action="" className="space-y-12" onSubmit={handleCashOut}>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between m-2">
                                <label htmlFor="agent" className="font-bold text-lg">Agent Email</label>
                            </div>
                            <input
                                className='w-full border-2 rounded p-2'
                                type="email"
                                id="agent"
                                placeholder="Enter Agent Email"
                                value={agent}
                                onChange={(e) => setAgent(e.target.value)}
                            />
                        </div>
                        <div>
                            <div className="flex justify-between m-2">
                                <label htmlFor="amount" className="font-bold text-lg">Amount</label>
                            </div>
                            <input
                                className='w-full border-2 rounded p-2'
                                type="number"
                                id="amount"
                                placeholder="Enter Amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button className='btn btn-primary w-full' type="submit">
                                Send
                            </button>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CashOut;
