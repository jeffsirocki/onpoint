import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-xl font-bold">React + Spring Boot</div>
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="hover:text-gray-200" aria-current="page">Home</Link>
                    <Link to="/users" className="hover:text-gray-200">Users</Link>
                </div>
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden bg-blue-700">
                    <Link to="/" className="hover:text-gray-200" aria-current="page">Home</Link>
                    <Link to="/users" className="hover:text-gray-200">Users</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;