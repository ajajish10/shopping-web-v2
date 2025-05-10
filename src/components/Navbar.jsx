import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (err) {
      console.error('Logout failed:', err.message);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-700">CoolDaddy</Link>

        <div className="hidden sm:flex flex-row space-x-4 text-sm font-medium items-center">
          <Link to="/courses" className="text-gray-600 hover:text-purple-600 py-1">Courses</Link>
          <Link to="/shop" className="text-gray-600 hover:text-purple-600 py-1">Shop</Link>
          <Link to="/cart" className="text-gray-600 hover:text-purple-600 py-1">Cart</Link>

          {currentUser ? (
            <>
              <span className="text-gray-700 py-1">Hi, {currentUser.email}</span>
              <Link
                to="/account"  // Assuming you have an account page or route
                className="text-gray-600 hover:text-purple-600 py-1"
              >
                Account
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-600 hover:text-purple-600 py-1">Login</Link>
              <Link to="/register" className="text-gray-600 hover:text-purple-600 py-1">Register</Link>
            </>
          )}

          <div className="ml-4">
            <img
              src="/images/user.png" 
              alt="Account Logo"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>

        <button
          className="sm:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div ref={menuRef} className="fixed top-0 right-0 w-3/4 max-w-sm bg-white h-full shadow-lg z-50">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold text-purple-700">Menu</h2>
              <button
                className="text-gray-600 focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col p-4 space-y-4 text-sm font-medium">
              <Link to="/courses" className="text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>Courses</Link>
              <Link to="/shop" className="text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>Shop</Link>
              <Link to="/cart" className="text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>Cart</Link>

              {currentUser ? (
                <>
                  <span className="text-gray-700">Hi, {currentUser.email}</span>
                  <Link
                    to="/account"  // Assuming you have an account page or route
                    className="text-gray-600 hover:text-purple-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Account
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>Login</Link>
                  <Link to="/register" className="text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>Register</Link>
                </>
              )}

              <div className="mt-4">
                <img
                  src="/images/user.png"
                  alt="Account Logo"
                  className="w-8 h-8 rounded-full mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
