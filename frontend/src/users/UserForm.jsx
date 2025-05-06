import React, { useState } from 'react';

const UserForm = ({ onUserCreated }) => {
    const [formData, setFormData] = useState({ username: '', email: '' });
    const [formError, setFormError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setFormError(null);
    };

    const validateForm = () => {
        if (!formData.username.trim()) return 'Username is required';
        if (!formData.email.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Invalid email format';
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setFormError(validationError);
            return;
        }

        try {
            // Uncomment for real API
            const response = await fetch('/api/users', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData),
            });
            if (!response.ok) throw new Error('Failed to create user');
            const newUser = await response.json();

            onUserCreated(newUser);
            setFormData({ username: '', email: '' });
            setFormError(null);
        } catch (err) {
            setFormError(err.message);
        }
    };

    return (
        <div className="space-y-4">
            <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter username"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter email"
                />
            </div>
            {formError && (
                <p className="text-red-500 text-sm">{formError}</p>
            )}
            <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-200"
            >
                Create User
            </button>
        </div>
    );
};

export default UserForm;