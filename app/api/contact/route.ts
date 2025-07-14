import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, phone, subject } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: subject || `New contact from portfolio`,
      text: `Message: ${message}\n\nFrom: ${name}\nEmail: ${email}\nPhone: ${
        phone || "N/A"
      }`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: "Failed to send email" }, { status: 500 });
  }
}
