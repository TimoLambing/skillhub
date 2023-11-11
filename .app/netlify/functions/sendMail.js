const nodemailer = require('nodemailer')

exports.handler = async (event) => {
  const { name, email, subject, message } = JSON.parse(event.body)

  const transporter = nodemailer.createTransport({
    host: process.env.MAILHOST,
    port: process.env.MAILPORT,
    auth: {
      user: process.env.MAILUSER,
      pass: process.env.MAILPASS,
    },
  })

  const base64Image =
    'data:image/png;base64,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'

  const mailOptions = {
    from: process.env.MAILFROM,
    to: process.env.MAILFROM,
    subject: subject,
    text: message,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Submission</title>
        <style>
          body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            background-color: #f9f9f9;
            color: #333;
            margin: 0;
            padding: 20px;
          }
          .email-container {
            max-width: 600px;
            margin: auto;
            background-color: #ffffff;
            border: 1px solid #dddddd;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .email-header {
            background-color: #22acd3;
            color: white;
            padding: 20px;
            text-align: center;
          }
          .email-content {
            padding: 20px;
            line-height: 1.5;
          }
          .email-footer {
            background-color: #f2f2f2;
            color: #888888;
            text-align: center;
            padding: 10px 20px;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">
          <img src="${base64Image}" alt="Image Description">
          </div>
          <div class="email-content">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
          <div class="email-footer">
            This email was sent from the SkillHub contact form.
          </div>
        </div>
      </body>
      </html>`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent' }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    }
  }
}

/* export default async function handleContactFormSubmission(event, response) {
  try {
    const body = await readBody(event)

    if (body && body.message) {
      const mail = await transporter.sendMail({
        from: process.env.MAILFROM,
        to: process.env.MAILFROM,
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
            <p><strong>Name:</strong> ${body.name}</p>
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

      return 'Saadetud'
    }
  } catch (error) {
    sendError(event, response, error)
  }
}

function sendError(event, response, error) {
  response.statusCode = 500
  response.body = JSON.stringify({ message: error.message })
  return response
}

function createError(statusCode, statusMessage) {
  return new Error(statusMessage)
}
/* })

    return 'Saadetud'
  } catch (error) {
    sendError(
      event,
      createError({ statusCode: 400, statusMessage: error.message }),
    )
  }
}

function sendError(event, response, error) {
  response.statusCode = 500
  response.body = JSON.stringify({ message: error.message })
  return response
}

function createError(statusCode, statusMessage) {
  return new Error(statusMessage)
}

  return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
    } catch (error) {
    console.error(error);
    return {
      statusCode: 500, // Or any other appropriate error code
      body: JSON.stringify({ message: 'Error sending email' }),
    };
  }
}); */
