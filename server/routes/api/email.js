const express = require('express');
const emailRoutes = express.Router();

const emailController = require('../../controllers/email-controller');

emailRoutes.post('/sendEmail', emailController.sendEmail)


module.exports = emailRoutes;