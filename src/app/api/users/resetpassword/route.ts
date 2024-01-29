import {connect} from "@/dbConfig/dbConfig"
import { NextResponse,NextRequest } from "next/server"
import User from "@/models/userModel"
import bcryptjs from "bcryptjs"
connect()

export async function PATCH(req: NextRequest){



    try {
        const reqBody = await req.json();
        const {token ,password} = reqBody;
        const user = await User.findOne({forgotPasswordToken:token});
        
        if(!user){
            return NextResponse.json({message:"user not found"},{status:400})
        }
        
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt);
        
        user.password = hashedPassword;
        user.forgotpasswordToken = undefined;
        await user.save();
        return NextResponse.json({message:"password changed succesfully",success: true})

    } catch (error:any) {
        console.log(error.message)

        return NextResponse.json({message:"error while changing password"},{status:400})
        
    }

}