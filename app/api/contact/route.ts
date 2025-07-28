import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Incoming data:", body);

    const { name, email, message, phone, subject } = body;

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

    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: subject || "New contact from portfolio",
      text: `Message: ${message}\n\nFrom: ${name}\nEmail: ${email}\nPhone: ${
        phone || "N/A"
      }`,
    });

    console.log("Mail sent:", info);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("❌ API Error:", err.message, err.stack);
    } else {
      console.error("❌ Unknown error:", err);
    }

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
