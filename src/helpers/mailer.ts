import nodemailer from 'nodemailer';
import User from "@/models/userModel"
import bcryptjs from 'bcryptjs'


export const sendEmail = async ({ email, emailType, userId }: any) => {

    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if (emailType === 'VERIFY') {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken
                // verifyTokenExpiry: Date.now() + 3600000
            })
        }
        else if (emailType === 'RESET') {
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken
                // forgotPasswordTokenExpiry: Date.now() + 3600000
            })
        }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "f558a87c40442a",
              pass: "ba3fd23d8202f4"
            }
          });

          const mailOptions = {
            from:'vijay@gmail.com',
            to:email,
            subject:emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html:`<p> Click <a href="${process.env.DOMAIN}/verifyemail?token=$token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "Verify your email" : "reset your password"}
            or copy and paste the link below in your browser.<br> ${process.env.DOMAIN}/verifyemail? token=${hashedToken}
            </p>`
          }
    console.log("no error here")
          const  mailresponse = await transport.sendMail(mailOptions);
          return mailresponse;

    } catch (error: any) {
        console.log("at mailer catch section")
        throw new Error(error.message)
    }}

