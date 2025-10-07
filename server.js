const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({
    message: 'This is my first image created with Dockerfile!',
    date: new Date().toISOString(),
    author: 'my docker project'
  });
});

app.get('/greet', (req, res) => {
  res.json({
    mensaje: 'Hello from my docker container',
    endpoint: '/greet'
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Hello, CI Pipeline!',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access to: http://localhost:${PORT}`);
});