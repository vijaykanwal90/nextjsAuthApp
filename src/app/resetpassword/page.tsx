"use client";
import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";
require('dotenv').config()
import Link from "next/link";

export default function ResetPassword(){
    const [password, setPassword] = React.useState({ newPassword: "" });
    const [token , setToken] = React.useState("");



    const newPassword = async()=>{
        try {
            const token = NextResponse.data.token;
             await axios.patch('/api/users/resetpassword',password,token)
        } catch (error:any) {
            console.log(error.message)
            console.log("unable to update new password")
            
        }
    }



    return (
        <div>
                    <label htmlFor="email">email</label>
                  <input
                      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                      id="newEmail"
                      type="text"
                      value={password.newPassword}
                      onChange={(e) => setPassword({ ... password, newPassword: e.target.value })}
                      placeholder="email"
                  />
            <button className="bg-green-800  text-2xl text-white" onClick={newPassword}>submit</button>

                </div>
    )
}