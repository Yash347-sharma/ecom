const nodemailer = require("nodemailer");
// process.env
require("dotenv").config(true);


const sendMail = async (to, subject, mailContent) => {
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });

    let mailOptions = {
        from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
        to: to,
        subject: subject,
        html: mailContent,
        
    };

    await transporter.sendMail(mailOptions);
    return true;
}

module.exports = sendMail;


