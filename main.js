let nodemailer = require("nodemailer");
const config = require("./config");

let transporter = nodemailer.createTransport({
  host: config.HOST,
  port: config.PORT,
  secure: config.SECURE,
  auth: {
    user: config.SES_USERNAME,
    pass: config.SES_PASSWORD,
  },
});

transporter.sendMail(
  {
    from: "Apni Estate <test-mail@apniestate.com>",
    to: "itsarijitdebnath@gmail.com",
    subject: "Test Email sent via Nodemailer",
    text: "Hey there! What's up?",
  },
  (err, info) => {
    if (err) {
      console.log("Error sending email");
      console.log(err);
    }

    console.log("Sent email to", info.accepted[0]);
  }
);
