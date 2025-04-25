// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-700 to-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to CoolDaddy 🎸</h1>
        <p className="text-xl mb-6">
          Your one-stop destination for music learning and premium instruments.
        </p>
        <div className="space-x-4">
          <Link
            to="/courses"
            className="bg-white text-indigo-700 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition"
          >
            Explore Courses
          </Link>
          <Link
            to="/shop"
            className="bg-white text-purple-700 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition"
          >
            Shop Instruments
          </Link>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid gap-8 md:grid-cols-3 text-center">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <img
            src="/images/guitar-icon.png"
            alt="Learn Music"
            className="h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Offline Music Courses</h3>
          <p className="text-gray-600">Learn from top instructors with curated offline content tailored just for you.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <img
            src="/images/shop-icon.png"
            alt="Shop"
            className="h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Instruments Shop</h3>
          <p className="text-gray-600">High-quality guitars, keyboards, drums, and more available to order instantly.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <img
            src="/images/community-icon.png"
            alt="Community"
            className="h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Music Community</h3>
          <p className="text-gray-600">Join a vibrant community of learners and musicians. Share, connect, grow.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
