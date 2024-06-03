import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuthenticated }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'admin' && password === 'password') {
            setIsAuthenticated(true);
            navigate('/dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded p-6 mt-10">
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
            <form className="space-y-4">
                <div>
                    <label className="block mb-2">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button
                    type="button"
                    onClick={handleLogin}
                    className="w-full bg-blue-500 text-white p-2 rounded mt-4"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
