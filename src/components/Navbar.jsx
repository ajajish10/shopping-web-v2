// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (err) {
      console.error('Logout failed:', err.message);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold text-purple-700">CoolDaddy</Link>

        {/* Navigation Links */}
        <div className="flex space-x-4 text-sm font-medium">
          <Link to="/courses" className="text-gray-600 hover:text-purple-600">Courses</Link>
          <Link to="/shop" className="text-gray-600 hover:text-purple-600">Shop</Link>
          <Link to="/cart" className="text-gray-600 hover:text-purple-600">Cart</Link>
          
          {currentUser ? (
            <>
              <span className="text-gray-700 hidden sm:inline">Hi, {currentUser.email}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-600 hover:text-purple-600">Login</Link>
              <Link to="/register" className="text-gray-600 hover:text-purple-600">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
