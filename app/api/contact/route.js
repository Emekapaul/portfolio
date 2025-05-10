import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { fullName, email, phone, message } = await req.json();

    console.log("email :", process.env.EMAIL_USER);
    console.log("password :", process.env.EMAIL_PASS);

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter configuration
    await transporter.verify();
    console.log("Transporter verified");

    // Email content
    const mailOptions = {
      from: `Portfolio Contact <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h3 style="color: #000; font-size: 20px; font-weight: bold;">New Contact Form Submission</h3>
        <p><strong style="color: #AA367C;">Name:</strong> ${fullName}</p>
        <p><strong style="color: #AA367C;">Email:</strong> ${email}</p>
        <p><strong style="color: #AA367C;">Phone:</strong> ${
          phone || "Not provided"
        }</p>
        <p><strong style="color: #AA367C;">Message:</strong></p>
        <p style="border-left: 4px solid #4A2FBD; padding-left: 10px; margin-top: 10px; color: #333;">${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error.message);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
