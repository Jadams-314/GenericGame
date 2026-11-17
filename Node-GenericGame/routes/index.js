var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// Custom routes placed BEFORE module.exports
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','index.html'));
});
router.get('/startGame', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','startGame.html'));
});
router.get('/left1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','left1.html'));
});

router.get('/right1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','right1.html'));
});
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','login.html'));
});
router.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','profile.html'));
});
router.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','signup.html'));
});

module.exports = router;
