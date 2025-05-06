import React, { useState, useEffect } from 'react';
import Modal from "./Modal.jsx";
import UserForm from "./UserForm.jsx";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('/api/users');
            if (!response.ok) throw new Error('Failed to fetch users');
            const data = await response.json();
            setUsers(data); // Replace with setUsers(data)
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    const handleUserCreated = (newUser) => {
        setUsers(prev => [...prev, newUser]);
        setIsModalOpen(false);
    };

    const handleDelete = async (userId) => {
        if (!window.confirm('Are you sure you want to delete this user?')) return;

        try {
            const response = await fetch(`/api/users/${userId}`, {
              method: 'DELETE',
            });
            if (!response.ok) throw new Error('Failed to delete user');

            setUsers(prev => prev.filter(user => user.id !== userId));
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="container mx-auto pt-6 sm:pt-8 px-4 sm:px-6">
            <div className="bg-gradient-to-b from-white to-gray-50 p-6 sm:p-8 rounded-xl shadow-md border border-gray-100">
                <div className="flex flex-col items-center space-y-4 sm:space-y-6">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-2">User Settings</h1>
                    <p className="text-base text-gray-500">Manage users retrieved from the backend</p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-200"
                    >
                        Create New User
                    </button>
                    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                        <UserForm onUserCreated={handleUserCreated} />
                    </Modal>
                    {loading ? (
                        <p className="text-gray-500 italic">Loading users...</p>
                    ) : error ? (
                        <p className="text-red-500">Error: {error}</p>
                    ) : users.length === 0 ? (
                        <p className="text-gray-500">No users found</p>
                    ) : (
                        <div className="w-full overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">ID</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Username</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Email</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600"></th>
                                </tr>
                                </thead>
                                <tbody>
                                {users.map(user => (
                                    <tr key={user.id} className="border-t hover:bg-gray-50">
                                        <td className="px-4 py-2 text-sm text-gray-700">{user.id}</td>
                                        <td className="px-4 py-2 text-sm text-gray-700">{user.username}</td>
                                        <td className="px-4 py-2 text-sm text-gray-700">{user.email}</td>
                                        <td className="px-4 py-2 text-sm">
                                            <button
                                                onClick={() => handleDelete(user.id)}
                                                className="bg-red-600 text-white font-semibold py-1 px-3 rounded-md hover:bg-red-700 transition-all duration-200"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Users;