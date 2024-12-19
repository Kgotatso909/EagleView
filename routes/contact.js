const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// GET request to show the contact form
router.get('/', (req, res) => {
    res.render('contact');
});

// POST request to handle the form submission
router.post('/send-email', contactController.sendEmail);

module.exports = router;
