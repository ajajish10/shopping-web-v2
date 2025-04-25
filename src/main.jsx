import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { AuthProvider } from './contexts/AuthContext'; // ✅ Corrected the path

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* ✅ Wrapping App with AuthProvider */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);