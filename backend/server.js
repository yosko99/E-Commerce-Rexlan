const [notFound, errorHandler] = require('./middleware/errorMiddleware');
const connectDB = require('./config/db.js');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());

connectDB();

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log('Server is running on port ' + PORT));