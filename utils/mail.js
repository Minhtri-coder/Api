const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
   host: "smtp.sendgrid.net",
    port: 587,
    auth: {
      user: 'vodaiminhtri@gmail.com',
      pass: 'ipurbnuloaojneun'
    },
    tls: {
    rejectUnauthorized: false, // QUAN TRỌNG
  }
  });

module.exports = { transporter };