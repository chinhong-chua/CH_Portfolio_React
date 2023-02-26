const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = 3011;
app.useco;

const nodemailer = require("nodemailer");

// add middleware to parse JSON request bodies
app.use(bodyParser.json());

// Use CORS middleware
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Create a transporter for sending email
const transporter = nodemailer.createTransport({
  host: "smtp.titan.email",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Define a route to handle form submissions
app.post("/send", (req, res) => {
  console.log(req.body);

  if (req.body === "" || req.body === {}) {
    res.send("Please provide valid inputs!");
    return;
  }

  // Extract the form data from the request body
  const { username, email, message } = req.body;

  let maillist = [email, process.env.EMAIL_RECEIVER];

  // Construct the email message
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: maillist[0],
    cc: maillist[1],
    subject: "Your Message is Received.",
    text: `Name: ${username}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
});

app.get("/", (req, res) => {
  console.log(process.env.EMAIL_USER);
  res.send("Server for Sending Email from chuachinhong.com");
});

// Parse form data in the request body
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
