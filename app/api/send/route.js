import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const POST = async (req) =>{
    try {
      console.log("Called")
      const {subject,body} = await req.json();
      // console.log(det)
      const transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:'anonymousmsgofficial@gmail.com',
            pass: process.env.NEXT_EMAIL_PASSWORD
        }
    })

    transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
      });

    const mailOptions = {
      from : 'anonymousmsgofficial@gmail.com',
      to : 'rtshprmnk@gmail.com',
      subject : subject,
      html:`
        <h2 style="color: blue;">${body}</h2>
      `
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({message:'Email sent!'},{status:200})
    } catch (error) {
      return NextResponse.json({message:error},{status:500})
    }
}

export {POST};