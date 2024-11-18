const express = require('express');
const router = express.Router();
const { validateUsername } = require('../utils/validate');  
const { generateSessionId, sessions } = require('../utils/session');


router.post('/', (req, res) => {
  const { username } = req.body;
  if (!validateUsername(username)) {
    return res.status(400).json({ error: 'Invalid username' });
  }
  if (username === 'dog') {
    return res.status(403).json({ error: 'Access denied for username "dog"' });
  }

  const sid = generateSessionId();
  sessions[sid] = { username };
  res.cookie('sid', sid);
  res.json({ username });
});

router.delete('/', (req, res) => {
    const sid = req.cookies.sid;
    if (sid) {
      delete sessions[sid];
      res.clearCookie('sid');
    }
    res.sendStatus(204); 
  });
  

module.exports = router;
