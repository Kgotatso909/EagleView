const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts'); 
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config(); // Load environment variables

const app = express();

// Body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up static assets (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MongoDB connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('MongoDB connected');
// }).catch(err => {
//   console.log('MongoDB connection error:', err);
// });

// Import routes
const indexRoutes = require('./routes/index');
const bookingRoutes = require('./routes/bookings');
const contactRoutes = require('./routes/contact');
const subscriptionRoutes = require('./routes/subscriptions');

// Use routes
app.use('/', indexRoutes);
app.use('/bookings', bookingRoutes);
app.use('/contact', contactRoutes);
app.use('/subscriptions', subscriptionRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
