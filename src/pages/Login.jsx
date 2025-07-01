import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      // Optionally redirect if already logged in
      // navigate('/');
    }
  }, [navigate]);

  // Unified login handler: try main backend first, fallback to mock API
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Try real backend
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 404) {
        // Fallback to mock API (json-server)
        const usersRes = await fetch('http://localhost:5000/users');
        if (!usersRes.ok) throw new Error('Network response was not ok');
        const users = await usersRes.json();

        const user = users.find(
          (u) => u.email === email.trim() && u.password === password
        );

        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          setCurrentUser(user);
          navigate('/');
        } else {
          setError('Invalid email or password');
        }
        return;
      }

      if (!response.ok) {
        setError('Invalid email or password');
        return;
      }

      const user = await response.json();
      localStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentUser(user);
      navigate('/');
    } catch (err) {
      navigate('/');
      return;
    }
  };

  return (
    <section className="max-w-md mx-auto p-8 mt-12 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Login to CoolDaddy</h1>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleLogin} className="space-y-4">
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
            placeholder="********"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Login
        </button>

        <p className="text-sm text-gray-500 text-center mt-4">
          Don’t have an account?{' '}
          <a href="/register" className="text-indigo-600 underline">Register</a>
        </p>
      </form>
    </section>
  );
};

export default Login;