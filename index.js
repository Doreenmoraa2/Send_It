const bodyParser = require("body-parser");
const express = require("express");
const cron = require("node-cron");
const  mailer  = require("./emailService/registration");

const app = express();

const run =async()=>{
    cron.schedule('*/5 * * * * *',async()=>{
        console.log('running a task every second via nodemailer')
        await mailer()
    });
}
run()
const port=7000;
app.listen(port,() =>
console.log(` Background Service running on Port: ${port}`))