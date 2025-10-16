# Email Configuration Guide for Contact Form

This guide explains how to set up email notifications for the Axora contact form.

## Overview

When users submit the contact form, an email notification is sent to `sahandissanayake@axoraeng.com.au` containing:
- User's full name
- User's email address
- User's phone number
- Selected service
- Project details

## Prerequisites

- A Gmail account with 2-Factor Authentication enabled
- Next.js application running

## Setup Instructions

### Step 1: Enable 2-Factor Authentication on Gmail

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Find "2-Step Verification" and turn it ON
3. Follow the setup process (typically involves phone verification)

### Step 2: Generate App Password

1. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
2. Select **"Mail"** for the app type
3. Select **"Other"** for the device and name it (e.g., "Axora Contact Form")
4. Click **"Generate"**
5. Copy the 16-character password (remove any spaces)
   - Example format: `abcdefghijklmnop`

### Step 3: Configure Environment Variables

1. Create a `.env.local` file in the `frontend` directory:
   ```
   /Users/chamindu/Documents/GitHub/Axora/frontend/.env.local
   ```

2. Add the following configuration:
   ```plaintext
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-gmail-account@gmail.com
   SMTP_PASSWORD=your-16-char-app-password
   ```

3. Replace the placeholder values:
   - `SMTP_USER`: Your Gmail address (e.g., `chamindudissanayake1@gmail.com`)
   - `SMTP_PASSWORD`: The 16-character app password you generated

### Step 4: Restart Development Server

```bash
# Stop the current server (Ctrl+C)
# Clear Next.js cache
rm -rf .next

# Start the server
npm run dev
```

## Configuration Details

### Current Setup

- **Sender Email**: Configured in `SMTP_USER` (e.g., `chamindudissanayake1@gmail.com`)
- **Recipient Email**: `sahandissanayake@axoraeng.com.au` (hardcoded in API route)
- **Reply-To**: Automatically set to the form submitter's email

### Changing the Recipient Email

To change where form submissions are sent:

1. Open `/src/app/api/contact/route.ts`
2. Find this line:
   ```typescript
   to: 'sahandissanayake@axoraeng.com.au',
   ```
3. Change it to your desired email address

### Sending to Multiple Recipients

To send emails to multiple people, use the `cc` or `bcc` field:

```typescript
const mailOptions = {
  from: `"Axora Contact Form" <${process.env.SMTP_USER}>`,
  to: 'sahandissanayake@axoraeng.com.au',
  cc: 'chamindudissanayake1@gmail.com, another@email.com', // CC multiple emails
  // or
  bcc: 'secret@email.com', // BCC for hidden recipients
  subject: `New Project Brief from ${fullName}`,
  // ...rest of config
};
```

## Troubleshooting

### Error: "Username and Password not accepted"

**Causes:**
- Using regular Gmail password instead of App Password
- App Password entered incorrectly (check for extra spaces)
- 2-Factor Authentication not enabled

**Solutions:**
1. Verify 2FA is enabled
2. Generate a new App Password
3. Copy the password without spaces
4. Update `.env.local`
5. Restart the server

### Error: "Failed to send email"

**Causes:**
- `.env.local` file not in the correct location
- Server not restarted after changing `.env.local`
- Network/firewall issues

**Solutions:**
1. Ensure `.env.local` is in the `frontend` folder
2. Clear cache and restart: `rm -rf .next && npm run dev`
3. Check console logs for detailed error messages

### Emails Not Being Received

**Check:**
1. Spam/Junk folder of recipient email
2. Gmail "Sent" folder to confirm emails are being sent
3. Recipient email address is correct in code

## Security Best Practices

1. **Never commit `.env.local` to Git**
   - It should already be in `.gitignore`
   - Contains sensitive credentials

2. **Use App Passwords, NOT regular passwords**
   - More secure
   - Can be revoked without changing Gmail password

3. **Limit App Password usage**
   - Create separate app passwords for different applications
   - Revoke unused app passwords

4. **For Production**
   - Consider using professional email services:
     - [Resend](https://resend.com/) (Recommended for Next.js)
     - [SendGrid](https://sendgrid.com/)
     - [AWS SES](https://aws.amazon.com/ses/)

## File Structure

```
frontend/
├── .env.local                    # Environment variables (DO NOT COMMIT)
├── .env.local.example           # Example environment file (safe to commit)
├── src/
│   └── app/
│       └── api/
│           └── contact/
│               └── route.ts     # Email sending API endpoint
└── components/
    └── Contact.tsx              # Contact form component
```

## Testing

To test the email functionality:

1. Start the development server: `npm run dev`
2. Navigate to the contact form
3. Fill out all required fields
4. Submit the form
5. Check the terminal for success logs:
   ```
   Transporter verified successfully
   Sending email...
   Email sent successfully: <message-id>
   ```
6. Check `sahandissanayake@axoraeng.com.au` inbox for the email

## Support

For issues or questions, contact:
- Technical Lead: Chamindu Dissanayake
- Email: chamindudissanayake1@gmail.com