import {connect} from "@/dbConfig/dbConfig"
import { sendEmail } from "@/helpers/mailer";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
// import User from "@/models/userModel"


connect()

export async function POST(request:NextRequest){

    try {
         const reqBody = await request.json();
         const { userEmail }  = reqBody;
        //  console.log(userEmail)

         const user = await User.findOne({email:userEmail});
         if(!user){
            return NextResponse.json(
                {message:"user not found"}, 
                {status: 400}
            )
            

        
         }
            // send verificaton email

         await sendEmail({
            email:userEmail,emailType:'RESET',userId: user._id
          });

          return NextResponse.json({
            message:"verfication succesfull",
            success: true
          })

    } catch (error:any) {

        return NextResponse.json({
            message:"user not found ",
            success: false
        })
        
    }
}