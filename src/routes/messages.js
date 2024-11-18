const express = require('express');
const router = express.Router();
const { sessions } = require('../utils/session');

const messages = [];

router.get('/', (req, res) => {
  const sid = req.cookies.sid;
  if (!sessions[sid]) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  res.json({ messages });
});

router.post('/', (req, res) => {
  const sid = req.cookies.sid;
  const { text } = req.body;
  if (!sessions[sid]) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  if (!text.trim()) {
    return res.status(400).json({ error: 'Message cannot be empty' });
  }

  const message = { user: sessions[sid].username, text, timestamp: Date.now() };
  messages.push(message);
  res.json(message);
});

module.exports = router;
