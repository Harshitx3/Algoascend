const { validationResult } = require('express-validator');
const ContactMessage = require('../models/ContactMessage');
const { isMongoEnabled } = require('../config/db');
const {
  transporter,
  isEmailEnabled,
  CONTACT_RECIPIENT_EMAIL,
} = require('../config/email');

async function createContact(req, res) {
  if (!isMongoEnabled) {
    return res.status(500).json({ error: 'Database not configured' });
  }

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstName, lastName, email, phone, topic, message } = req.body;

  try {
    const doc = await ContactMessage.create({
      firstName,
      lastName,
      email,
      phone,
      topic,
      message,
    });

    if (isEmailEnabled && transporter) {
      const subject = `New contact request from ${firstName} ${lastName}`;
      const text = [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Topic: ${topic}`,
        '',
        message,
      ].join('\n');

      await transporter.sendMail({
        from: CONTACT_RECIPIENT_EMAIL,
        to: CONTACT_RECIPIENT_EMAIL,
        replyTo: email,
        subject,
        text,
      });
    }

    res.status(201).json({ success: true, id: doc._id });
  } catch (error) {
    console.error('Contact save error:', error);
    res.status(500).json({ error: 'Failed to save contact message' });
  }
}

module.exports = { createContact };
