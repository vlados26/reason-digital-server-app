require('./db');
const { port } = require('./config');
const cors = require('cors');
const express = require('express');
const http = require('http');
const { authRoutes } = require('./routes/index');

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);

server.listen(process.env.PORT || port);
