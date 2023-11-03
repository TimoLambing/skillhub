import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.eu',
  port: 587, // Ensure it's an integer
  auth: {
    user: process.env.MAILUSER,
    pass: process.env.MAILPASSWORD,
  },
})

exports.handler = function (event: { body: string }, context: any) {
  try {
    const body = JSON.parse(event.body)

    transporter.sendMail({
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
      statusCode: 500, // Or any other appropriate error code
      body: JSON.stringify({ message: 'Error sending email' }),
    }
  }
}

// Configure the contact endpoint path
export const config = {
  path: '/contact',
}
