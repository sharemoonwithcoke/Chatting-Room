const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const authRoutes = require('./src/routes/auth');
const messageRoutes = require('./src/routes/messages');
const userRoutes = require('./src/routes/users');
const { validateUser } = require('./src/utils/validate');  
const { sessionHandler } = require('./src/utils/session');

const app = express();

const PORT = 3000;

app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/session', authRoutes);
app.use('/api/v1/messages', messageRoutes);
app.use('/api/v1/users', userRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
