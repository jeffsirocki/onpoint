import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-xl font-bold">React + Spring Boot</div>
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="hover:text-gray-200">Settings</a>
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
                    <a href="#" className="block px-4 py-2 hover:bg-blue-800">Settings</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;