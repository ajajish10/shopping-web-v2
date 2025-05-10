import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const AccountCenter = () => {
    const [profilePic, setProfilePic] = useState(null);
    const [username, setUsername] = useState('User Name');
    const [password, setPassword] = useState('');

    const handleProfilePicChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setProfilePic(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const saveChanges = () => {
        alert('Changes saved successfully!');
        // Add logic to save changes to the backend
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h2>Account Center</h2>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                {profilePic ? (
                    <img
                        src={profilePic}
                        alt="Profile"
                        style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                    />
                ) : (
                    <FaUserCircle size={100} color="#555" />
                )}
                <div>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePicChange}
                        style={{ marginTop: '10px' }}
                    />
                </div>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        style={{ marginLeft: '10px', padding: '5px', width: '100%' }}
                    />
                </label>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        style={{ marginLeft: '10px', padding: '5px', width: '100%' }}
                    />
                </label>
            </div>
            <button
                onClick={saveChanges}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Save Changes
            </button>
        </div>
    );
};

export default AccountCenter;