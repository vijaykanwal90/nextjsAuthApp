import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"

export const getDataFromToken = async(request: NextRequest)=>{
try {
    
    const token  =request.cookies.get("token")?.value || "";
    // console.log(token)
    const decodedToken:any =  await jwt.verify(token ,"nextjs");
    console.log(decodedToken)
    return decodedToken.id;

} catch (error: any) {
    console.log("gkkg")
    throw new Error(error.message);
}
}