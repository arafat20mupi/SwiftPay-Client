import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Provider/AuthProvider';

const Balance = () => {
    const [balance, setBalance] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user && user.email) {
            const fetchBalance = async () => {
                try {
                    const response = await axios.get(`https://swift-pay-server-seven.vercel.app/api/balance/${user.email}`);
                    if (!response.data) {
                        console.error('No balance found for user:', user.email);
                        return;
                    }
                    if (response.status === 200) {
                        setBalance(response.data.balance);
                    }
                } catch (error) {
                    console.error('Error fetching balance', error);
                    alert('Error fetching balance');
                }
            };

            fetchBalance();
        }
    }, [user]);

    if (!user) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    if (balance === null) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    return (
        <div>
            <div className="stats bg-primary text-primary-content">
                <div className="stat space-y-6 p-6">
                    <div className="stat-title text-black text-xl font-bold">Your Account Balance</div>
                    <div className="stat-value">${balance !== null ? parseFloat(balance).toFixed(2) : 'Loading...'} Taka</div>

                </div>
            </div>
        </div>
    );
};

export default Balance;
