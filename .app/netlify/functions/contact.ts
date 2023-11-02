import nodemailer from 'nodemailer'

// Check if the environment variables are defined
if (
  !process.env.MAILHOST ||
  !process.env.MAILPORT ||
  !process.env.MAILUSER ||
  !process.env.MAILPASSWORD
) {
  throw new Error('Missing environment variables for nodemailer configuration')
}

const transporter = nodemailer.createTransport({
  host: process.env.MAILHOST,
  port: parseInt(process.env.MAILPORT, 10), // Parse to integer
  auth: {
    user: process.env.MAILUSER,
    pass: process.env.MAILPASSWORD,
  },
})

export async function handler(event: { body: string }, context: any) {
  try {
    // Check if 'event.body' is defined
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Missing request body' }),
      }
    }
    const body = JSON.parse(event.body)

    const mail = await transporter.sendMail({
      from: process.env.CONTACTMAIL,
      to: process.env.CONTACTMAIL,
      subject: body.subject,
      text: body.message,
      html: `
              <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .email-container {
            margin: auto;
            padding: 20px;
            width: 80%;
            background-color: #fff;
            border-radius: 8px;
        }
        .header {
            font-size: 24px;
            margin-bottom: 20px;
            color: #333;
        }
        .content {
            margin-bottom: 20px;
            color: #555;
        }
        .footer {
            font-size: 12px;
            color: #888;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">New Contact Form Submission</div>
        <div class="content">
            <p><strong>Name blabla :</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Message:</strong></p>
            <p>${body.message}</p>
        </div>
        <div class="footer">
            This email was sent from your website's contact form.
        </div>
    </div>
</body>
</html>`,
    })

    /* return 'Saadetud';
      } catch (error) {
        sendError(event, createError({ statusCode: 400, statusMessage: error.message }))
      }
}) */

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email' }),
    }
  }
}

export { handler as default }

// Configure the contact endpoint path
export const config = {
  path: '/contact',
}
