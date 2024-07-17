
const AgentRequest = () => {
    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">

                    <thead className="dark:bg-gray-300">
                        <tr className="text-left">
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Number</th>
                            <th className="p-3">Role</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                            <td className="p-3 text-left">
                                <p>Name</p>
                            </td>
                            <td className="p-3 text-left">
                                <p>Email</p>
                            </td>
                            <td className="p-3 text-left">
                                <p className="">Number</p>
                            </td>
                            <td className="p-3 text-left">
                                <p className="">Agent</p>
                            </td>
                            <td className="p-3 btn">
                                <button>Panding</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AgentRequest;