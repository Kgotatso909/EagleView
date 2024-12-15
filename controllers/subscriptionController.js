const Subscriber = require('../models/subscriber');
const nodemailer = require('nodemailer');

// Subscribe user
exports.subscribeUser = async (req, res) => {
  const { email } = req.body;

  const subscriber = new Subscriber({ email });

  try {
    await subscriber.save();
    res.send('Subscription successful');
  } catch (err) {
    res.status(500).send('Error subscribing user');
  }
};

// Send promo email to all subscribers
exports.sendPromoEmail = async (req, res) => {
  const subscribers = await Subscriber.find({});
  const emailList = subscribers.map(sub => sub.email);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: emailList,
    subject: 'Monthly Promotions',
    text: 'Check out our amazing offers this month!',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending promo email');
    }
    res.send('Promo email sent successfully');
  });
};
