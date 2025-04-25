// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">CoolDaddy</h3>
          <p className="text-sm text-gray-400">
            Your destination for offline music learning and quality musical instruments.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase mb-3">Explore</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
            <li><Link to="/login" className="hover:text-white">Login</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase mb-3">Support</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="" className="hover:text-white">Help Center</a></li>
            <li><a href="" className="hover:text-white">Returns</a></li>
            <li><a href="" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase mb-3">Connect</h4>
          <p className="text-gray-400 text-sm mb-2">cooldaddy@example.com</p>
          <p className="text-gray-400 text-sm">+123 456 7890</p>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} CoolDaddy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
