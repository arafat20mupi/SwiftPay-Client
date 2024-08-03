import { useState } from 'react';
import axios from 'axios';
import { useContext } from "react";
import { AuthContext } from '../../Provider/AuthProvider';

const SendMoney = () => {
    const [amount, setAmount] = useState('');
    const [recipient, setRecipient] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { user } = useContext(AuthContext);

    const handleSendMoney = async () => {
        if (!amount || !recipient) {
            setError('Please fill in all fields.');
            return;
        }

        const amountNum = parseFloat(amount);
        if (isNaN(amountNum) || amountNum < 50) {
            setError('Amount must be at least 50 Taka.');
            return;
        }

        setError(null);
        setLoading(true);

        try {
            const pin = prompt("Enter your PIN:");
            if (!pin) {
                setError('PIN is required.');
                setLoading(false);
                return;
            }

            const response = await axios.post('http://localhost:5000/api/sendMoney', {
                sender: user.email,
                recipient,
                amount: amountNum,
                pin
            });


            alert(response.data.message);
        } catch (error) {
            console.error('Error sending money:', error);
            setError(error.response?.data.message || 'Failed to send money. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='w-full justify-center items-center flex'>
            <div className="flex flex-col max-w-md w-full shadow-md  p-6 rounded-md sm:p-10">
                <div className="mb-8  text-center">
                    <h1 className="my-3 text-4xl font-bold">Send Money</h1>
                </div>
                <form noValidate="" action="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between m-2">
                                <label htmlFor="password" className="font-bold  text-lg">Recipient Email</label>
                            </div>
                            <input
                                className='w-full border-2 rounded p-2'
                                type="email"
                                placeholder="Enter Your Email"
                                value={recipient}
                                onChange={(e) => setRecipient(e.target.value)}
                            />
                        </div>
                        <div>
                            <div className="flex justify-between m-2">
                                <label htmlFor="password" className="font-bold  text-lg">Amount</label>
                            </div>
                            <input
                                className='w-full border-2 rounded p-2'
                                type="number"
                                placeholder="Enter Amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button className='btn btn-primary w-full' onClick={handleSendMoney} disabled={loading}>
                                {loading ? 'Sending...' : 'Send'}
                            </button>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default SendMoney;
