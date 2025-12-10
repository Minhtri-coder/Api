const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'vodaiminhtri@gmail.com',
      pass: 'ipurbnuloaojneun'
    },
    tls: {
    rejectUnauthorized: false, // QUAN TRỌNG
  }
  });

module.exports = { transporter };