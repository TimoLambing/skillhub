import nodemailer from 'nodemailer'

const endpointConfig = useRuntimeConfig()

const transporter = nodemailer.createTransport({
  host: endpointConfig.MAILHOST,
  port: endpointConfig.MAILPORT,
  auth: {
    user: endpointConfig.MAILUSER,
    pass: endpointConfig.MAILPASSWORD,
  },
})

export default defineEventHandler(async (event, response) => {
  try {
    const body = await readBody(event)

    const mail = await transporter.sendMail({
      from: endpointConfig.CONTACTMAIL,
      to: endpointConfig.CONTACTMAIL,
      subject: body.subject,
      text: body.message,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <!-- ... (rest of the HTML template) ... -->
        </html>`,
    })

    return 'Saadetud'
  } catch (error) {
    sendError(
      event,
      createError({ statusCode: 400, statusMessage: error.message }),
    )
  }
})

// Configure the contact endpoint path
export const config = {
  path: '/contact',
}
