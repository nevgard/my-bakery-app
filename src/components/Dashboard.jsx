import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard({ orders, setIsAuthenticated }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsAuthenticated(false);
        navigate('/');
    };

    const orderCounts = orders.reduce((counts, order) => {
        counts[order.source] = (counts[order.source] || 0) + 1;
        return counts;
    }, {});

    return (
        <div className="mt-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <div>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                        onClick={() => navigate('/order')}
                    >
                        Add Order
                    </button>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
            <div className="bg-white shadow-md rounded p-6 mb-6">
                <p>Orders from Whatsapp: {orderCounts.Whatsapp || 0}</p>
                <p>Orders from Call: {orderCounts.Call || 0}</p>
                <p>Orders from Email: {orderCounts.Email || 0}</p>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Source</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Phone</th>
                            <th className="py-2 px-4 border-b">Quantity</th>
                            <th className="py-2 px-4 border-b">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 border-b">{order.name}</td>
                                <td className="py-2 px-4 border-b">{order.source}</td>
                                <td className="py-2 px-4 border-b">{order.email}</td>
                                <td className="py-2 px-4 border-b">{order.phone}</td>
                                <td className="py-2 px-4 border-b">{order.quantity}</td>
                                <td className="py-2 px-4 border-b">{order.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;
