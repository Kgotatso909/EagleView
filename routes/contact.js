const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Show contact form
router.get('/', (req, res) => {
  res.render('pages/contact', { title: 'Contact Us' });
});

// Handle contact form submission
router.post('/', contactController.handleContactSubmission);

module.exports = router;
