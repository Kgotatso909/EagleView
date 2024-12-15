const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Show booking form
router.get('/', bookingController.getBookingPage);

// Handle booking submission
router.post('/', bookingController.handleBookingSubmission);

module.exports = router;
