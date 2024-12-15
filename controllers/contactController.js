const nodemailer = require('nodemailer');

// Handle contact form submission
exports.handleContactSubmission = async (req, res) => {
  const { name, email, subject, message } = req.body;

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
    subject: `Contact Form Submission: ${subject}`,
    text: `Message from ${name} (${email}): ${message}`,
  };

  const mailOptionsUser = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank You for Contacting Us',
    text: `Dear ${name}, we have received your message. We will get back to you soon.`,
  };

  transporter.sendMail(mailOptionsAdmin);
  transporter.sendMail(mailOptionsUser);

  res.send('Contact form submitted successfully');
};
