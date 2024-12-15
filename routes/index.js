const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.render('pages/index', { title: 'Home' });
});

// About page
router.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About' });
});

// Gallery page
router.get('/gallery', (req, res) => {
  res.render('pages/gallery', { title: 'Gallery' });
});

module.exports = router;
