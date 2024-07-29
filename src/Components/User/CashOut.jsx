import React, { useState } from 'react';
import axios from 'axios';
import { useContext } from "react";
import { AuthContext } from '../../Provider/AuthProvider';

const CashOut = () => {
    const [amount, setAmount] = useState('');
    const [agent, setAgent] = useState('');
    const { user } = useContext(AuthContext);

    const handleCashOut = async () => {
        try {
            const response = await axios.post('/api/cashOut', {
                user: user.email,
                agent,
                amount,
                pin: prompt("Enter your PIN: ")
            });
            alert(response.data.message);
        } catch (error) {
            console.error('Error cashing out', error);
            alert('Error cashing out');
        }
    };

    return (
        <div>
            <h2>Cash Out</h2>
            <input
                type="text"
                placeholder="Agent Email"
                value={agent}
                onChange={(e) => setAgent(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleCashOut}>Cash Out</button>
        </div>
    );
};

export default CashOut;
