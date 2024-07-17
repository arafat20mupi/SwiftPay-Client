import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
const Agent = () => {
    const { createUser } = useContext(AuthContext);
    const API_URL = 'http://localhost:5000';
    const navigate  = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const number = form.number.value;
        console.log(email, password);

        const userDetails = {
            email,
            name,
            password,
            number,  
            role: 'agent',
        };
        try {
            // Firebase user creation
            await createUser(email, password);
            // Sending user details to the backend
            await axios.post(API_URL + '/requested', userDetails, {
                withCredentials: true,
            });
            navigate('/')
            alert('User registration successful!');
        } catch (error) {
            console.error('Error registering user:', error);
            alert('Failed to register user.');
        }
    };
    return (
        <div className="w-full justify-center items-center flex ">
            <div className="flex flex-col max-w-md  w-full p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Registration With Agent </h1>
                </div>
                <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm">Your Name</label>
                            <input type="text" name="name" required placeholder="Type Your Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email"  required placeholder="Type Your Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Mobile Number</label>
                            <input type="number" name="number" required placeholder="Type Your Number" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm"> Your Pin</label>
                            </div>
                            <input type="password" name="password" required placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                    </div>
                    <button type="submit" className="btn w-full">Signup</button>
                </form>
            </div>
        </div>
    );
};

export default Agent;