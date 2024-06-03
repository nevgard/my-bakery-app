import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isAuthenticated }) {
    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }
    return children;
}

export default ProtectedRoute;
