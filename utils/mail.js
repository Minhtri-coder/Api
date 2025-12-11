const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'vodaiminhtri@gmail.com',
      pass: 'dxloafdzzpdjvxsq'
    }
  });

module.exports = { transporter };