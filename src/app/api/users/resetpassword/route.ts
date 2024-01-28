import {connect} from "@/dbConfig/dbConfig"
import { NextRequest,NextResponse } from "next/server";
import User from "@/models/userModel"




export async function PATCH(request:NextRequest){
    try {
        
        const reqBody = await request.json();
        const {newPassword} = reqBody;
        const {token } = reqBody;
        const user = await User.findOne({verifyToken: token})
    } catch (error:any) {
        console.log("unable to update the password")
        
    }
}