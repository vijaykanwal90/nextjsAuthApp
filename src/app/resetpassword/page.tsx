"use client";
import React, { useEffect } from 'react';
import axios from "axios";
import Link from "next/link"

export default function ResetPassword() {
    const [token, setToken] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [verified, setVerified] = React.useState(false)

    const resetPassword = async () => {
        await axios.post('/api/users/resetpassword', { token, password })
        setVerified(true)


    }


    useEffect(() => {
        const urlToken = window.location.search.split("=")[1]
        setToken(urlToken || "")
    }, [])
    useEffect(() => {
        if (token.length > 0) {
            resetPassword
        }
    }, [token])


    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <label htmlFor="email">password</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="password"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />

            {
                !verified &&

                <button onClick={resetPassword} className='bg-green-800 p-2 text-2xl m-4'>Reset Password</button>
            }
            {
                verified && 
               <div>
                <h2 className="text-2xl">password changed</h2>
                <Link  className="text-white"href="/login">
                    Login
                </Link>
            </div>
            }
        </div>
    )
}