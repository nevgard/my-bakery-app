// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isAuthenticated, handleLogout }) {
    return (
        <div className="bg-gray-800 text-white w-64 min-h-screen">
            <div className="p-4">
                <h1 className="text-2xl font-bold">My App</h1>
                <ul className="mt-4">
                    {isAuthenticated && (
                        <>
                            <li>
                                <Link to="/dashboard" className="block py-2">Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/order" className="block py-2">Order</Link>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="block py-2">Logout</button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
