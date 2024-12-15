const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb://localhost:27017/eagleview', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Set up EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const indexRoutes = require('./routes/index');
const bookingRoutes = require('./routes/booking');
const contactRoutes = require('./routes/contact');
const subscriptionRoutes = require('./routes/subscriptions');

app.use('/', indexRoutes);
app.use('/booking', bookingRoutes);
app.use('/contact', contactRoutes);
app.use('/subscriptions', subscriptionRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
