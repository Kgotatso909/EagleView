const Booking = require('../models/booking');
const nodemailer = require('nodemailer');

// Show booking page
exports.getBookingPage = (req, res) => {
  res.render('pages/booking');
};

// Handle booking form submission
exports.handleBookingSubmission = async (req, res) => {
  const { name, email, checkin, checkout, room } = req.body;

  // Save booking to database
  const booking = new Booking({ name, email, checkin, checkout, room });
  await booking.save();

  // Send confirmation emails
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  });

  const mailOptionsAdmin = {
    from: process.env.EMAIL_USER,
    to: 'admin@example.com',
    subject: 'New Booking Request',
    text: `New booking from ${name} (${email}). Room: ${room}, Check-in: ${checkin}, Check-out: ${checkout}`,
  };

  const mailOptionsUser = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Booking Confirmation',
    text: `Dear ${name}, your booking has been confirmed. Check-in: ${checkin}, Check-out: ${checkout}, Room: ${room}`,
  };

  transporter.sendMail(mailOptionsAdmin);
  transporter.sendMail(mailOptionsUser);

  res.send('Booking request submitted successfully');
};
