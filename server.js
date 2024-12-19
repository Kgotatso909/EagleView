const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views', 'pages'));

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'moruditech@gmail.com',  // Your email here
        pass: 'yrhh wzzz vfwv obri'  // Your app password here
    }
});

// Home route (index)
app.get('/', (req, res) => {
    res.render('index');
});

// Contact page route
app.get('/contact', (req, res) => {
    res.render('contact');
});

// Handle contact form submission
app.post('/send-email', (req, res) => {
    const { name, email, subject , message } = req.body;

    // Define email options
    const mailOptions = {
        from: email,
        to: 'kgotatsomohlala0@gmail.com',  // Replace with your email
        subject: `Contact Us - ${subject}`,
        text: `You have a new message from ${name} (${email}):\n\n${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.send('Error sending message');
        }
        console.log('Email sent: ' + info.response);
        res.send('Message sent successfully');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
