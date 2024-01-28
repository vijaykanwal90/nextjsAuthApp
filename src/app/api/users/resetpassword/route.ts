import {connect} from "@/dbConfig/dbConfig"
import { NextRequest,NextResponse } from "next/server";
import User from "@/models/userModel"
import { useRouter } from "next/router";
import Link from "next/navigation";

connect()

export async function PATCH(request:NextRequest){
    try {
        const router = useRouter();
        const reqBody = await request.json();
        const {newPassword} = reqBody;
        const {token } = reqBody;
        console.log(token)
        const user = await User.findOneAndUpdate({verifyToken: token},
            {
            $set:{
                 password:newPassword,
            }},
            {new:true})
            // router.push('/profile')
            return NextResponse.json({
                message:"password changed succesfully",
                success: true
            })
    } catch (error:any) {
        console.log("unable to update the password")
        
    }
    return NextResponse.json({
        message:"password changed successfully",
        success: true
    })
}