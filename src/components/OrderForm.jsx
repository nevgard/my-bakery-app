import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function OrderForm({ setOrders }) {
    const [order, setOrder] = useState({
        source: '',
        name: '',
        phone: '',
        email: '',
        quantity: '',
        description: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder({ ...order, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOrders(prevOrders => [...prevOrders, order]);
        toast.success('Order submitted successfully!');
        navigate('/dashboard');
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded p-6 mt-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-center mb-4">Order Form</h2>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => navigate('/dashboard')}
                >
                    Go to Dashboard
                </button>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block mb-2">Source</label>
                    <select
                        name="source"
                        value={order.source}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="">Select Source</option>
                        <option value="Whatsapp">Whatsapp</option>
                        <option value="Call">Call</option>
                        <option value="Email">Email</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={order.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={order.phone}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={order.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block mb-2">Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        value={order.quantity}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2">Description</label>
                    <textarea
                        name="description"
                        value={order.description}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        rows="4"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded mt-4"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default OrderForm;
