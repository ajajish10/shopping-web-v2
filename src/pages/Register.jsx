import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Register = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (currentUser) {
      navigate('/'); // Already logged in, redirect
    }
  }, [currentUser, navigate]);

  // Unified registration handler that supports both real backend and mock API
  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Try main backend registration first
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      // If 404, fallback to mock API
      if (response.status === 404) {
        // Mock API fallback
        const usersRes = await fetch('http://localhost:5000/users');
        const users = await usersRes.json();

        if (users.some((user) => user.email === email)) {
          setError('Email already exists');
          return;
        }

        await fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });

        navigate('/login');
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to register');
        return;
      }

      navigate('/login'); // Redirect after successful registration
    } catch (err) {
      console.error('Registration error:', err);
      setError('Failed to register. Please try again.');
    }
  };

  return (
    <section className="max-w-md mx-auto p-8 mt-12 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold text-center text-purple-600 mb-6">Create an Account</h1>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            required
            className="w-full border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            required
            className="w-full border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 characters"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          Register
        </button>

        <p className="text-sm text-gray-500 text-center mt-4">
          Already have an account? <a href="/login" className="text-purple-600 underline">Login</a>
        </p>
      </form>
    </section>
  );
};

export default Register;