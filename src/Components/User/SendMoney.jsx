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
        <div>
            <h2>Send Money</h2>
            <input
                type="email"
                placeholder="Recipient Email"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleSendMoney} disabled={loading}>
                {loading ? 'Sending...' : 'Send'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default SendMoney;
