import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import OrderForm from './components/OrderForm';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [orders, setOrders] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(
        () => localStorage.getItem('isAuthenticated') === 'true'
    );

    useEffect(() => {
        if (isAuthenticated) {
            localStorage.setItem('isAuthenticated', 'true');
        } else {
            localStorage.removeItem('isAuthenticated');
        }
    }, [isAuthenticated]);

    useEffect(() => {
        // Dummy data
        setOrders([
            {
                source: 'Whatsapp',
                name: 'John Doe',
                phone: '123456789',
                email: 'john@example.com',
                quantity: 2,
                description: 'Birthday cake'
            },
            {
                source: 'Call',
                name: 'Jane Smith',
                phone: '987654321',
                email: 'jane@example.com',
                quantity: 1,
                description: 'Wedding cake'
            }
        ]);
    }, []);

    return (
        <Router>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="container mx-auto p-4">
                    <Routes>
                        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                        <Route path="/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Dashboard orders={orders} setIsAuthenticated={setIsAuthenticated} /></ProtectedRoute>} />
                        <Route path="/order" element={<ProtectedRoute isAuthenticated={isAuthenticated}><OrderForm setOrders={setOrders} /></ProtectedRoute>} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
            </div>
            <ToastContainer />
        </Router>
    );
}

export default App;
