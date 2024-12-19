const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Route for handling contact form submissions
router.post('/send-email', contactController.sendEmail);

module.exports = router;
