import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const { signIn, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            await signIn(email, password);
            alert('Login Successful');
            navigate('/');
        } catch (err) {
            alert(err.message);
            console.log(err);
        }
    };

    const handleLogout = async () => {
        try {
            await logOut();
            alert('Logged Out');
            navigate('/');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <div className="w-full justify-center items-center flex ">
            <div className="flex flex-col w-full max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
                    <button onClick={handleLogout}>Log Out</button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Your Pin</label>
                            </div>
                            <input type="text" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full btn text-lg px-8 py-3 font-semibold rounded-md">Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
