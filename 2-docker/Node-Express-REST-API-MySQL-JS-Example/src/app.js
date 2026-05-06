const express = require('express');
const cors = require('cors');

const apiRouter = require('./routers/api.router');

require('./databases/mysql.db');

const app = express();

app.use(express.json());

// ✅ CORS FIX (simple et sans bug)
app.use(cors());

app.get('/', (req, res) => res.send('API is running'));

app.use('/api', apiRouter);

module.exports = app;
