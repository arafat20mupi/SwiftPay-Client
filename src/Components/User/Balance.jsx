import { useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from "react";
import { AuthContext } from '../../Provider/AuthProvider';

const Balance = () => {
    const [balance, setBalance] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await axios.get(`/api/balance/${user.email}`);
                setBalance(response.data.balance);
            } catch (error) {
                console.error('Error fetching balance', error);
                alert('Error fetching balance');
            }
        };

        fetchBalance();
    }, [user.email]);

    return (
        <div>
            <h2>Your Balance</h2>
            {balance !== null ? (
                <p>{balance} Taka</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Balance;
