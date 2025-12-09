const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
   service: "gmail",
    auth: {
      user: 'vodaiminhtri@gmail.com',
      pass: 'ipurbnuloaojneun'
    },
    tls: {
    rejectUnauthorized: false, // QUAN TRỌNG
  }
  });

module.exports = { transporter };