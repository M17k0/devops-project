import express from 'express';

const PORT = 3000;

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello, Devops Project!\n');
});

app.get('/test', (_req, res) => {
  res.send('Updated /test route :D\n');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
