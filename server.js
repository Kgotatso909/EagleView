require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

// Import routes
const contactRoutes = require('./routes/contact'); // Contact form route
const authRoutes = require('./routes/auth'); // Authentication routes
const adminRoutes = require('./routes/admin'); // Admin email routes

const app = express();
const port = 3000;

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views', 'pages'));

// Session setup
app.use(session({
  secret: 'yourSecretKey', // Use a strong secret in production
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Use `secure: true` for HTTPS in production
}));

// Session setup
app.use(session({
  secret: 'yourSecretKey', // Use a strong secret in production
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Use `secure: true` for HTTPS in production
}));

// Home route (index)
app.get('/', (req, res) => {
    res.render('index');  // Render home page
});

// Use routes
app.use('/contact', contactRoutes); // Contact form routes
app.use('/auth', authRoutes); // Authentication routes
app.use('/admin', adminRoutes); // Admin email routes

// Admin email page route (only accessible to logged-in users)
app.get('/admin-email', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/auth/login');  // Redirect to login if not authenticated
    }
    res.render('adminEmail');  // Render the admin email form
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
