const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', authRoutes);
app.use('/api', postRoutes);

app.get('/', (req, res) => {
    res.json({
        status: 'Server is up!',
        now: new Date()
    });
});

module.exports = app;