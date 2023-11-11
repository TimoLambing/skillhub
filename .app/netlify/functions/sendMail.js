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
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 1003 175" style="enable-background:new 0 0 1003 175;" xml:space="preserve">
       <g>
         <defs>
           <rect id="SVGID_1_" width="1003" height="175"/>
         </defs>
         <clipPath id="SVGID_00000127752600511969623250000017039790488450817707_">
           <use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
         </clipPath>
         <g>
           <g>
             <path class="fill-current text-primary-900 dark:text-white" d="M149.3,118.4v3.9c0,2.1-0.3,4.2-0.8,6.1c-0.5,1.9-2.4,2.9-5.6,2.9H34.1c-0.6,0-2.6,1.9-5.8,5.6
               c-3.2,3.7-6.7,8-10.4,12.8c-3.7,4.8-7.3,9.6-10.6,14.2c-3.3,4.7-5.5,8.1-6.5,10.2h163.3c5.8,0,11.4-1.8,16.8-5.3
               c5.4-3.5,10.2-8,14.4-13.3c4.2-5.3,7.5-11.2,10.1-17.5c2.6-6.3,3.9-12.2,3.9-17.8v-1.9c0-4.9-0.8-10.2-2.2-16
               c-1.5-5.8-3.8-11.2-6.9-16.2c-3.1-5-7.1-9.2-12-12.5c-4.9-3.3-10.8-5-17.6-5h-60.9c-0.2,0-1.1-0.4-2.7-1.1
               c-1.6-0.8-2.8-1.5-3.7-2.4c-0.4,0-0.6-0.2-0.6-0.6H38.9c0.4,5.3,1.7,10.7,3.8,16.2c2.1,5.4,5,10.4,8.6,14.7
               c3.6,4.4,7.9,8,12.8,10.7c4.9,2.8,10.5,4.2,16.7,4.2h64c1.7,0,2.9,0.9,3.5,2.7C149,114.9,149.3,116.7,149.3,118.4z M252.2,4.4
               H88.8c-4.9,0-9.8,1.3-14.6,4c-4.8,2.7-9.3,6.1-13.6,10.3c-4.3,4.2-8.1,8.8-11.4,13.9c-3.3,5.1-5.9,10.1-7.8,15h173.3
               c7.5-7,14.4-14.2,20.6-21.5C241.6,18.9,247.2,11.6,252.2,4.4z"/>
             <path class="fill-current text-primary-900 dark:text-white" d="M263.7,170.4l10.5-59.4l33.2,59.4H350l-40.8-67.3l62.9-56.6h-47.2l-47,43.5l15.3-86.3h-36.7L227,170.4H263.7
               z"/>
             <path class="fill-current text-primary-900 dark:text-white" d="M405.1,38c12.5,0,24.2-8.3,24.2-22.3c0-9.6-7.4-15.5-17.7-15.5c-12.5,0-24.2,9-24.2,22.5
               C387.4,32.3,394.8,38,405.1,38z M400,170.4l21.8-123.9h-36.7l-21.8,123.9H400z"/>
             <path class="fill-current text-primary-900 dark:text-white" d="M476.5,170.4l5.2-29.7h-9.2c-2.6,0-6.1-0.7-6.1-5.7c0-0.4,0-1.3,0.2-2L489.6,3.7h-36.7l-25.1,142
               c-0.4,2-0.4,3.7-0.4,5.5c0,12.5,8.5,19.2,24.5,19.2H476.5z"/>
             <path class="fill-current text-primary-900 dark:text-white" d="M546,170.4l5.2-29.7H542c-2.6,0-6.1-0.7-6.1-5.7c0-0.4,0-1.3,0.2-2L559.1,3.7h-36.7l-25.1,142
               c-0.4,2-0.4,3.7-0.4,5.5c0,12.5,8.5,19.2,24.5,19.2H546z"/>
           </g>
           <g>
             <path class="st1" d="M603.2,170.4l11.6-65.8h63.4l-11.6,65.8h39.1L735.1,3.7H696l-11.8,66h-63.4l11.8-66h-39.1l-29.5,166.7H603.2z"/>
             <path class="st1" d="M774.7,173c14.9,0,25.1-4.8,34.5-15.9l-2.4,13.3h36.7l21.8-123.9h-36.7l-12.2,69.7c-2,10.3-4.4,16.6-8.3,21
               c-3.9,4.2-9.4,6.3-17.5,6.3c-6.3,0-10.5-1.5-12.9-4.6c-1.5-2.2-2.4-5.5-2.4-10.1c0-3.3,0.4-7.4,1.3-12.7l12.2-69.7h-36.7
               l-12.2,69.3c-2,11.8-3.1,19-3.1,24.9c0,4.2,0.4,7.4,1.5,10.9C742.3,165.8,754.4,173,774.7,173z"/>
             <path class="st1" d="M935.5,173c38.9,0,66.9-39.5,66.9-80.2c0-29.3-17-48.9-44.1-48.9c-13.1,0-24,3.5-34.5,15.9l10-56.1H897l-29.5,166.7h36.7
               l2.4-13.3C912.7,169.5,922.3,173,935.5,173z M930.7,141.7c-13.8,0-22.1-9.6-22.1-24.9c0-20.5,13.1-41.7,33.9-41.7
               c14,0,22.1,9.8,22.1,24.7C964.5,120.3,951.4,141.7,930.7,141.7z"/>
           </g>
         </g>
       </g>
       </svg>
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
