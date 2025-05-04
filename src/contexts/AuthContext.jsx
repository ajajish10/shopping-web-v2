import React, { createContext, useContext, useState } from 'react';

// Create Context
const AuthContext = createContext();
AuthContext.displayName = 'AuthContext'; // Better debug display name

// Provider Component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const logout = () => {
    // Logout logic here (Firebase removed)
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook with Safety Check
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};