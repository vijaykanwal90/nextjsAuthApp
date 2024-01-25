"use client";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import  React ,{ useState } from "react";
// import {profile} from "@/app/profile/page"

export default function profile() {

    const router = useRouter()
    const [data, setData] = useState("nothing")

    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('logout succesfull')
            router.push('/login')


        } catch (error: any) {

            console.log(error.message)

            toast.error(error.message)
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data)
        setData(res.data.data._id)
    }

    return (
        <div className="text-white flex flex-col items-center justify-center bg-black min-h-screen py-2">
            <h1>profile </h1>
            <hr />
            <p>profile  page  </p>

            <h2 className=" rounded bg-green-500 p-1">{data === 'nothing' ? "nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>

            <hr />
            <button
                onClick={logout} className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
                Logout
            </button>
            <button
                onClick={getUserDetails} className="bg-green-900 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
                userDetails
            </button>
        </div>
    )
}