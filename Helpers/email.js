const nodeMailer= require('nodemailer');
const { config } = require('process');
require("dotenv").config()

function createTransporter(config){
    let transporter=nodeMailer.createTransport(config);
    return transporter;
}
const defaultConfig = {
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 587, false for other ports
    requireTLS: true,
    auth: {
      user: process.env.email,
      pass: process.env.email_password,
    },
  };
  
  module.exports = {
    sendMail: async (email) => {
      const transporter = createTransporter(defaultConfig);
      await transporter.verify();
      await transporter.sendMail(email, (error, info) => {
        if (error) {
          console.log("Error");
        }
      });
    },
  };