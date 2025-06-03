import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import { connectToMongo } from './config/mongoClient'
import usersRoute from './routes/userRoutes'
import ticketRoute from './routes/TicketRoutes'

// <<<<<<< HEAD:server/server.js
// const express = require('express');
// const dotenv = require('dotenv');
// const { connectToMongo } = require('./config/mongoClient');
// const usersRoute = require('./routes/userRoutes');
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes');
// =======
// // const express = require('express');
// // const dotenv = require('dotenv');
// // const { connectToMongo } = require('./config/mongoClient');
// // const usersRoute = require('./routes/userRoutes');
// // const cors = require('cors');
// >>>>>>> 63ac826ca25b3ba21a7dc3d4cfb14663173710e1:server/server.ts

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/service/user', usersRoute);
app.use('/service/tickets', ticketRoute);

// Make sure server is running
app.get('/', (_req, res) => {
  res.send('Server is working!');
});

// Start server 
app.listen(PORT, async () => {
  try {
    await connectToMongo();
    console.log(`Server running at http://localhost:${PORT}`);
  } catch (err) {
    console.error('MongoDB connection failed', err);
  }
});