import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      villaSize,
      area,
      message,
    } = body;

    if (
      !name ||
      !email ||
      !phone ||
      !villaSize ||
      !area ||
      !message
    ) {
      return NextResponse.json(
        { error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Nelson Homes <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `New Website Inquiry from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;">
          <h2 style="color:#4F6F52;">🏡 New Nelson Homes Inquiry</h2>

          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px;font-weight:bold;">Name</td>
              <td style="padding:10px;">${name}</td>
            </tr>

            <tr style="background:#f7f7f7;">
              <td style="padding:10px;font-weight:bold;">Phone</td>
              <td style="padding:10px;">${phone}</td>
            </tr>

            <tr>
              <td style="padding:10px;font-weight:bold;">Email</td>
              <td style="padding:10px;">${email}</td>
            </tr>

            <tr style="background:#f7f7f7;">
              <td style="padding:10px;font-weight:bold;">Villa Size</td>
              <td style="padding:10px;">${villaSize}</td>
            </tr>

            <tr>
              <td style="padding:10px;font-weight:bold;">Preferred Area</td>
              <td style="padding:10px;">${area}</td>
            </tr>
          </table>

          <hr style="margin:30px 0;" />

          <h3 style="color:#4F6F52;">Customer Message</h3>

          <p style="line-height:1.7;color:#444;">
            ${message.replace(/\n/g, "<br>")}
          </p>

          <hr style="margin:30px 0;" />

          <p style="font-size:13px;color:#888;">
            This inquiry was submitted through the Nelson Homes website.
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}