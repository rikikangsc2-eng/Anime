const express = require('express');
const path = require('path');
const app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser
app.use(express.urlencoded({ extended: true }));

// Routes
const indexRoutes = require('./routes/index');
const adminRoutes = require('./routes/admin');
const streamRoutes = require('./routes/stream');

app.use('/', indexRoutes);
app.use('/admin', adminRoutes);
app.use('/stream', streamRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
