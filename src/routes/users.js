const express = require('express');
const router = express.Router();
const { sessions } = require('../utils/session');

router.get('/', (req, res) => {
  const sid = req.cookies.sid;
  if (!sessions[sid]) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const users = Object.values(sessions).map(session => session.username);
  res.json({ users: [...new Set(users)] });
});

module.exports = router;
