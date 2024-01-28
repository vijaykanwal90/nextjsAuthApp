"use client";
import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";
require('dotenv').config()
import Link from "next/link";

export default function forgotPassword() {
    const router = useRouter();
    const [user, setUser] = React.useState({ email: "" });
    const [newUser, setNewUser] = React.useState({ newEmail: "" });

    const [verified,setVerified] = React.useState(false)

    const forgot = async () => {


        try {
          await axios.post('/api/users/forgotpassword',user);
          setVerified(true);
          console.log("data sent")
        } catch (error:any) {
            console.log(error.message)
            console.log("unable to verify email")
            
        }

    }
    const newPassword = async()=>{
        
    }
    return (

        <div className="flex flex-col items-center justify-center min-h-screen py-2">


            <label htmlFor="email">email</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
            />

            <button className="bg-green-800  text-2xl text-white" onClick={forgot}>Reset Password</button>

            (verified && {
                <div>
                    <label htmlFor="email">email</label>
                  <input
                      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                      id="newEmail"
                      type="text"
                      value={newUser.newEmail}
                      onChange={(e) => setNewUser({ ... newUser, newEmail: e.target.value })}
                      placeholder="email"
                  />
            <button className="bg-green-800  text-2xl text-white" onClick={forgot}>submit</button>

                </div>
                  
            })
        </div>
    )
}