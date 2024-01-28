// "use client";
// import  axios from "axios";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";


// export default function verifyEmailPage() {

//     const [token, setToken] = useState("");
//     const [verified, setVerified] = useState(false);
//     const [error, setError] = useState(false)

//     const verifyUserEmail = async () => {
//         try {
//             // console.log(token)
//             // await axios.post("/api/users/verifyemail", { token });
//             await axios.post("/api/users/verifyemail",{ token })
//             console.log('reached here')
//             setVerified(true);
//             console.log(setVerified)


//         } catch (error: any) {
// // console.log(verified)
//             setError(true);
//             console.log(error.response.data)

//         }
//     }

//     useEffect(() => {

//         // const urlToken = window.location.search.split("=")[1];
//         const urlToken = window.location.search.split('=')[1];
//         // console.log(urlToken)
//         // console.log(token)
//         // if(urlToken!=token){
//         //     console.log("both are same")
//         // }
//         // console.log(urlToken)
//         setToken(urlToken )
//         console.log(token)

//     }, [])

//     useEffect(() => {
//         if (token.length > 0) {
//             // console.log(token.length )
//             verifyUserEmail();
//         }
//     }, [token]);

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen py-2">

//             <h1 className="text-4xl ">Verify Email</h1>
//             <h2 className="p-2 bg-orange-500 text-white">{token ? `${token}` : "no token"}</h2>

//             { verified && (
//                 <div>
//                     <h2 className="text-2xl text-green bg-blue-900">Email verified</h2>
//                     <Link href="/login">
//                         Login
//                     </Link>
//                 </div>
//             )}


//             { error && (
//                 <div>
//                     <h2 className=" bg-red-500 text-black text-2xl">Error</h2>

//                 </div>
//             )}
//         </div>
//     )


// }


"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";


export default function VerifyEmailPage() {

    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {
        try {
            await axios.post('/api/users/verifyemail', {token})
            setVerified(true);
        } catch (error:any) {
            setError(true);
            console.log(error.response.data);
            
        }

    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);


    useEffect(() => {
        if(token.length > 0) {
            verifyUserEmail();
        }
    }, [token]);

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">

            <h1 className="text-4xl">Verify Email</h1>
            <h2 className="p-2 bg-orange-500 text-black">{token ? `${token}` : "no token"}</h2>

            {verified && (
                <div>
                    <h2 className="text-2xl">Email Verified</h2>
                    <Link href="/login">
                        Login
                    </Link>
                </div>
            )}
            {error && (
                <div>
                    <h2 className="text-2xl bg-red-500 text-black">Error</h2>
                    
                </div>
            )}
        </div>
    )

}