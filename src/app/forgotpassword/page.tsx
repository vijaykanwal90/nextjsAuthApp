"use client";
import axios from "axios";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
require('dotenv').config()
// import Link from "next/link";
import { NextResponse } from "next/server";

export default function forgotPassword() {
    const router = useRouter();
    const [user, setUser] = React.useState({ email: "" });
    const [token, setToken] = React.useState("");
    

    const forgot = async () => {


        try {
             await axios.post('/api/users/forgotpassword', {user,token});
            
            router.push('/resetpassword')
           
            return NextResponse.json({
                message:"user found",
                sucess:true
            })
        } catch (error: any) {
         
            return NextResponse.json({
                message:"user  not found",
                sucess:false
            })
        }
        
     
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);


    useEffect(() => {
        if (token.length > 0) {
            // verifyUserEmail();
            forgot();
        }
    }, [token]);

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


        </div>
    )
}