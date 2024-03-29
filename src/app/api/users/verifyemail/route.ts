// import {connect} from "@/dbConfig/dbConfig"
// import { NextRequest, NextResponse } from "next/server"
// import User from "@/models/userModel"

// connect()

// export async function POST(request: NextRequest){

//     try {

//         const reqBody = await request.json()
//         const {token} = reqBody
//         // console.log(" before")
//         // console.log(token)

//        const user = await User.findOne({verifyToken: token
//         })

//         if(!user){
//             return NextResponse.json({error:"Invalid token"},{status:400})
//         }
        
//         console.log(user);

//         user.isVerfied  = true;
//         user.verifyToken = undefined;
//         // user.verifyTokenExpiry = undefined;
//         await user.save();

//         return NextResponse.json({
//             message:"email verified succesfully",
//             success:true
//         })

//     } catch (error: any) {

//         return NextResponse.json({error: error.message},
//             {status:500})
        
//     }
// }

// import {connect} from "@/dbConfig/dbConfig"
// import { NextRequest, NextResponse } from "next/server"
// import User from "@/models/userModel"

// connect()

// export async function POST(request: NextRequest){

//     try {

//         const reqBody = await request.json()
//         const {token} = reqBody
//         // console.log(" before")
//         // console.log(token)

    //    const user = await User.findOne({verifyToken: token, 
//         verifyTokenExpiry: {$gt: Date.now()}})

//         if(!user){
//             return NextResponse.json({error:"Invalid token"},{status:400})
//         }
        
//         console.log(user);

//         user.isVerfied  = true;
//         user.verifyToken = undefined;
//         user.verifyTokenExpiry = undefined;
//         await user.save();

//         return NextResponse.json({
//             message:"email verified succesfully",
//             success:true
//         })

//     } catch (error: any) {

//         return NextResponse.json({error: error.message},
    //  }
//             {status:500})
        
//  }

import {connect} from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";



connect()


export async function POST(request: NextRequest){

    try {
        const reqBody = await request.json()
        const {token} = reqBody
        // console.log(token);

        const user = await User.findOne({
            verifyToken: token});
        // console.log(user)

        if (!user) {
            return NextResponse.json({error: "Invalid token"}, {status: 400})
        }
        // console.log(user);

        user.isVerfied = true;
        user.verifyToken = token;
        // user.verifyTokenExpiry = undefined;
        await user.save();
        
        return NextResponse.json({
            message: "Email verified successfully",
            success: true
        })


    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }

}