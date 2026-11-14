var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Custom routes placed BEFORE module.exports
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','index.html'));
});
app.get('/startGame', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','startGame.html'));
});
app.get('/left1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','left1.html'));
});

app.get('/right1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','right1.html'));
});


app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;


if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
