import { hostname, port } from './config';
import './db';
const cors = require('cors');
const express = require('express');
const http = require('http');
const { authRoutes } = require('./routes/index');
const listeningPort = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);

// server.listen(listeningPort, hostname, () =>
//     console.log(`Server running at http://${hostname}:${port}/`)
// );

module.exports.handler = serverless(app);
