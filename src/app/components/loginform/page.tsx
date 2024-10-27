'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const LogiForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email", email, "Password", password);
    };
    return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className='bg-whitw p-8 rounded-lg shadow-md w-full max-w-sm'>
            <h2 className='text-2xl font-bold text-center mb-6 text-cyan-800'>Login</h2>

            <div className='mb-4'>
                <label htmlFor="email" className='block text-gray-700 mb-2'>Email:</label>
                <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-sky-500'
                required
                />
            </div>

            <div className='mb-4'>
                <label htmlFor="password" className='block text-gray-700 mb-2'>Password:</label>
                <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-sky-500'
                required
                />
            </div>

            <button type='submit' className='w-full bg-cyan-800 text-white py-2 rounded-md hover:bg-cyan-700'>
                Login
            </button>

            <ul className='text-center'>
            <Link className='text-cyan-800 mr-6 hover:text-cyan-700' href="/components/signupform">Sign Up</Link>
            </ul>
        </form>
    </div>
  );
};

export default LogiForm
