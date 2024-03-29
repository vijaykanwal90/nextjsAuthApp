"use client";
import Link from "next/link";
import React ,{useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignUppage(){
    const router = useRouter();
    const [user, setUser] = React.useState({
        email:"",
        password:"",
        username:"",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    const [loading , setLoading] = React.useState(false)
    const onSignup = async ()=>{
        try {
            setLoading(true)
            const response = await axios.post("/api/users/signup",user);
console.log("signup succesfull ", response.data);
router.push("/login");
        }
        catch (error:any) {
            console.log("sign up failed" ,error);
            toast.error(error.message)
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
if(user.email.length >0 && user.password.length>0 && user.username.length>0){
    setButtonDisabled(false);
}
else {
    setButtonDisabled(true)
}
    },[user]);
    return (
        <div className="flex bg-black flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-white text-2xl">{loading? "Processing" : "SignUp"}</h1>
            <hr />
            {/* username */}
            <label htmlFor="username" className="text-white">Username</label>
            <input className="p-2 text-black border border-gray-300 rouded-lg mb-4 focus:outline-none focus:border-gray-600"
            type="text"
             id="username" 
            value={user.username}
             onChange={(e) =>setUser({...user, username:e.target.value})}
            placeholder="username"/>
            {/* email */}
<label htmlFor="email" className="text-white">Email</label>
            <input className="p-2 border text-black border-gray-300 rouded-lg mb-4 focus:outline-none focus:border-gray-600"
            type="text"
             id="email" 
            value={user.email}
             onChange={(e) =>setUser({...user, email:e.target.value})}
            placeholder="email"/>
{/* password */}
            <label htmlFor="password" className="text-white">password</label>
            <input className="p-2 border text-black border-gray-300 rouded-lg mb-4 focus:outline-none focus:border-gray-600"
            type="text"
             id="password" 
            value={user.password}
             onChange={(e) =>setUser({...user, password:e.target.value})}
            placeholder="password"/>
            <button 
            onClick={onSignup} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none text-white focus:border-gray-600" >{buttonDisabled ? " No SignUp":"SignUp "}</button>
            <Link href="/login" className="text-white">Visit login page</Link>
        </div>
    )
} 