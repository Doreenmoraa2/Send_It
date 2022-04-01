
const ejs = require("ejs");
require("dotenv").config();
const db =require('../db');
const {sendMail} =require('../Helpers/email');

module.exports = async () => {
  const items = await (await db.query("SELECT * FROM users WHERE isSent = 0")).recordset

      for (let user of users.recordsets[0]) {
        const email= user.email
        const id =user.id

        ejs.renderFile("templates/Registration.ejs",{ email },async (error, data) => {
            if (error) return console.log(error);
            const message = {
              from: {
                name: "SendIt",
                address: process.env.EMAIL,
              },
              to: email,
              subject: "SendIt",
              html: data,
            };

            try {
              await sendMail(sendmailoptions);
              db.query(`UPDATE users SET isSent = 1 where id = '${id}'`);
              console.log(`Email sent to ${email}`);
            }catch (error) {
              console.log(error);
            }
          }
        );
      }
    //  catch (error) {
    //   console.log(error);
    };
  
  