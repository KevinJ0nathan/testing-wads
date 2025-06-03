import mongoose from 'mongoose'

export type Role = 'Admin' | 'User' | 'Staff'

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  phoneNumber: {
    type: String
  },
  role: {
    type: String,
    enum: ['Admin', 'User', 'Staff'],
    default: 'User',
    required: true
  },
  otp: {
    type: String
  },
  otpExpires: {
    type: Date
  },
  isVerified: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', UserSchema);

export { User }