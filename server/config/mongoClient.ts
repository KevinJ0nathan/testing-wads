// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const URI = process.env.MONGO_URI;

if (!URI) {
  throw new Error('MONGO_URI is not defined in .env');
}

async function connectToMongo() {
  try {
    await mongoose.connect(URI as string);
    console.log('MongoDB connected successfully using Mongoose');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process on connection failure
  }
}

export { connectToMongo }
