import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const AccountLogo = ({ onClick }) => {
    return (
        <div 
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} 
            onClick={onClick}
        >
            <FaUserCircle size={30} color="#555" />
            <span style={{ marginLeft: '8px', fontSize: '16px', color: '#555' }}>
                Account
            </span>
        </div>
    );
};

export default AccountLogo;