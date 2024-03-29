"use client";
import React from "react";
import axios from "axios";
// import { u, useEffect } from "react"

export default function ForgotPassword() {

    const [userEmail, setUserEmail] = React.useState("");
    const [verified, setVerified] = React.useState(false);
    // const [token , setToken] = useState("")
    const verifyUser = async () => {
        try {
console.log(userEmail)
            await axios.post('/api/users/forgotpassword', {userEmail} );
            setVerified(true);
        } catch (error: any) {
            console.log(error.message)
            console.log("error while sending email")

        }

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <label htmlFor="email">email</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="text"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="email"
            />

            {!verified &&
                <button onClick={verifyUser} className="bg-green-700 p-2 m-4">Send Email</button>

            }
            {verified &&
                <span className="color-green-700 text-2xl">check email and verify from it</span>
            }

        </div>
    )
}