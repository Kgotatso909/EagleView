const nodemailer = require('nodemailer');

// Handle contact form submission
exports.handleContactSubmission = async (req, res) => {
  const { username, userEmail, emailSubject, userMessage } = req.body;

  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'moruditech@gmail.com',  // Your email here
          pass: 'yrhh wzzz vfwv obri',  // Your app password here
      },
  });

  const mailOptionsAdmin = {
      from: 'moruditech@gmail.com',
      to: 'kgotatsomohlala0@gmail.com',
      subject: `Contact Form Submission: ${emailSubject}`,
      text: `Message from ${username} (${userEmail}): ${userMessage}`,
  };

  const mailOptionsUser = {
      from: 'moruditech@gmail.com',
      to: userEmail,
      subject: 'Thank You for Contacting Us',
      text: `Dear ${username}, we have received your message. We will get back to you soon.`,
  };

  try {
      // Send mail to admin
      await transporter.sendMail(mailOptionsAdmin);
      console.log('Email sent to admin.');

      // Send acknowledgment to the user
      await transporter.sendMail(mailOptionsUser);
      console.log('Email sent to user.');

      // Respond with success
      res.send('Contact form submitted successfully');
  } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('There was an error submitting the contact form. Please try again.');
  }
};
