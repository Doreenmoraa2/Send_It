const nodeMailer = require("nodemailer");
require("dotenv").config();
const express = require('express')
const app = express()

let transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 587, false for other ports
  requireTLS: true,
  auth: {
    user: "sendit.doreen@gmail.com",
    pass: "@doreenmoraa2022",
  },
});

let mailOptions = {
  from: "sendit.doreen@gmail.com",
  to: "doreenmoraa2019@gmail.com",
  subject: "Sending Email using Node.js",
  text: "First Email",
  html:'<h1>Hello,</h1>',
  attachments: [{
    filename:'second.txt',
    content: "This is my second trial. Testing: Node.js"
  }]
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

app.listen("4000", ()=> console.log("server started......"));