import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
const User = () => {
    const { createUser } = useContext(AuthContext);
    const API_URL = 'http://localhost:5000';

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
            role: 'user',
        };
        try {
            // Firebase user creation
            await createUser(email, password);
            // Sending user details to the backend
            await axios.post(API_URL + '/requsted', userDetails, {
                withCredentials: true,
            });
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
                    <h1 className="my-3 text-4xl font-bold">Registration With User </h1>
                </div>
                <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm">Your Name</label>
                            <input type="text" name="name" placeholder="Type Your Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email"  placeholder="Type Your Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Mobile Number</label>
                            <input type="number" name="number"  placeholder="Type Your Number" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm"> Your Pin</label>
                            </div>
                            <input type="number" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                    </div>
                    <button type="submit" className="btn w-full">Signup</button>
                </form>
            </div>
        </div>
    );
};

export default User;