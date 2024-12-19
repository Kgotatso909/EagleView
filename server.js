const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const contactRoutes = require('./routes/contact'); // Import contact route

const app = express();
const port = 3000;

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views', 'pages'));

// Use the contact route (this maps all contact routes including /send-email to contactRoutes)
app.use('/contact', contactRoutes); // This ensures all /contact routes are handled by contactRoutes

// Home route (index)
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});
// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
