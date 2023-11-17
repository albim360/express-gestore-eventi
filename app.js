const express = require('express');
const eventRouter = require('./routes/events')

const app = express();
const port = process.env.PORT || 3000;
