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

  const mailOptions = {
    from: 'timo@skillhub.ee',
    to: 'timo@skillhub.ee',
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
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        </div>
        <div class="footer">
            This email was sent from your website's contact form.
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
