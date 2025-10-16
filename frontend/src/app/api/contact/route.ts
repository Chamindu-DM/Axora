import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const { fullName, email, phone, service, projectDetails } = formData;

    console.log('Environment variables check:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      hasPassword: !!process.env.SMTP_PASSWORD,
    });

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // For development only
      },
    });

    // Verify connection configuration
    console.log('Verifying transporter...');
    await transporter.verify();
    console.log('Transporter verified successfully');

    // Email content
    const mailOptions = {
      from: `"Axora Contact Form" <${process.env.SMTP_USER}>`,
      to: 'sahandissanayake@axoraeng.com.au',
      subject: `New Project Brief from ${fullName}`,
      html: `
        <h2>New Project Brief Submission</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Required:</strong> ${service}</p>
        <p><strong>Project Details:</strong></p>
        <p>${projectDetails.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    };

    // Send email
    console.log('Sending email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { message: 'Email sent successfully', messageId: info.messageId },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Detailed error sending email:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      stack: error.stack,
    });

    return NextResponse.json(
      {
        message: 'Failed to send email',
        error: error.message,
        details: error.response || error.code,
      },
      { status: 500 }
    );
  }
}