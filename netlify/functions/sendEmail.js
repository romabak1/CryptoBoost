const process = require("process");
const mailgun = require("mailgun-js");

exports.handler = async function(event, context) {
  const { name, service, contact } = JSON.parse(event.body);
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY || process.env.REACT_APP_EMAIL_KEY,
    domain: process.env.MAILGUN_DOMAIN || "localhost"
  });

  const data = {
    from: "Your Website <no-reply@yourwebsite.com>",
    to: "romabak2003@gmail.com",
    subject: "New Contact Request",
    text: `Name: ${name}\nService: ${service}\nContact: ${contact}`
  };

  try {
    await mg.messages().send(data);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error sending email", error: error.message })
    };
  }
};
