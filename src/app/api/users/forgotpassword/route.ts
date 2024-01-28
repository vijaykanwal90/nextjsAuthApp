import { connect } from "@/dbConfig/dbConfig"
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel"

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { email } = reqBody;
        console.log(email)
        const user = await User.findOne({ email: email })
        if (!user) {
            return NextResponse.json({ message: "user not found for this email" }, { status: 400 })
        }
        const token = await user?.verifyToken;
        console.log(token)
        return NextResponse.json({
            data: token,
            message: "email received",
            success: true
        })

    } catch (error: any) {
        console.log(error.message)
        console.log("error on reseting new password")
        return NextResponse.json({
        
            message: "email reset failed",
            success: 400
        })
    }
   
}