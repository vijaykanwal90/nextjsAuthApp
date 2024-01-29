
import { connect } from "@/dbConfig/dbConfig"
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
connect()
export async function POST(request: NextRequest) {
    // console.log(User)
    // console.log(User.password)
    try {
        // console.log("hello " , connect)
        const reqBody = await request.json();
        const { email, password } = reqBody;
        // console.log(reqBody);
        // check user exist
        const user = await User.findOne({ email })

        // console.log(User)
        if (!user) {
            // console.log(user.email)
            console.log("email to shi daal do")
            return NextResponse.json({ error: "User does not exist" },
                { status: 400 })
        }
        // check password is correct 
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            console.log("shi password daalo")
            return NextResponse.json({ error: "Password is incorrect" },
                { status: 400 })
        }
        // create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }
        // create token
        // console.log("here")
        const token = await jwt.sign(tokenData, "nextjs!", { expiresIn: "1d" })
        // console.log("correct password")

        const response = NextResponse.json({
            message: "login succesful",
            success: true,
        })
        response.cookies.set("token", token, {
            httpOnly: true,

        })
        return response;
    }
    catch (error: any) {

        return NextResponse.json(
            { error: error.message },

            { status: 500 }
        )
    }
}
