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
        // Add backend saving logic here
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-purple-100 to-white px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-semibold text-center text-purple-700 mb-6">Account Center</h2>

                <div className="flex flex-col items-center mb-6">
                    {profilePic ? (
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="w-24 h-24 rounded-full shadow-md object-cover"
                        />
                    ) : (
                        <FaUserCircle size={96} className="text-gray-400" />
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePicChange}
                        className="mt-3 text-sm text-gray-500"
                    />
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>
                </div>

                <button
                    onClick={saveChanges}
                    className="mt-6 w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition shadow-md"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default AccountCenter;
