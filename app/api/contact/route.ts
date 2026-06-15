import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const sanitize = (str: string) =>
  str
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export async function POST(req: Request) {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("Email configuration missing");
    }

    const body = await req.json();

    let {
      name,
      email,
      company,
      message,
      website, // hidden honeypot field
    } = body;

    // Honeypot spam protection
    if (website) {
      return NextResponse.json({
        success: true,
      });
    }

    name = name?.trim() || "";
    email = email?.trim() || "";
    company = company?.trim() || "";
    message = message?.trim() || "";

    // Required validation

    if (!name) {
      return NextResponse.json(
        {
          success: false,
          error: "Name is required",
        },
        {
          status: 400,
        }
      );
    }

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          error: "Email is required",
        },
        {
          status: 400,
        }
      );
    }

    if (!message) {
      return NextResponse.json(
        {
          success: false,
          error: "Message is required",
        },
        {
          status: 400,
        }
      );
    }

    // Email validation

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid email address",
        },
        {
          status: 400,
        }
      );
    }

    // Length validation

    if (name.length > 100) {
      return NextResponse.json(
        {
          success: false,
          error: "Name too long",
        },
        {
          status: 400,
        }
      );
    }

    if (company.length > 100) {
      return NextResponse.json(
        {
          success: false,
          error: "Company name too long",
        },
        {
          status: 400,
        }
      );
    }

    if (message.length < 20) {
      return NextResponse.json(
        {
          success: false,
          error: "Message should be at least 20 characters",
        },
        {
          status: 400,
        }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        {
          success: false,
          error: "Message too long",
        },
        {
          status: 400,
        }
      );
    }

    // Sanitize

    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeCompany = sanitize(company);
    const safeMessage = sanitize(message);

    // Transporter

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email

    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      replyTo: safeEmail,

      to: process.env.EMAIL_USER,

      subject: `Portfolio Inquiry | ${
        safeCompany || "Personal"
      } | ${safeName}`,

      html: `
      
      <div style="font-family:Arial;padding:20px;line-height:1.8;">

      <h2 style="color:#2563eb;">
      New Portfolio Inquiry
      </h2>

      <hr/>

      <p>
      <strong>Name:</strong>
      ${safeName}
      </p>

      <p>
      <strong>Email:</strong>
      ${safeEmail}
      </p>

      <p>
      <strong>Company:</strong>
      ${
        safeCompany || "Not provided"
      }
      </p>

      <p>
      <strong>Submitted:</strong>
      ${new Date().toLocaleString()}
      </p>

      <hr/>

      <h3>Message</h3>

      <p>
      ${safeMessage.replace(
        /\n/g,
        "<br/>"
      )}
      </p>

      <hr/>

      <small>
      Sent from your portfolio website.
      </small>

      </div>

      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.error(
      "Contact form error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error: "Unable to send message",
      },
      {
        status: 500,
      }
    );
  }
}