const express = require('express');
const path = require('path');
const router = express.Router();
const User = require('../models/User');
const nodemailer = require('nodemailer');
const Mail = require('../models/Email');


module.exports = {


sendEmail:(req, res, next) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: '', // generated ethereal user
      pass: '' // generated ethereal password
    }
  });
  let mailOptions = {
    from: '', // service email
    to: req.user.email, 
    subject: 'State Your Traker ✔', // Subject line
    text: '', // plain text body
    html: '' // html body
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent: ' + info.response);
    }
  });
}
}
