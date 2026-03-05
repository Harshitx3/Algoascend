const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const twilio = require('twilio');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Twilio Setup
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const VERIFY_SERVICE_SID = process.env.TWILIO_VERIFY_SID;

app.use(cors());
app.use(express.json());

// Log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Rate Limiter for OTP
const otpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 5, 
  message: { error: 'Too many OTP requests from this IP, please try again after 15 minutes' }
});


app.post('/api/otp/send', otpLimiter, [
  body('mobile').matches(/^\+\d{10,15}$/).withMessage('Invalid phone number format. Must include country code (e.g., +91XXXXXXXXXX)')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { mobile } = req.body;

  try {
    const verification = await twilioClient.verify.v2.services(VERIFY_SERVICE_SID)
      .verifications
      .create({ to: mobile, channel: 'sms' });

    res.json({ message: 'OTP sent successfully', status: verification.status });
  } catch (error) {
    console.error('Twilio Send OTP Error:', error);
    let errorMessage = 'Failed to send OTP. Please try again.';
    
    if (error.code === 'ENOTFOUND' || error.code === 'ETIMEDOUT') {
      errorMessage = 'Network Error: Could not reach Twilio. Please check your internet connection or DNS settings.';
    } else if (error.status === 401) {
      errorMessage = 'Twilio Auth Error: Invalid Account SID or Auth Token.';
    } else if (error.status === 404) {
      errorMessage = 'Twilio Config Error: Invalid Verify Service SID.';
    } else if (error.code === 21608) {
      errorMessage = 'Twilio Trial Restriction: This number is not verified in your Twilio account. Please add it to "Verified Caller IDs" in Twilio Console or upgrade your account to send to any number.';
    }
    
    res.status(500).json({ error: errorMessage });
  }
});

// Verify OTP
app.post('/api/otp/verify', [
  body('mobile').matches(/^\+\d{10,15}$/).withMessage('Invalid phone number format'),
  body('otp').isLength({ min: 4, max: 10 }).withMessage('Invalid OTP format')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { mobile, otp } = req.body;

  try {
    const verificationCheck = await twilioClient.verify.v2.services(VERIFY_SERVICE_SID)
      .verificationChecks
      .create({ to: mobile, code: otp });

    if (verificationCheck.status === 'approved') {
      res.json({ success: true, message: 'OTP verified successfully' });
    } else {
      res.status(400).json({ success: false, error: 'Invalid or expired OTP' });
    }
  } catch (error) {
    console.error('Twilio Verify OTP Error:', error);
    let errorMessage = 'Verification failed. Please try again.';
    
    if (error.code === 'ENOTFOUND' || error.code === 'ETIMEDOUT') {
      errorMessage = 'Network Error: Could not reach Twilio. Please check your internet connection.';
    }
    
    res.status(500).json({ error: errorMessage });
  }
});



// Hash Password
app.post('/api/auth/hash-password', async (req, res) => {
  try {
    const { password } = req.body;
    if (!password) return res.status(400).json({ error: 'Password required' });
    const hashedPassword = await bcrypt.hash(password, 10);
    res.json({ hashedPassword });
  } catch (error) {
    res.status(500).json({ error: 'Error hashing password' });
  }
});

// Compare Password
app.post('/api/auth/compare-password', async (req, res) => {
  try {
    const { password, hashedPassword } = req.body;
    if (!password || !hashedPassword) return res.status(400).json({ error: 'Data missing' });
    const isMatch = await bcrypt.compare(password, hashedPassword);
    res.json({ isMatch });
  } catch (error) {
    res.status(500).json({ error: 'Error comparing password' });
  }
});

// Generate Token
app.post('/api/auth/generate-token', (req, res) => {
  try {
    const user = req.body;
    if (!user) return res.status(400).json({ error: 'User data required' });
    const token = jwt.sign(user, process.env.JWT_SECRET || 'secret', { expiresIn: '24h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error generating token' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
