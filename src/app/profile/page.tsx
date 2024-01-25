"use client";
import axios from "axios";
import Link from "next/link";
import {toast} from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function profile(){

    const router = useRouter()

    const logout = async ()=>{
        try {
            await axios.get('/api/users/logout')
            toast.success('logout succesfull')
            router.push('/login')

            
        } catch (error:any) {
            
            console.log(error.message)

            toast.error(error.message)
        }
    }

    return (
        <div className="text-white flex flex-col items-center justify-center bg-black min-h-screen py-2">
            <h1>profile </h1>
            <hr />
            <p>profile  page  </p>
            <hr/>
            <button 
            onClick={logout}className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
                Logout
            </button>
        </div>
    )
}