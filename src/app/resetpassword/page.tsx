"use client";
import React from 'react';

export default function ResetPassword(){
    const [password ,setPassword] = React.useState("");

    return(
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
   <label htmlFor="email">email</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="email"
            />
        </div>
    )
}